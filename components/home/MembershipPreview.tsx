import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MEMBERSHIP_PLANS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function MembershipPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            EXPLORE OUR FLEXIBLE <span className="text-primary">MEMBERSHIP PLANS</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Choose the membership that fits your lifestyle and fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <div 
              key={plan.name}
              className={cn(
                "membership-card animate-fadeInUp",
                plan.popular && "popular"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && <div className="popular-badge">Popular</div>}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.duration.toLowerCase()}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
                asChild
              >
                <Link href="/membership">Join Now</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom plan or have questions?</p>
          <Button variant="outline" asChild>
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}