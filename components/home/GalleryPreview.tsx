"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GALLERY_IMAGES } from '@/lib/constants';

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            STEP INTO THE VIBRANT WORLD OF OUR GYM THROUGH OUR <span className="text-primary">GALLERY</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Get a glimpse of our state-of-the-art facilities and energetic atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.slice(0, 6).map((image, index) => (
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

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}