import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      starter: '6 AM - 9 PM',
      proPlus: '5 AM - 10 PM',
      elite: '24/7 Access',
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
            Flexible membership options designed to fit your schedule and goals
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto mb-12">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          
          <TabsContent value="monthly" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="membership-card animate-fadeInUp">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹1,999</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">No long-term commitment</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Basic Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>2 Group Classes/Week</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Basic Wellness Support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Join Now</Button>
              </div>

              <div className="membership-card popular animate-fadeInUp animate-delay-100">
                <div className="popular-badge">Popular</div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Pro Plus</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹1,799</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Billed monthly with 3-month minimum</p>
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
                  <h3 className="text-xl font-bold">Elite</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹2,499</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Billed monthly with 3-month minimum</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Premium Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Personal Trainer (2 sessions/month)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Nutritional Plan</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Progress Tracking</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Join Now</Button>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 md:p-8 animate-fadeInUp animate-delay-300">
              <h3 className="text-xl font-bold mb-6 text-center">Detailed Feature Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-bold">Feature</th>
                      <th className="text-center p-3 font-bold">Starter</th>
                      <th className="text-center p-3 font-bold text-primary">Pro Plus</th>
                      <th className="text-center p-3 font-bold">Elite</th>
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
            </div>
          </TabsContent>
          
          <TabsContent value="quarterly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="membership-card">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹4,999</span>
                    <span className="text-muted-foreground">/quarter</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Save ₹1,000 over monthly</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Basic Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>2 Group Classes/Week</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Basic Wellness Support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Join Now</Button>
              </div>

              <div className="membership-card popular">
                <div className="popular-badge">Popular</div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Pro Plus</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹4,999</span>
                    <span className="text-muted-foreground">/quarter</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Save ₹1,400 over monthly</p>
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

              <div className="membership-card">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Elite</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹6,999</span>
                    <span className="text-muted-foreground">/quarter</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Save ₹1,500 over monthly</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Premium Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Personal Trainer (2 sessions/month)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Nutritional Plan</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Progress Tracking</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Join Now</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="yearly">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="membership-card">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹19,999</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Save ₹3,990 over monthly</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Basic Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>2 Group Classes/Week</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Basic Wellness Support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Join Now</Button>
              </div>

              <div className="membership-card popular">
                <div className="popular-badge">Popular</div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Pro Plus</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹17,999</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Save ₹6,590 over monthly</p>
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

              <div className="membership-card">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Elite</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">₹25,999</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Save ₹9,990 over monthly</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Premium Equipment Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Personal Trainer (2 sessions/month)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Nutritional Plan</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Progress Tracking</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Join Now</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}