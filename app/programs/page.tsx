import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsList from '@/components/programs/ProgramsList';
import ProgramSchedule from '@/components/programs/ProgramSchedule';
import CallToAction from '@/components/home/CallToAction';

export const metadata = {
  title: 'Programs & Services | MAXFIT Gym - Sonarpur, Kolkata',
  description: 'Explore our range of fitness programs and services at MAXFIT Gym in Sonarpur, Kolkata - from weight training and cardio to yoga, personal training, and family fitness.',
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsList />
      <ProgramSchedule />
      <CallToAction />
    </>
  );
}