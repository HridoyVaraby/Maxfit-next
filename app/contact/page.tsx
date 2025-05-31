import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';
import TeamSection from '@/components/about/TeamSection';

export const metadata = {
  title: 'Contact Us | MAXFIT Gym - Sonarpur, Kolkata',
  description: 'Get in touch with MAXFIT Unisex & Family Gym in Sonarpur, Kolkata. Visit us, call us, or send us a message for inquiries about memberships, programs, or any questions.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <LocationMap />
      <TeamSection />
      <ContactForm />
    </>
  );
}