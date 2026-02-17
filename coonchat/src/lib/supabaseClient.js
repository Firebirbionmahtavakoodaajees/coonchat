import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dprudkvkotavzhieovfx.supabase.co';
const supabaseAnonKey = 'sb_publishable_WGmi5uPdwEs8UwsNBrUNpQ_9SZb3W0d';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);