import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BarChartAnimation = () => {
  const [barHeights, setBarHeights] = useState([50, 40, 65, 55]);

  useEffect(() => {
    // Animate bars up initially
    const initialTimer = setTimeout(() => {
      setBarHeights([50, 40, 65, 55]);
    }, 100);

    // Continuously animate bars up and down (only the top moves)
    const interval = setInterval(() => {
      setBarHeights((prev) =>
        prev.map((height) => {
          const change = (Math.random() - 0.5) * 15; // Random change between -7.5 and +7.5
          const newHeight = height + change;
          // Keep between 30% and 85%
          return Math.max(30, Math.min(85, newHeight));
        })
      );
    }, 2000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const labels = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <div className="w-full h-full p-6 flex flex-col items-center justify-center">
      <div className="w-full h-48 flex items-end justify-between gap-3 mb-4">
        {barHeights.map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center h-full justify-end">
            {/* Animated bar - base is fixed at bottom, only top moves */}
            <motion.div
              className="w-full rounded-t-lg relative overflow-hidden"
              style={{
                background: `linear-gradient(to top, hsl(28 95% 55%), hsl(38 100% 50%))`,
              }}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
            <span className="text-xs text-muted-foreground mt-2">{labels[index]}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center">Kvartalsvis resultat</p>
    </div>
  );
};
