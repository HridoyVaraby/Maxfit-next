import AboutHero from '@/components/about/AboutHero';
import GymStory from '@/components/about/GymStory';
import TeamSection from '@/components/about/TeamSection';
import CallToAction from '@/components/home/CallToAction';

export const metadata = {
  title: 'About Us | MAXFIT Gym - Sonarpur, Kolkata',
  description: 'Learn about MAXFIT Gym in Sonarpur, Kolkata - our story, mission, values, and meet our expert trainers.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <GymStory />
      <TeamSection />
      <CallToAction />
    </>
  );
}