"use client"

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            WHAT OUR <span className="text-primary">MEMBERS</span> HAVE TO SAY
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Real stories from real people who transformed their lives with MAXFIT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-muted/30 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-primary flex-shrink-0">
                <Image
                  src={TESTIMONIALS[activeIndex].image}
                  alt={TESTIMONIALS[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <div className="flex mb-4">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl italic mb-4">
                  "{TESTIMONIALS[activeIndex].quote}"
                </blockquote>
                <p className="font-bold text-right">- {TESTIMONIALS[activeIndex].name}</p>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}