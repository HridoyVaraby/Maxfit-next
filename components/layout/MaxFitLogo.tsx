import Image from 'next/image';

interface MaxFitLogoProps {
  className?: string;
}

export default function MaxFitLogo({ className = "h-10 w-auto" }: MaxFitLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/logo2.jpg" 
        alt="MAXFIT Logo" 
        width={50} 
        height={50} 
        className="rounded-sm"
      />
    </div>
  );
}