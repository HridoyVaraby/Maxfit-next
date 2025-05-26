import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';
import MembershipPreview from '@/components/home/MembershipPreview';
import ProgramsShowcase from '@/components/home/ProgramsShowcase';
import CallToAction from '@/components/home/CallToAction';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ProgramsShowcase />
      <MembershipPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}