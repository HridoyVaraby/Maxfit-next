"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

// Import additional gallery images
const EXTENDED_GALLERY = [
  {
    src: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Modern gym equipment area',
    category: 'Gym',
  },
  {
    src: 'https://images.pexels.com/photos/4498603/pexels-photo-4498603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Members working out with weights',
    category: 'Gym',
  },
  {
    src: 'https://images.pexels.com/photos/7676489/pexels-photo-7676489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Group fitness class in action',
    category: 'Classes',
  },
  {
    src: 'https://images.pexels.com/photos/6456174/pexels-photo-6456174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Personal training session',
    category: 'Classes',
  },
  {
    src: 'https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Yoga class in progress',
    category: 'Classes',
  },
  {
    src: 'https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Family fitness event',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cardio equipment area',
    category: 'Gym',
  },
  {
    src: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Weight lifting area',
    category: 'Gym',
  },
  {
    src: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Gym reception area',
    category: 'Gym',
  },
  {
    src: 'https://images.pexels.com/photos/3836861/pexels-photo-3836861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Fitness class in studio',
    category: 'Classes',
  },
  {
    src: 'https://images.pexels.com/photos/8436760/pexels-photo-8436760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Yoga session',
    category: 'Classes',
  },
  {
    src: 'https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Zumba class',
    category: 'Classes',
  },
  {
    src: 'https://images.pexels.com/photos/7991672/pexels-photo-7991672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Annual fitness competition',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Fitness workshop',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/9067045/pexels-photo-9067045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Community fitness event',
    category: 'Events',
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredGallery = activeFilter 
    ? EXTENDED_GALLERY.filter(image => image.category === activeFilter)
    : EXTENDED_GALLERY;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('Gym')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'Gym'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              Gym
            </button>
            <button
              onClick={() => setActiveFilter('Classes')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'Classes'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              Classes
            </button>
            <button
              onClick={() => setActiveFilter('Events')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === 'Events'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGallery.map((image, index) => (
            <Dialog key={image.src}>
              <DialogTrigger asChild>
                <div 
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer group animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold text-sm bg-primary/80 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 border-none max-w-5xl bg-transparent">
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                  <button 
                    className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}