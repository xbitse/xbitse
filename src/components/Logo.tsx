interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <img 
      src="./xbit.png" 
      alt="XBIT Teknik & IT-Support"
      className={`h-10 md:h-14 ${className}`}
      style={{
        objectFit: 'contain',
      }}
    />
  );
};

export default Logo;
