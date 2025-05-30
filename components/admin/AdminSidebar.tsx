'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createBrowserSupabaseClient } from '@/lib/supabase-browser';
import { toast } from 'sonner';
import MaxFitLogo from '@/components/layout/MaxFitLogo';
import { LuLayoutDashboard, LuUsers, LuClipboardList, LuLogOut } from 'react-icons/lu';

export default function AdminSidebar() {
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
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-background border-r border-border transition-transform">
      <div className="flex h-full flex-col overflow-y-auto py-5 px-4">
        <div className="mb-8 flex items-center pl-2">
          <MaxFitLogo className="h-8 w-auto" />
          <span className="ml-2 text-xl font-bold">Admin</span>
        </div>
        
        <nav className="flex flex-col space-y-1 flex-1">
          <NavItem 
            href="/admin/dashboard" 
            isActive={isActive('/admin/dashboard')} 
            icon={<LuLayoutDashboard className="h-5 w-5" />}
            label="Dashboard" 
          />
          <NavItem 
            href="/admin/contacts" 
            isActive={isActive('/admin/contacts')} 
            icon={<LuClipboardList className="h-5 w-5" />}
            label="Contacts" 
          />
          <NavItem 
            href="/admin/memberships" 
            isActive={isActive('/admin/memberships')} 
            icon={<LuUsers className="h-5 w-5" />}
            label="Memberships" 
          />
        </nav>
        
        <div className="pt-4 border-t border-border mt-auto">
          <button
            onClick={handleSignOut}
            className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <LuLogOut className="mr-2 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}

interface NavItemProps {
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
}

function NavItem({ href, isActive, icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </Link>
  );
}