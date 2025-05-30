import { createServerSupabaseClient } from '@/lib/supabase-server';
import { LuClipboardList, LuUsers, LuEye, LuEyeOff } from 'react-icons/lu';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const supabase = createServerSupabaseClient();
  
  // Get total contacts count
  const { count: totalContacts } = await supabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true });
  
  // Get unread contacts count
  const { count: unreadContacts } = await supabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'unread');
  
  // Get total memberships count
  const { count: totalMemberships } = await supabase
    .from('membership_registrations')
    .select('*', { count: 'exact', head: true });
  
  // Get unread memberships count
  const { count: unreadMemberships } = await supabase
    .from('membership_registrations')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'unread');
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <DashboardCard 
          title="Total Contacts" 
          value={totalContacts || 0} 
          icon={<LuClipboardList />} 
          color="bg-chart-1/10 text-chart-1" 
        />
        
        <DashboardCard 
          title="Unread Contacts" 
          value={unreadContacts || 0} 
          icon={<LuEyeOff />} 
          color="bg-chart-2/10 text-chart-2" 
        />
        
        <DashboardCard 
          title="Total Memberships" 
          value={totalMemberships || 0} 
          icon={<LuUsers />} 
          color="bg-chart-4/10 text-chart-4" 
        />
        
        <DashboardCard 
          title="Unread Memberships" 
          value={unreadMemberships || 0} 
          icon={<LuEyeOff />} 
          color="bg-chart-5/10 text-chart-5" 
        />
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

function DashboardCard({ title, value, icon, color }: DashboardCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-1">{title}</h2>
            <p className="text-3xl font-bold">{value}</p>
          </div>
          <div className={`p-3 rounded-full ${color}`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}