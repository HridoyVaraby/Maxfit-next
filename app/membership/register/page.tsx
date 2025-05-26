import MembershipRegistrationHero from '@/components/membership/MembershipRegistrationHero';
import MembershipRegistrationForm from '@/components/membership/MembershipRegistrationForm';

export const metadata = {
  title: 'Membership Registration | MAXFIT Gym - Sonarpur, Kolkata',
  description: 'Register for a membership at MAXFIT Gym in Sonarpur, Kolkata. Choose your plan and start your fitness journey today.',
};

export default function MembershipRegistrationPage() {
  return (
    <>
      <MembershipRegistrationHero />
      <MembershipRegistrationForm />
    </>
  );
}