import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Dumbbell, HeartPulse, User, Apple, Heart, Cog as Yoga } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROGRAMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function ProgramsShowcase() {
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
            DISCOVER A DIVERSE ARRAY OF <span className="text-primary">EXPERIENCES</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From intense workout sessions to mindful yoga practices, we have something for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.slice(0, 3).map((program, index) => (
            <div 
              key={program.title}
              className="group relative overflow-hidden rounded-lg shadow-md animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground mr-3">
                    {iconMap[program.icon]}
                  </div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                </div>
                <p className="mb-4 text-gray-200">{program.description}</p>
                <Link href="/programs" className="text-primary font-semibold flex items-center group-hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/programs">
              View All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}