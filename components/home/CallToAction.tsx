import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="2" fill="#000"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary-foreground">
            EMBARK ON YOUR FITNESS JOURNEY WITH MAXFIT TODAY!
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Don't wait to make a change! Join us now and transform your health and appearance!
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary" 
            className="text-primary font-bold"
          >
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}