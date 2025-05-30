'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.startsWith('/admin');

  return (
    <>
      {/* Only show Header and Footer for non-admin pages */}
      {!isAdminPath && <Header />}
      {children}
      {!isAdminPath && <Footer />}
    </>
  );
}