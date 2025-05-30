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
    const { data: membership } = await supabase
      .from('membership_registrations')
      .select('is_read')
      .eq('id', params.id)
      .single();
    
    if (!membership) {
      return NextResponse.json(
        { error: 'Membership registration not found' },
        { status: 404 }
      );
    }
    
    // Toggle the is_read status
    const { error } = await supabase
      .from('membership_registrations')
      .update({ is_read: !membership.is_read })
      .eq('id', params.id);
    
    if (error) {
      throw error;
    }
    
    // Redirect back to the memberships page
    return NextResponse.redirect(new URL('/admin/memberships', request.url));
  } catch (error) {
    console.error('Error toggling membership read status:', error);
    return NextResponse.json(
      { error: 'Failed to update membership registration' },
      { status: 500 }
    );
  }
}