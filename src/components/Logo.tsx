interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span 
        className="text-3xl md:text-4xl italic"
        style={{
          fontFamily: '"Arial Black", Arial, "Helvetica Neue", Helvetica, sans-serif',
          fontWeight: 900,
          fontStyle: 'italic',
          transform: 'skewX(-12deg)',
          display: 'inline-block',
          color: '#0A539B',
          letterSpacing: '0.02em',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        xb
      </span>
      <span 
        className="text-3xl md:text-4xl italic"
        style={{
          fontFamily: '"Arial Black", Arial, "Helvetica Neue", Helvetica, sans-serif',
          fontWeight: 900,
          fontStyle: 'italic',
          transform: 'skewX(-12deg)',
          display: 'inline-block',
          background: 'linear-gradient(to right, #F7A800, #ED8E00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.02em',
          marginLeft: '0.05em',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        it
      </span>
    </div>
  );
};

export default Logo;
