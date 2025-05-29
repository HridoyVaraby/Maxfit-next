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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TRAINERS.map((trainer, index) => (
            <div 
              key={trainer.name}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fadeInUp group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium mb-4">{trainer.title}</p>
                <p className="text-muted-foreground mb-4">{trainer.bio}</p>
                <div className="flex space-x-4 text-muted-foreground">
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