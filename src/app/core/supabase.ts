import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uaizzkbdmjszpqoeixic.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhaXp6a2JkbWpzenBxb2VpeGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0OTAyMDgsImV4cCI6MjEwOTA2NjIwOH0.e_UaUtfHjvrwHq_fwyvb5Mu_utJXJLNad2wP4EACnTA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
