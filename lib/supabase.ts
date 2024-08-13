import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://emjzbdligihyryqhauka.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtanpiZGxpZ2loeXJ5cWhhdWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1MTU3ODksImV4cCI6MjAzOTA5MTc4OX0.fNuAAUdIzMrR5YhilpDk5WfZ0-stVtDNpYk45Lbuv5M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
