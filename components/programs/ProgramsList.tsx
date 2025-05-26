import Image from 'next/image';
import { Dumbbell, HeartPulse, Cog as Yoga, User, Apple, Heart } from 'lucide-react';
import { PROGRAMS } from '@/lib/constants';

export default function ProgramsList() {
  const iconMap: Record<string, React.ReactNode> = {
    'dumbbell': <Dumbbell className="h-6 w-6" />,
    'heart-pulse': <HeartPulse className="h-6 w-6" />,
    'yoga': <Yoga className="h-6 w-6" />,
    'user': <User className="h-6 w-6" />,
    'apple': <Apple className="h-6 w-6" />,
    'heart': <Heart className="h-6 w-6" />,
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            FITNESS PROGRAMS FOR <span className="text-primary">EVERYONE</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From beginners to advanced fitness enthusiasts, we have programs tailored to every level and goal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <div 
              key={program.title}
              className="bg-background rounded-lg overflow-hidden shadow-md animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground mr-3">
                    {iconMap[program.icon]}
                  </div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                </div>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}