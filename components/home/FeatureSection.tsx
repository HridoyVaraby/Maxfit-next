import { Dumbbell, Users, Heart, User } from 'lucide-react';
import { FEATURES } from '@/lib/constants';

export default function FeatureSection() {
  const iconMap: Record<string, React.ReactNode> = {
    'dumbbell': <Dumbbell className="h-10 w-10 text-primary" />,
    'users': <Users className="h-10 w-10 text-primary" />,
    'heart': <Heart className="h-10 w-10 text-primary" />,
    'user': <User className="h-10 w-10 text-primary" />,
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            FITNESS IS NOT JUST A ROUTINE, IT&apos;S A <span className="text-primary">LIFESTYLE</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We offer state-of-the-art facilities and expert guidance to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-background rounded-lg p-8 shadow-sm card-hover animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}