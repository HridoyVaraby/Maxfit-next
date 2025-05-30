import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import AdminSidebar from '@/components/admin/AdminSidebar';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Dashboard | MAXFIT Gym',
  description: 'Admin dashboard for MAXFIT Gym',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerSupabaseClient();
  
  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession();
  
  // If not authenticated, redirect to login page
  // But only if we're not already on the login page
  if (!session) {
    // Get the current pathname from headers
    const headersList = headers();
    const pathname = headersList.get('x-pathname') || '';
    
    // Only redirect if we're not already on the login page
    if (!pathname.includes('/admin/login')) {
      redirect('/admin/login');
    }
  }
  
  // Get the current pathname from headers
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const isLoginPage = pathname.includes('/admin/login');
  
  // If we're on the login page, don't show the admin layout
  if (isLoginPage) {
    return <div className="min-h-screen bg-muted/30">{children}</div>;
  }
  
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <main className="pl-64 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}