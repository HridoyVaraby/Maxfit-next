import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function MembershipPlans() {
  const membershipFeatures = [
    {
      name: 'Equipment Access',
      starter: 'Basic Equipment',
      proPlus: 'Full Equipment Access',
      elite: 'Premium Equipment Access',
    },
    {
      name: 'Operating Hours',
      starter: 'Monday to Sunday',
      proPlus: '6 AM - 12:30 PM',
      elite: '4:30 AM - 10:30 PM',
    },
    {
      name: 'Group Classes',
      starter: '2 classes/week',
      proPlus: 'Unlimited',
      elite: 'Unlimited + Priority Booking',
    },
    {
      name: 'Locker Storage',
      starter: 'Daily Use',
      proPlus: 'Dedicated Locker',
      elite: 'Premium Locker',
    },
    {
      name: 'Personal Training',
      starter: 'Not Included',
      proPlus: '1 session/month',
      elite: '2 sessions/month',
    },
    {
      name: 'Nutrition Guidance',
      starter: 'Basic Guidance',
      proPlus: 'Personalized Plan',
      elite: 'Comprehensive Plan + Follow-ups',
    },
    {
      name: 'Fitness Assessment',
      starter: 'Initial Assessment',
      proPlus: 'Quarterly Assessment',
      elite: 'Monthly Assessment',
    },
    {
      name: 'Guest Passes',
      starter: 'None',
      proPlus: '2 per quarter',
      elite: '2 per month',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            CHOOSE YOUR <span className="text-primary">PLAN</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Flexible membership options designed to fit your schedule and goals. Opens from Monday to Sunday at 6am to 12.30pm and 4.30pm to 10pm
          </p>
        </div>

        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="membership-card animate-fadeInUp">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Monthly</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹499</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">No long-term commitment</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Full Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Unlimited Group Classes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Nutrition Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Fitness Assessment</span>
                  </li>
                </ul>
                {/*<Button variant="outline" className="w-full">Join Now</Button>*/}
              </div>

              <div className="membership-card popular animate-fadeInUp animate-delay-100">
                <div className="popular-badge">Popular</div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">12 Month</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹4,999</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Billed yearly with 1 year minimum</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Full Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Unlimited Group Classes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Nutrition Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Fitness Assessment</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                    <Link href="/membership/register">Join Now</Link>
                  </Button>
              </div>

              <div className="membership-card animate-fadeInUp animate-delay-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">6 Month</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹2,499</span>
                    <span className="text-muted-foreground">/6-month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Billed every 6 month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Full Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Unlimited Group Classes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Nutrition Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Fitness Assessment</span>
                  </li>
                </ul>
                {/*<Button variant="outline" className="w-full">Join Now</Button>*/}
              </div>
            </div>

            {/*<div className="bg-muted/30 rounded-lg p-6 md:p-8 animate-fadeInUp animate-delay-300">
              <h3 className="text-xl font-bold mb-6 text-center">Detailed Feature Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold">Feature</th>
                      <th className="text-center p-3 font-bold">Monthly</th>
                      <th className="text-center p-3 font-bold text-primary">Yearly</th>
                      <th className="text-center p-3 font-bold">Half-Yearly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {membershipFeatures.map((feature, index) => (
                      <tr key={feature.name} className={cn("border-b", index % 2 === 0 && "bg-muted/50")}>
                        <td className="p-3 font-medium">{feature.name}</td>
                        <td className="p-3 text-center text-sm">{feature.starter}</td>
                        <td className="p-3 text-center text-sm font-medium">{feature.proPlus}</td>
                        <td className="p-3 text-center text-sm">{feature.elite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>*/}
          </div>
      </div>
    </section>
  );
}