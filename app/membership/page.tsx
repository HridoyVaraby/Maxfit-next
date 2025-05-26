import MembershipHero from '@/components/membership/MembershipHero';
import MembershipPlans from '@/components/membership/MembershipPlans';
import FAQSection from '@/components/membership/FAQSection';
import JoinForm from '@/components/membership/JoinForm';

export const metadata = {
  title: 'Membership Plans | MAXFIT Gym - Sonarpur, Kolkata',
  description: 'Choose the perfect membership plan at MAXFIT Gym in Sonarpur, Kolkata. Flexible options for individuals and families with no long-term commitments.',
};

export default function MembershipPage() {
  return (
    <>
      <MembershipHero />
      <MembershipPlans />
      <JoinForm />
      <FAQSection />
    </>
  );
}