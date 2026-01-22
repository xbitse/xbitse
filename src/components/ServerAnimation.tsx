import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedServerUnit = ({ index, status }: { index: number; status: string }) => {
  const [currentLoad, setCurrentLoad] = useState(Math.floor(Math.random() * 60) + 20);
  const count = useMotionValue(currentLoad);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(currentLoad);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLoad = Math.floor(Math.random() * 70) + 20; // Random between 20-90
      setCurrentLoad(newLoad);
      animate(count, newLoad, {
        duration: 1.5,
        ease: "easeInOut",
      });
    }, 2000 + index * 300); // Stagger the updates

    return () => clearInterval(interval);
  }, [count, index]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="relative h-10 rounded-lg bg-gradient-to-r from-card/60 to-card/80 border border-border/30 flex items-center px-3 gap-3 overflow-hidden"
    >
      {/* Server front panel - blinking LEDs */}
      <div className="flex gap-1.5">
        <motion.div 
          className={`w-1.5 h-1.5 rounded-full ${status === "active" ? "bg-green-400" : "bg-green-400/40"}`}
          animate={status === "active" ? { opacity: [0.6, 1, 0.6] } : {}}
          transition={{ duration: 0.8 + index * 0.1, repeat: Infinity }}
        />
        <motion.div 
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "hsl(28 95% 55%)" }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.2 }}
        />
        <motion.div 
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "hsl(38 100% 50%)" }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: index * 0.15 }}
        />
      </div>

      {/* Ventilation slots */}
      <div className="flex gap-0.5">
        {[...Array(6)].map((_, j) => (
          <div key={j} className="w-0.5 h-4 bg-muted/60 rounded-full" />
        ))}
      </div>

      {/* Load bar - animated */}
      <div className="flex-1 h-2 bg-muted/50 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ 
            background: "linear-gradient(90deg, hsl(28 95% 55% / 0.6), hsl(38 100% 50%))"
          }}
          animate={{ width: `${currentLoad}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Load percentage - animated */}
      <span className="text-[9px] font-mono text-muted-foreground/70 w-8 text-right block">
        {displayValue}%
      </span>

      {/* Activity shimmer */}
      {status === "active" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, ease: "linear" }}
        />
      )}
    </motion.div>
  );
};

export const ServerAnimation = () => {
  const serverUnits = [
    { status: "active" },
    { status: "active" },
    { status: "active" },
    { status: "idle" },
    { status: "active" },
    { status: "idle" },
  ];

  const ServerRack = ({ scale = 1, zIndex = 10, offsetX = 0, opacity = 1 }: { scale?: number; zIndex?: number; offsetX?: number; opacity?: number }) => (
    <div 
      className="absolute inset-6 flex items-center justify-center"
      style={{ 
        transform: `scale(${scale}) translateX(${offsetX}px)`,
        zIndex,
        opacity
      }}
    >
      <div className="relative w-full max-w-[300px] h-full">
        {/* Rack frame */}
        <div className="absolute inset-0 rounded-xl border border-border/40 bg-gradient-to-b from-card/80 to-background/90 backdrop-blur-sm shadow-2xl">
          {/* Rack header */}
          <div className="h-8 border-b border-border/30 flex items-center px-4 gap-2">
            <motion.div 
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "hsl(28 95% 55%)" }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </div>

          {/* Server units */}
          <div className="p-3 space-y-2">
            {serverUnits.map((server, i) => (
              <AnimatedServerUnit key={i} index={i} status={server.status} />
            ))}
          </div>

          {/* Rack footer with network activity */}
          <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-border/30 flex items-center px-4 gap-4">
            {/* Network ports */}
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-2 rounded-sm bg-muted border border-border/30"
                  animate={{ 
                    boxShadow: [
                      "inset 0 0 0 0 hsl(142 70% 50% / 0)",
                      "inset 0 0 4px 1px hsl(142 70% 50% / 0.8)",
                      "inset 0 0 0 0 hsl(142 70% 50% / 0)",
                    ]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.15, repeatDelay: 0.5 }}
                />
              ))}
            </div>
            
            {/* Network stats */}
            <div className="flex-1 flex items-center gap-2">
              <motion.div
                className="h-1 flex-1 bg-muted/50 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: "hsl(28 95% 55% / 0.6)" }}
                  animate={{ width: ["20%", "80%", "40%", "90%", "20%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <div className="text-[8px] font-mono text-muted-foreground/50">TX/RX</div>
            </div>
          </div>
        </div>

        {/* Vertical data flow lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px"
            style={{ 
              background: "linear-gradient(to bottom, transparent, hsl(28 95% 55% / 0.4), transparent)",
              left: `${25 + i * 25}%`, 
              top: 0, 
              height: "100%" 
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.6,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
      {/* Ambient glow effects */}
      <motion.div 
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[80px]"
        style={{ backgroundColor: "hsl(28 95% 55% / 0.15)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background racks (smaller, behind) */}
      <ServerRack scale={0.7} zIndex={-1} offsetX={-200} opacity={0.55} />
      <ServerRack scale={0.7} zIndex={-1} offsetX={200} opacity={0.55} />
      <ServerRack scale={0.8} zIndex={0} offsetX={-140} opacity={0.7} />
      <ServerRack scale={0.8} zIndex={0} offsetX={140} opacity={0.7} />
      <ServerRack scale={0.9} zIndex={1} offsetX={-70} opacity={0.85} />
      <ServerRack scale={0.9} zIndex={1} offsetX={70} opacity={0.85} />
      
      {/* Main server rack (front) */}
      <ServerRack scale={1} zIndex={10} offsetX={0} opacity={1} />

      {/* Connection lines effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 15}%`}
            y1="85%"
            x2={`${30 + i * 10}%`}
            y2="15%"
            stroke="hsl(28 95% 55% / 0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
      </svg>
    </div>
  );
};
