import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    
    // Parse request body
    const { email, password, name } = await request.json();
    
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }
    
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    
    if (authError) {
      throw authError;
    }
    
    // Add user to admin_users table
    if (authData.user) {
      const { error: dbError } = await supabase
        .from('admin_users')
        .insert([
          {
            id: authData.user.id,
            email: email,
            name: name,
            role: 'admin',
          },
        ]);
      
      if (dbError) {
        throw dbError;
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create user' },
      { status: 500 }
    );
  }
}