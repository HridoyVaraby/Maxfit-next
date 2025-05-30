// This script creates an initial admin user in Supabase Auth
// Run with: node scripts/create-admin-user.js

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // You need to add this to your .env.local file

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing environment variables. Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function createAdminUser() {
  const email = 'admin@maxfit.com';
  const password = 'MaxFit@2023'; // Change this to a secure password
  const name = 'Admin User';
  
  try {
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    
    if (authError) {
      throw authError;
    }
    
    console.log('User created successfully in Auth:', authData.user.id);
    
    // Check if user already exists in admin_users table
    const { data: existingUser } = await supabase
      .from('admin_users')
      .select('id')
      .eq('email', email)
      .single();
    
    if (existingUser) {
      console.log('User already exists in admin_users table');
      return;
    }
    
    // Add user to admin_users table
    const { error: dbError } = await supabase
      .from('admin_users')
      .insert([
        {
          id: authData.user.id,
          email,
          name,
          role: 'admin',
        },
      ]);
    
    if (dbError) {
      throw dbError;
    }
    
    console.log('User added to admin_users table');
    console.log('\nAdmin user created successfully!');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('\nPlease change the password after first login.');
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();