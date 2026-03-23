import { useState, useEffect } from "react";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Clock, Phone, Mail, User, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Valideringskonstanter
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_PHONE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;
const PHONE_REGEX = /^[\d\s\-\+\(\)]+$/;

// Rate limiting konstanter
const MAX_SUBMITS_PER_WINDOW = 3;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minuter
const RATE_LIMIT_STORAGE_KEY = "xbit_booking_submits";

// Sanitize input - ta bort potentiellt skadliga tecken
const sanitizeInput = (text: string): string => {
  return text
    .replace(/[<>]/g, '') // Ta bort HTML-taggar
    .replace(/\r\n/g, '\n') // Normalisera radbrytningar
    .trim();
};

// Tidslabels för visning
const timeLabels: { [key: string]: string } = {
  "08-10": "08:00 - 10:00",
  "10-12": "10:00 - 12:00",
  "12-14": "12:00 - 14:00",
  "14-16": "14:00 - 16:00",
  "16-18": "16:00 - 18:00",
  "18-20": "18:00 - 20:00",
  "20-22": "20:00 - 22:00",
};

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: null as Date | null,
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const [rateLimitResetTime, setRateLimitResetTime] = useState<Date | null>(null);

  // Kontrollera rate limiting vid mount och när dialog öppnas
  useEffect(() => {
    if (open) {
      checkRateLimit();
    }
  }, [open]);

  const checkRateLimit = () => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
      if (!stored) {
        setRateLimitExceeded(false);
        setRateLimitResetTime(null);
        return;
      }

      const { submits, firstSubmitTime } = JSON.parse(stored);
      const now = Date.now();
      const timeSinceFirstSubmit = now - firstSubmitTime;

      if (timeSinceFirstSubmit >= RATE_LIMIT_WINDOW_MS) {
        // Tidsfönstret har gått ut, rensa
        localStorage.removeItem(RATE_LIMIT_STORAGE_KEY);
        setRateLimitExceeded(false);
        setRateLimitResetTime(null);
      } else if (submits >= MAX_SUBMITS_PER_WINDOW) {
        // Rate limit överskriden
        const resetTime = new Date(firstSubmitTime + RATE_LIMIT_WINDOW_MS);
        setRateLimitExceeded(true);
        setRateLimitResetTime(resetTime);
      } else {
        setRateLimitExceeded(false);
        const resetTime = new Date(firstSubmitTime + RATE_LIMIT_WINDOW_MS);
        setRateLimitResetTime(resetTime);
      }
    } catch (error) {
      // Om det finns ett fel med localStorage, ignorera det
      console.error("Error checking rate limit:", error);
      setRateLimitExceeded(false);
      setRateLimitResetTime(null);
    }
  };

  const recordSubmit = () => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
      const now = Date.now();

      if (!stored) {
        // Första försöket
        localStorage.setItem(
          RATE_LIMIT_STORAGE_KEY,
          JSON.stringify({ submits: 1, firstSubmitTime: now })
        );
      } else {
        const { submits, firstSubmitTime } = JSON.parse(stored);
        const timeSinceFirstSubmit = now - firstSubmitTime;

        if (timeSinceFirstSubmit >= RATE_LIMIT_WINDOW_MS) {
          // Tidsfönstret har gått ut, starta om
          localStorage.setItem(
            RATE_LIMIT_STORAGE_KEY,
            JSON.stringify({ submits: 1, firstSubmitTime: now })
          );
        } else {
          // Öka räknaren
          localStorage.setItem(
            RATE_LIMIT_STORAGE_KEY,
            JSON.stringify({ submits: submits + 1, firstSubmitTime })
          );
        }
      }
    } catch (error) {
      console.error("Error recording submit:", error);
    }
  };
  
  // Kolla om vald tid är jourtid
  // Jourtider: Vardagar 18:00-22:00, Helger (lördag/söndag) 08:00-22:00
  const isJourTime = (() => {
    if (!formData.date || !formData.time) return false;
    
    const dayOfWeek = formData.date.getDay(); // 0 = söndag, 6 = lördag
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    if (isWeekend) {
      // Helger: alla tider 08:00-22:00 är jourtider
      return formData.time === "08-10" || formData.time === "10-12" || 
             formData.time === "12-14" || formData.time === "14-16" || 
             formData.time === "16-18" || formData.time === "18-20" || 
             formData.time === "20-22";
    } else {
      // Vardagar: bara 18:00-22:00 är jourtider
      return formData.time === "18-20" || formData.time === "20-22";
    }
  })();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Kontrollera rate limiting
    checkRateLimit();
    if (rateLimitExceeded && rateLimitResetTime) {
      const minutesLeft = Math.ceil(
        (rateLimitResetTime.getTime() - Date.now()) / 60000
      );
      toast({
        title: "För många försök",
        description: `Du har skickat för många bokningar. Vänligen vänta ${minutesLeft} minut${minutesLeft !== 1 ? "er" : ""} innan du försöker igen.`,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Validera längd på fält
    if (formData.name.length > MAX_NAME_LENGTH) {
      toast({
        title: "Namnet är för långt",
        description: `Namnet får vara max ${MAX_NAME_LENGTH} tecken.`,
      });
      setIsSubmitting(false);
      return;
    }
    
    if (formData.email.length > MAX_EMAIL_LENGTH) {
      toast({
        title: "E-postadressen är för lång",
        description: `E-postadressen får vara max ${MAX_EMAIL_LENGTH} tecken.`,
      });
      setIsSubmitting(false);
      return;
    }
    
    if (formData.phone.length > MAX_PHONE_LENGTH) {
      toast({
        title: "Telefonnumret är för långt",
        description: `Telefonnumret får vara max ${MAX_PHONE_LENGTH} tecken.`,
      });
      setIsSubmitting(false);
      return;
    }
    
    // Validera telefonnummer-format
    if (formData.phone && !PHONE_REGEX.test(formData.phone)) {
      toast({
        title: "Ogiltigt telefonnummer",
        description: "Telefonnumret får endast innehålla siffror, mellanslag, bindestreck, plus och parenteser.",
      });
      setIsSubmitting(false);
      return;
    }
    
    if (formData.message.length > MAX_MESSAGE_LENGTH) {
      toast({
        title: "Meddelandet är för långt",
        description: `Meddelandet får vara max ${MAX_MESSAGE_LENGTH} tecken.`,
      });
      setIsSubmitting(false);
      return;
    }
    
    // Validera Select-fältet manuellt
    if (!formData.service) {
      toast({
        title: "Vänligen fyll i alla obligatoriska fält",
        description: "Tjänst måste väljas.",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Skapa e-postmeddelande
      const serviceLabels: { [key: string]: string } = {
        dator: "Datorhjälp",
        telefon: "Telefon & Surfplatta",
        internet: "Internet & Nätverk",
        tv: "TV & Streaming",
        hembesok: "Hembesök med RUT-avdrag",
        foretag: "Företagssupport",
        ekonomi: "Ekonomitjänster",
        annat: "Annat",
      };

      const serviceLabel = serviceLabels[formData.service] || formData.service;
      
      // Kolla om det är jourtid
      const dayOfWeek = formData.date ? formData.date.getDay() : null;
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isJour = (() => {
        if (!formData.date || !formData.time) return false;
        if (isWeekend) {
          return formData.time === "08-10" || formData.time === "10-12" || 
                 formData.time === "12-14" || formData.time === "14-16" || 
                 formData.time === "16-18" || formData.time === "18-20" || 
                 formData.time === "20-22";
        } else {
          return formData.time === "18-20" || formData.time === "20-22";
        }
      })();
      
      const timeLabel = timeLabels[formData.time] || formData.time;
      
      // Sanitize inputs innan de används i e-post
      const sanitizedName = sanitizeInput(formData.name);
      const sanitizedEmail = sanitizeInput(formData.email);
      const sanitizedPhone = sanitizeInput(formData.phone);
      const sanitizedMessage = formData.message ? sanitizeInput(formData.message) : '';
      
      // Skapa e-postmeddelande och öppna e-postklient
      const subject = encodeURIComponent(`${isJour ? "⚠️ JOUR" : "Ny"} bokning: ${serviceLabel}`);
      const emailBody = encodeURIComponent(
        `${isJour ? "⚠️ JOURBOKNING" : "Ny bokning"} från webbplatsen\n\n` +
        `Namn: ${sanitizedName}\n` +
        `E-post: ${sanitizedEmail}\n` +
        `Telefon: ${sanitizedPhone}\n` +
        `Tjänst: ${serviceLabel}\n` +
        (formData.date ? `Önskat datum: ${format(formData.date, "PPP", { locale: sv })}\n` : '') +
        (formData.time ? `Önskad tid: ${timeLabel}${isJour ? " (JOUR)" : ""}\n` : '') +
        (isJour ? `\n⚠️ OBS: Jourkostnad tillkommer för denna bokning!\n` : '') +
        (sanitizedMessage ? `\nMeddelande:\n${sanitizedMessage}\n` : '')
      );
      
      // Använd samma metod som mailto-länkar för att fungera med webmail (Outlook Online, etc.)
      const mailtoLink = `mailto:info@xbit.se?subject=${subject}&body=${emailBody}`;
      
      // Skapa en temporär länk och klicka på den (fungerar bättre med webmail)
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Registrera formulär-submission för rate limiting
      recordSubmit();
      checkRateLimit();
      
      toast({
        title: "E-postklient öppnas",
        description: "Kontrollera att e-postmeddelandet skickas korrekt till info@xbit.se.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: null,
        time: "",
        message: "",
      });
      
      // Stäng dialog efter en kort fördröjning
      setTimeout(() => {
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Verifiering misslyckades",
        description: "Vänligen försök igen.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[95vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-display">
            Boka IT-support
          </DialogTitle>
          <DialogDescription className="text-sm">
            Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Namn *
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Ditt namn"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={MAX_NAME_LENGTH}
                title="Vänligen fyll i detta fält"
                onInvalid={(e) => {
                  e.currentTarget.setCustomValidity("Vänligen fyll i detta fält");
                }}
                onInput={(e) => {
                  e.currentTarget.setCustomValidity("");
                }}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefon *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="010 - 12 34 56"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={MAX_PHONE_LENGTH}
                pattern="[\d\s\-\+\(\)]+"
                title="Telefonnummer får endast innehålla siffror, mellanslag, bindestreck, plus och parenteser"
                onInvalid={(e) => {
                  if (e.currentTarget.validity.patternMismatch) {
                    e.currentTarget.setCustomValidity("Telefonnummer får endast innehålla siffror, mellanslag, bindestreck, plus och parenteser");
                  } else {
                    e.currentTarget.setCustomValidity("Vänligen fyll i detta fält");
                  }
                }}
                onInput={(e) => {
                  e.currentTarget.setCustomValidity("");
                }}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              E-post *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="din@epost.se"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={MAX_EMAIL_LENGTH}
              title="Vänligen fyll i en giltig e-postadress"
              onInvalid={(e) => {
                if (e.currentTarget.validity.valueMissing) {
                  e.currentTarget.setCustomValidity("Vänligen fyll i detta fält");
                } else if (e.currentTarget.validity.typeMismatch) {
                  e.currentTarget.setCustomValidity("Vänligen ange en giltig e-postadress");
                }
              }}
              onInput={(e) => {
                e.currentTarget.setCustomValidity("");
              }}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="service">Tjänst *</Label>
            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData({ ...formData, service: value })
              }
              required
            >
              <SelectTrigger id="service">
                <SelectValue placeholder="Välj tjänst" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dator">Datorhjälp</SelectItem>
                <SelectItem value="telefon">Telefon & Surfplatta</SelectItem>
                <SelectItem value="internet">Internet & Nätverk</SelectItem>
                <SelectItem value="tv">TV & Streaming</SelectItem>
                <SelectItem value="hembesok">Hembesök med RUT-avdrag</SelectItem>
                <SelectItem value="foretag">Företagssupport</SelectItem>
                <SelectItem value="ekonomi">Ekonomitjänster</SelectItem>
                <SelectItem value="annat">Annat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="date" className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-foreground" />
                Önskat datum
              </Label>
              <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? (
                      format(formData.date, "PPP", { locale: sv })
                    ) : (
                      <span>Välj datum</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date || undefined}
                    onSelect={(date) => {
                      setFormData({ ...formData, date: date || null });
                      if (date) {
                        setIsDatePickerOpen(false);
                      }
                    }}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    locale={sv}
                    initialFocus
                    classNames={{
                      cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                      day_selected: "bg-primary/20 text-foreground border border-primary/50 hover:bg-primary/30 focus:bg-primary/20 rounded-md",
                      day_today: "bg-cyan-500/20 text-foreground border border-cyan-500/50 rounded-md",
                      day_range_middle: "aria-selected:bg-primary/20 aria-selected:text-foreground",
                    }}
                  />
                  <div className="p-3 pt-4 border-t border-border/50">
                    <div className="flex flex-col gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-cyan-500/20 border border-cyan-500/50"></div>
                        <span className="text-muted-foreground">Dagens datum</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-primary/20 border border-primary/50"></div>
                        <span className="text-muted-foreground">Önskat datum</span>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Önskad tid
              </Label>
              <Select
                value={formData.time}
                onValueChange={(value) =>
                  setFormData({ ...formData, time: value })
                }
              >
                <SelectTrigger id="time">
                  <SelectValue placeholder="Välj tid" />
                </SelectTrigger>
                <SelectContent>
                  {(() => {
                    const dayOfWeek = formData.date ? formData.date.getDay() : null;
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                    const showJour = (time: string) => {
                      if (isWeekend) {
                        return true; // Alla tider är jour på helger
                      } else {
                        return time === "18-20" || time === "20-22"; // Bara kvällstider på vardagar
                      }
                    };
                    
                    return (
                      <>
                        <SelectItem value="08-10">
                          {showJour("08-10") ? (
                            <div className="flex items-center justify-between w-full">
                              <span>08:00 - 10:00</span>
                              <span className="text-xs text-primary ml-2">Jour!</span>
                            </div>
                          ) : (
                            "08:00 - 10:00"
                          )}
                        </SelectItem>
                        <SelectItem value="10-12">
                          {showJour("10-12") ? (
                            <div className="flex items-center justify-between w-full">
                              <span>10:00 - 12:00</span>
                              <span className="text-xs text-primary ml-2">Jour!</span>
                            </div>
                          ) : (
                            "10:00 - 12:00"
                          )}
                        </SelectItem>
                        <SelectItem value="12-14">
                          {showJour("12-14") ? (
                            <div className="flex items-center justify-between w-full">
                              <span>12:00 - 14:00</span>
                              <span className="text-xs text-primary ml-2">Jour!</span>
                            </div>
                          ) : (
                            "12:00 - 14:00"
                          )}
                        </SelectItem>
                        <SelectItem value="14-16">
                          {showJour("14-16") ? (
                            <div className="flex items-center justify-between w-full">
                              <span>14:00 - 16:00</span>
                              <span className="text-xs text-primary ml-2">Jour!</span>
                            </div>
                          ) : (
                            "14:00 - 16:00"
                          )}
                        </SelectItem>
                        <SelectItem value="16-18">
                          {showJour("16-18") ? (
                            <div className="flex items-center justify-between w-full">
                              <span>16:00 - 18:00</span>
                              <span className="text-xs text-primary ml-2">Jour!</span>
                            </div>
                          ) : (
                            "16:00 - 18:00"
                          )}
                        </SelectItem>
                        <SelectItem value="18-20">
                          <div className="flex items-center justify-between w-full">
                            <span>18:00 - 20:00</span>
                            <span className="text-xs text-primary ml-2">Jour!</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="20-22">
                          <div className="flex items-center justify-between w-full">
                            <span>20:00 - 22:00</span>
                            <span className="text-xs text-primary ml-2">Jour!</span>
                          </div>
                        </SelectItem>
                      </>
                    );
                  })()}
                </SelectContent>
              </Select>
            </div>
          </div>

          {isJourTime && formData.date && formData.time && (
            <div className="p-4 rounded-lg bg-gradient-primary border border-primary/50">
              <p className="text-sm text-primary-foreground text-center">
                <span className="font-bold">Jourkostnad</span> tillkommer för bokning: <span className="font-bold">{format(formData.date, "PPP", { locale: sv })} kl. {timeLabels[formData.time] || formData.time}</span>
              </p>
            </div>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="message">Meddelande</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Beskriv ditt problem eller vad du behöver hjälp med..."
              value={formData.message}
              onChange={handleChange}
              rows={3}
              maxLength={MAX_MESSAGE_LENGTH}
            />
          </div>

          <div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
            <strong className="text-foreground">RUT-avdrag:</strong> Om du bokar
            hemservice för privatpersoner kan du få 50% av arbetskostnaden
            avdragen direkt på fakturan. Vi sköter allt pappersarbete åt dig.
          </div>

          {rateLimitExceeded && rateLimitResetTime && (
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/50 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-destructive mb-1">
                  För många försök
                </p>
                <p className="text-xs text-muted-foreground">
                  Du har skickat för många bokningar. Vänligen vänta tills{" "}
                  {format(rateLimitResetTime, "HH:mm", { locale: sv })} innan du försöker igen.
                </p>
              </div>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            Genom att skicka detta formulär godkänner du vår{" "}
            <a
              href="/integritetspolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Integritetspolicy
            </a>{" "}
            och{" "}
            <a
              href="/anvandarvillkor"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Användarvillkor
            </a>
            .
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Avbryt
            </Button>
            <Button type="submit" variant="hero" disabled={isSubmitting || rateLimitExceeded}>
              {isSubmitting ? "Skickar..." : "Skicka bokning"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
