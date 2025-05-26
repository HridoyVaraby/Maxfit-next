import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';

export const metadata = {
  title: 'Contact Us | MAXFIT Gym - Sonarpur, Kolkata',
  description: 'Get in touch with MAXFIT Gym in Sonarpur, Kolkata. Visit us, call us, or send us a message for inquiries about memberships, programs, or any questions.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <LocationMap />
      <ContactForm />
    </>
  );
}