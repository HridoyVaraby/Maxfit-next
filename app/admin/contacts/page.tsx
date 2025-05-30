import { createServerSupabaseClient } from '@/lib/supabase-server';
import { formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LuMail } from 'react-icons/lu';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ContactViewDialog from '@/components/admin/ContactViewDialog';

export const metadata = {
  title: 'Contact Submissions | MAXFIT Gym Admin',
  description: 'Manage contact form submissions',
};

export const dynamic = 'force-dynamic';

export default async function ContactsAdminPage() {
  const supabase = createServerSupabaseClient();
  
  // Fetch contact submissions, ordered by creation date (newest first)
  const { data: contacts, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching contacts:', error);
  }
  
  return (
    <div>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contact Submissions</h1>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <LuMail className="h-4 w-4" />
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
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts && contacts.length > 0 ? (
                contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>{contact.subject}</TableCell>
                    <TableCell>{formatDate(contact.created_at)}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${contact.is_read ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'}`}>
                        {contact.is_read ? 'Read' : 'Unread'}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <ContactViewDialog contact={contact} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No contact submissions found
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