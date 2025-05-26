import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import CallToAction from '@/components/home/CallToAction';

export const metadata = {
  title: 'Gallery | MAXFIT Gym - Sonarpur, Kolkata',
  description: 'Browse photos of MAXFIT Gym in Sonarpur, Kolkata - our facilities, equipment, classes, events, and community.',
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <CallToAction />
    </>
  );
}