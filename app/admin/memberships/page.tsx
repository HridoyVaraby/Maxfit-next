import { createServerSupabaseClient } from '@/lib/supabase-server';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { LuEye, LuDownload } from 'react-icons/lu';
import { formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Membership Registrations | MAXFIT Gym Admin',
  description: 'Manage membership registrations',
};

export const dynamic = 'force-dynamic';

export default async function MembershipsAdminPage() {
  const supabase = createServerSupabaseClient();
  
  // Fetch membership registrations, ordered by creation date (newest first)
  const { data: memberships, error } = await supabase
    .from('membership_registrations')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching memberships:', error);
  }
  
  // Function to format membership type for display
  const formatMembershipType = (type: string) => {
    switch (type) {
      case 'starter':
        return 'Starter';
      case 'proPlus':
        return 'Pro Plus';
      case 'elite':
        return 'Elite';
      default:
        return type;
    }
  };
  
  return (
    <div>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Membership Registrations</h1>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <LuDownload className="h-4 w-4" />
          Export
        </Button>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Membership</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Registration Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {memberships && memberships.length > 0 ? (
                memberships.map((membership) => (
                  <TableRow key={membership.id}>
                    <TableCell className="font-medium">{`${membership.first_name} ${membership.last_name}`}</TableCell>
                    <TableCell>{membership.email}</TableCell>
                    <TableCell>{membership.phone}</TableCell>
                    <TableCell>{formatMembershipType(membership.membership_type)}</TableCell>
                    <TableCell>{formatDate(membership.start_date)}</TableCell>
                    <TableCell>{formatDate(membership.created_at)}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${membership.is_read ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'}`}>
                        {membership.is_read ? 'Processed' : 'New'}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <LuEye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No membership registrations found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}