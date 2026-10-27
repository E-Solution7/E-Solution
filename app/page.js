-- E-Solution Database Schema for Supabase (Run in Supabase SQL Editor)

-- ১. সকল আবেদনের টেবিল (ভূমি সেবা + ৬টি মৌলিক সেবা)
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_id TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  service_title TEXT NOT NULL,
  applicant_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  nid TEXT NOT NULL,
  division TEXT,
  district TEXT,
  upazila TEXT,
  mouza_or_details TEXT,
  khatian_no TEXT,
  dag_no TEXT,
  total_fee NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'Pending', -- Pending, Verified, Processing, Completed, Rejected
  admin_note TEXT DEFAULT 'আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে।',
  assigned_agent TEXT DEFAULT 'নির্ধারণ করা হয়নি',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ২. এজেন্ট ও অ্যাডমিন টেবিল
CREATE TABLE IF NOT EXISTS public.agents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'agent', -- 'admin' or 'agent'
  phone TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  division TEXT,
  district TEXT,
  upazila TEXT,
  approved BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ৩. Row Level Security (RLS) পলিসি সেটআপ
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read applications" ON public.applications FOR SELECT USING (true);
CREATE POLICY "Allow public insert applications" ON public.applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update applications" ON public.applications FOR UPDATE USING (true);

CREATE POLICY "Allow public read agents" ON public.agents FOR SELECT USING (true);
CREATE POLICY "Allow public insert agents" ON public.agents FOR INSERT WITH CHECK (true);
