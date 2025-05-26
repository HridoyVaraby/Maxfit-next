"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Dumbbell } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import MaxFitLogo from './MaxFitLogo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-md py-2' 
        : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <MaxFitLogo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={cn(
                'font-medium transition-colors',
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-primary',
                pathname === link.path && 'text-primary font-semibold'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/membership">Join Now</Link>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="ml-4 p-2 text-foreground"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={cn(
                    'py-2 font-medium transition-colors',
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-primary',
                    pathname === link.path && 'text-primary font-semibold'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/membership">Join Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}