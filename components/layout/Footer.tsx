import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import MaxFitLogo from './MaxFitLogo';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <MaxFitLogo className="h-10" />
            <p className="text-muted-foreground mt-4 max-w-xs">
              MAXFIT is a premier unisex and family gym in Sonarpur, Kolkata, dedicated to helping you achieve your fitness goals.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Weight Training
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Cardio
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Yoga & Zumba
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Kids & Family Fitness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Mathurapur, Prantikpally, Sonarpur, Kolkata, West Bengal 700150, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 80172 01852</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">maxfitsonarpur@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} <a href="/" className="text-primary hover:underline">MAXFIT</a> Gym. All rights reserved. Developed by <a href="https://varabit.com" className="hover:underline">Varabit</a> Webdesign & Development.
          </p>
        </div>
      </div>
    </footer>
  );
}