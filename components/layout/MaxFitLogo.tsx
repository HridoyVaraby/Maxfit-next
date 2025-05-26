import { Dumbbell } from 'lucide-react';

interface MaxFitLogoProps {
  className?: string;
}

export default function MaxFitLogo({ className = "h-10 w-auto" }: MaxFitLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-extrabold tracking-tight">
        <span className="text-primary">MAX</span>
        <span className="text-foreground">FIT</span>
      </span>
      <Dumbbell className="ml-1 text-primary" size={20} />
    </div>
  );
}