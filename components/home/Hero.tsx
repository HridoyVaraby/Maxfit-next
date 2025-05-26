import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gym background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(249,201,27,0.3), rgba(0,0,0,0.7))' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            YOUR DESTINATION FOR <span className="text-primary">HEALTH AND WELLNESS</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Take control of your health and fitness at Sonarpur&apos;s premier unisex and family gym. Join us on the path to a healthier, stronger you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6">
              <Link href="/membership">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 border-white text-white hover:text-secondary hover:bg-white">
              <Link href="/programs">
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-pulse">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}