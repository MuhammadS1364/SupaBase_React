import { createClient } from '@supabase/supabase-js';


const SupaBase_Url = "https://durqfeudehgmcwqkscng.supabase.co";

const SupaBase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1cnFmZXVkZWhnbWN3cWtzY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMjM5MzgsImV4cCI6MjA3NjY5OTkzOH0.LUc5hXFOx0usPaTET6D07vxXzhAM154T3fwYw18Jeok";



export const SupaBase = createClient(
    SupaBase_Url, SupaBase_key
)