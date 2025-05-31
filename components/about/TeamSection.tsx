import Image from 'next/image';
import { TRAINERS } from '@/lib/constants';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            MEET OUR <span className="text-primary">TEAM</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            The dedicated professionals behind MAXFIT's success and your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {TRAINERS.map((trainer, index) => (
            <div 
              key={trainer.name}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all animate-fadeInUp group hover:-translate-y-1 duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[450px] w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority={index < 2}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium mb-3">{trainer.title}</p>
                <div className="mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{trainer.bio}</p>
                </div>
                <div className="flex justify-center space-x-4 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors" aria-label={`${trainer.name}'s Facebook`}>
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors" aria-label={`${trainer.name}'s Instagram`}>
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors" aria-label={`${trainer.name}'s Twitter`}>
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors" aria-label={`${trainer.name}'s LinkedIn`}>
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}