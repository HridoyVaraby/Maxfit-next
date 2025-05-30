'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createBrowserSupabaseClient } from '@/lib/supabase-browser';
import { toast } from 'sonner';

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  const handleSignOut = async () => {
    try {
      const supabase = createBrowserSupabaseClient();
      await supabase.auth.signOut();
      toast.success('Signed out successfully');
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    }
  };
  
  return (
    <div className="bg-background p-4 shadow-sm rounded-lg mb-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">MAXFIT Admin</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <Link href="/admin/dashboard" className={`text-sm font-medium ${isActive('/admin/dashboard') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Dashboard
            </Link>
            <Link href="/admin/contacts" className={`text-sm font-medium ${isActive('/admin/contacts') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Contacts
            </Link>
            <Link href="/admin/memberships" className={`text-sm font-medium ${isActive('/admin/memberships') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              Memberships
            </Link>
          </nav>
          
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}