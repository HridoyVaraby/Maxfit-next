import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createServerSupabaseClient();
    
    // Check if user is authenticated
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get the current status
    const { data: contact } = await supabase
      .from('contact_submissions')
      .select('is_read')
      .eq('id', params.id)
      .single();
    
    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }
    
    // Toggle the is_read status
    const { error } = await supabase
      .from('contact_submissions')
      .update({ is_read: !contact.is_read })
      .eq('id', params.id);
    
    if (error) {
      throw error;
    }
    
    // Redirect back to the contacts page
    return NextResponse.redirect(new URL('/admin/contacts', request.url));
  } catch (error) {
    console.error('Error toggling contact read status:', error);
    return NextResponse.json(
      { error: 'Failed to update contact' },
      { status: 500 }
    );
  }
}