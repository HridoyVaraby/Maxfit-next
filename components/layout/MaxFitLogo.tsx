import Image from 'next/image';

interface MaxFitLogoProps {
  className?: string;
}

export default function MaxFitLogo({ className = "h-10 w-auto" }: MaxFitLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/maxfit_logo.svg" 
        alt="MAXFIT Logo" 
        width={60} 
        height={60} 
        className="rounded-sm"
      />
    </div>
  );
}