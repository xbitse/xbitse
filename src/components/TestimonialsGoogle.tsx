import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

// Google Maps Reviews API
const PLACE_ID = "ChIJc7v8y8t4Gk9Lxg2oY"; // XBIT - Teknik & IT-Support
const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // User should replace this

interface GoogleReview {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

const Testimonials = () => {
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch Google Maps reviews
    const fetchGoogleReviews = async () => {
      try {
        // Note: In production, you'll need to set up a backend proxy
        // or use environment variables for the API key
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        
        if (data.result && data.result.reviews) {
          setGoogleReviews(data.result.reviews);
        } else {
          setGoogleReviews([]);
        }
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError('Kunde inte ladda omdömen');
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  // Combine Google reviews with existing testimonials
  const allTestimonials = [
    ...googleReviews.map(review => ({
      name: review.author_name,
      company: "Google Maps Review",
      text: review.text,
      rating: review.rating,
      service: "Google Review"
    })),
    // Keep existing testimonials as fallback
    {
      name: "Anna Johansson",
      company: "Johansson Konsult AB",
      text: "XBit löste vårt nätverksproblem på rekordtid. Teknikern var professionell, snabb och förklarade allt på ett sätt vi förstod.",
      rating: 5,
      service: "Nätverksproblem"
    },
    {
      name: "Erik Lindberg", 
      company: "Lindberg Bygg",
      text: "Behövde hjälp med vår nya serverinstallation. XBit kom i tid, gjorde allt professionellt.",
      rating: 5,
      service: "Serverinstallation"
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Kundomdömen
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Från <span className="text-gradient">Google</span> och våra kunder
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Läs omdömen från Google Maps och våra nöjda kunder.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span>Laddar omdömen...</span>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-12">
            <div className="text-destructive">{error}</div>
          </div>
        )}

        {/* Auto-scrolling container - wider cards, no scrollbar */}
        <div className="overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide">
          <div className="flex gap-8 min-w-max md:min-w-0 animate-scroll-slow">
            {allTestimonials.map((testimonial, index) => (
              <article
                key={index}
                className="flex-shrink-0 w-96 bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Header with rating */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative border-l-4 border-primary/20 pl-6 text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.company}
                    </div>
                    <div className="text-sm text-primary font-medium mt-1">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
