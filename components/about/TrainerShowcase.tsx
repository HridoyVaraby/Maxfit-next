import Image from 'next/image';
import { TRAINERS } from '@/lib/constants';

export default function TrainerShowcase() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            MEET THE DEDICATED <span className="text-primary">FITNESS EXPERTS</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Our certified trainers are passionate about helping you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <div 
              key={trainer.name}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 w-full">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium mb-4">{trainer.title}</p>
                <p className="text-muted-foreground">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}