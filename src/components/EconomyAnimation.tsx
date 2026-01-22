import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { DollarSign, Wallet, BarChart3 } from "lucide-react";

export const EconomyAnimation = () => {
  const [animatedValues, setAnimatedValues] = useState({
    kassa: 35,
    vinst: 30,
    soliditet: 35,
  });

  useEffect(() => {
    // Small delay for initial animation
    const timer = setTimeout(() => {
      setAnimatedValues({
        kassa: 35,
        vinst: 30,
        soliditet: 35,
      });
    }, 100);

    // Continuously animate pie chart to show movement
    const interval = setInterval(() => {
      setAnimatedValues((prev) => {
        const total = 100;
        const kassa = Math.max(25, Math.min(45, prev.kassa + (Math.random() - 0.5) * 5));
        const vinst = Math.max(25, Math.min(40, prev.vinst + (Math.random() - 0.5) * 5));
        const soliditet = total - kassa - vinst;
        return {
          kassa,
          vinst,
          soliditet: Math.max(25, Math.min(45, soliditet)),
        };
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Calculate pie chart segments with useMemo for performance
  const segments = useMemo(() => {
    const pieData = [
      { label: "Kassa", value: animatedValues.kassa, color: "hsl(28 95% 55%)", icon: Wallet },
      { label: "Vinst", value: animatedValues.vinst, color: "hsl(38 100% 50%)", icon: DollarSign },
      { label: "Soliditet", value: animatedValues.soliditet, color: "hsl(200 90% 55%)", icon: BarChart3 },
    ];

    // Calculate angles for pie chart
    const radius = 80;
    const centerX = 100;
    const centerY = 100;
    let currentAngle = -90; // Start from top

    return pieData.map((segment) => {
      const angle = (segment.value / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      
      // Convert to radians
      const startAngleRad = (startAngle * Math.PI) / 180;
      const endAngleRad = (endAngle * Math.PI) / 180;
      
      // Calculate start and end points
      const x1 = centerX + radius * Math.cos(startAngleRad);
      const y1 = centerY + radius * Math.sin(startAngleRad);
      const x2 = centerX + radius * Math.cos(endAngleRad);
      const y2 = centerY + radius * Math.sin(endAngleRad);
      
      // Large arc flag (1 if angle > 180, 0 otherwise)
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      // Path for the arc
      const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
      
      // Calculate label position (middle of arc)
      const labelAngle = (startAngle + angle / 2) * (Math.PI / 180);
      const labelRadius = radius * 0.65;
      const labelX = centerX + labelRadius * Math.cos(labelAngle);
      const labelY = centerY + labelRadius * Math.sin(labelAngle);
      
      const result = {
        ...segment,
        path,
        labelX,
        labelY,
        startAngle,
        endAngle,
      };
      
      currentAngle = endAngle;
      return result;
    });
  }, [animatedValues.kassa, animatedValues.vinst, animatedValues.soliditet]);

  return (
    <div className="relative w-full h-full min-h-[400px] p-6 flex flex-col items-center justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {[...Array(5)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${(i * 100) / 4}%`}
              x2="100%"
              y2={`${(i * 100) / 4}%`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${(i * 100) / 4}%`}
              y1="0"
              x2={`${(i * 100) / 4}%`}
              y2="100%"
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Main chart container */}
      <div className="relative z-10 w-full">
        {/* Pie Chart */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-xs h-64 relative">
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              {/* Glow filter definition */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {segments.map((segment, index) => {
                return (
                  <g key={`${segment.label}-${segment.value}`}>
                    {/* Pie slice */}
                    <motion.path
                      d={segment.path}
                      fill={segment.color}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        d: segment.path,
                        opacity: 1 
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                    
                    {/* Glow effect */}
                    <motion.path
                      d={segment.path}
                      fill={segment.color}
                      opacity="0.3"
                      filter="url(#glow)"
                      animate={{ 
                        d: segment.path,
                        opacity: [0.2, 0.4, 0.2] 
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    
                    {/* Label text */}
                    <motion.text
                      x={segment.labelX}
                      y={segment.labelY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-sm font-semibold fill-foreground"
                      animate={{ 
                        x: segment.labelX,
                        y: segment.labelY,
                        opacity: 1 
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      {segment.label}
                    </motion.text>
                    
                    {/* Percentage */}
                    <motion.text
                      x={segment.labelX}
                      y={segment.labelY + 12}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs fill-muted-foreground"
                      animate={{ 
                        x: segment.labelX,
                        y: segment.labelY + 12,
                        opacity: 1 
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      {Math.round(segment.value)}%
                    </motion.text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Floating numbers animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-primary/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {["+15%", "?", "?", "?", "?", "?"][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
