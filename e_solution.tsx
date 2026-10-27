"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  Landmark,
  Wheat,
  Shirt,
  Building2,
  GraduationCap,
  HeartPulse,
  Scale,
  Search,
  FileText,
  Calculator,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  Code2,
  Database,
  Globe,
  Copy,
  Check,
  LogOut,
  PlusCircle,
  Sparkles,
  PhoneCall,
  MapPin,
  Layers,
  ChevronRight,
  AlertCircle,
  Terminal,
  FolderGit2
} from "lucide-react";

// ==========================================
// ১. ডাটা স্ট্রাকচার: ১টি বিশেষ ভূমি সেবা + ৬টি মৌলিক সেবা (মোট ৭টি কার্ড)
// ==========================================

const FEATURED_VUMI_SEBA = {
  id: "vumi-seba",
  badge: "১০০% প্রস্তুত ও লাইভ মডিউল",
  title: "ভূমি সেবা (ই-ভূমি পোর্টাল)",
  subtitle: "খতিয়ান, ই-নামজারি, খাজনা, মৌজা ম্যাপ ও জমির কাগজপত্র",
  desc: "ঘরে বসেই ই-নামজারি আবেদন, খতিয়ান/পর্চা উত্তোলন, ভূমি উন্নয়ন কর পরিশোধ, মৌজা ম্যাপ সংগ্রহ, জমি মাপার ক্যালকুলেটর এবং লাইভ আবেদন ট্র্যাকিং করুন।",
  icon: "🏡",
  status: "ready",
  highlights: [
    "ই-নামজারি ও মিস কেস আবেদন",
    "অনলাইন খতিয়ান (CS, SA, RS, BS) ও মৌজা ম্যাপ",
    "ভূমি উন্নয়ন কর (খাজনা) ও দলিল যাচাই",
    "জমি মাপার ডিজিটাল ক্যালকুলেটর ও লাইভ ট্র্যাকিং"
  ]
};

const SIX_BASIC_SERVICES = [
  {
    id: "food-agri",
    number: "০১",
    title: "খাদ্য ও কৃষি সেবা",
    subtitle: "মৌলিক সেবা - ১ (Food & Agriculture)",
    desc: "কৃষি ভর্তুকি, সার-বীজ সহায়তা, টিসিবি ফ্যামিলি কার্ড, খাদ্য বান্ধব কর্মসূচি এবং আধুনিক কৃষি পরামর্শ সেবা।",
    icon: "🌾",
    color: "from-lime-600 to-emerald-700",
    lightBg: "bg-lime-50 border-lime-200 text-lime-800",
    status: "expandable",
    subServices: [
      { name: "টিসিবি (TCB) ডিজিটাল ফ্যামিলি কার্ড আবেদন", fee: "সরকারি ফি প্রযোজ্য", time: "৭-১০ দিন" },
      { name: "কৃষক কার্ড ও কৃষি প্রণোদনা নিবন্ধন", fee: "বিনামূল্যে / ১০০৳ সেবা ফি", time: "৫-৭ দিন" },
      { name: "খাদ্য শস্য ও গুদামজাতকরণ লাইসেন্স সহায়তা", fee: "৫০০৳", time: "১৫ দিন" },
      { name: "মাটি পরীক্ষা ও ফসল রোগবালাই টেলি-পরামর্শ", fee: "১০০৳", time: "১-২ দিন" }
    ],
    devGuide: {
      filePath: "src/modules/food-agri/FoodAgriPage.jsx",
      tableName: "food_agri_applications",
      nextSteps: "কৃষকের এনআইডি ও জমির দাগ নম্বরের সাথে কৃষি অফিসের API বা Supabase টেবিল যুক্ত করে ভর্তুকি ট্র্যাকিং যোগ করুন।"
    }
  },
  {
    id: "clothing-sme",
    number: "০২",
    title: "বস্ত্র ও কুটির শিল্প সেবা",
    subtitle: "মৌলিক সেবা - ২ (Clothing & SME Support)",
    desc: "তাঁত ও বস্ত্র শিল্প উদ্যোক্তা ঋণ, ক্ষুদ্র ও কুটির শিল্প (BSCIC) নিবন্ধন, পোশাক শ্রমিক কল্যাণ তহবিল ও প্রশিক্ষণ।",
    icon: "🧵",
    color: "from-purple-600 to-indigo-700",
    lightBg: "bg-purple-50 border-purple-200 text-purple-800",
    status: "expandable",
    subServices: [
      { name: "ক্ষুদ্র ও কুটির শিল্প (বিসিক) উদ্যোক্তা নিবন্ধন", fee: "৪০০৳", time: "৭-১৪ দিন" },
      { name: "তাঁতী কার্ড ও ক্ষুদ্র ঋণ সহায়তা আবেদন", fee: "২০০৳", time: "১০-১৫ দিন" },
      { name: "পোশাক শ্রমিক কল্যাণ তহবিল অনুদান আবেদন", fee: "১৫০৳", time: "১৫-২০ দিন" },
      { name: "হস্তশিল্প ও বুটিক ট্রেড লাইসেন্স প্রসেসিং", fee: "৩০০৳", time: "৩-৭ দিন" }
    ],
    devGuide: {
      filePath: "src/modules/clothing-sme/ClothingSmePage.jsx",
      tableName: "sme_applications",
      nextSteps: "উদ্যোক্তাদের ট্রেড লাইসেন্স ডকুমেন্ট আপলোডের জন্য Supabase Storage Bucket ('sme-docs') যুক্ত করুন।"
    }
  },
  {
    id: "housing-shelter",
    number: "০৩",
    title: "বাসস্থান ও আবাসন সেবা",
    subtitle: "মৌলিক সেবা - ৩ (Housing & Shelter)",
    desc: "বাড়ির প্ল্যান অনুমোদন, গৃহহীনদের আশ্রয়ণ সহায়তা, হাউজিং লোন প্রসেসিং এবং পৌরসভা/ইউনিয়ন হোল্ডিং ট্যাক্স সেবা।",
    icon: "🏢",
    color: "from-amber-600 to-orange-700",
    lightBg: "bg-amber-50 border-amber-200 text-amber-800",
    status: "expandable",
    subServices: [
      { name: "নতুন হোল্ডিং নম্বর ও পৌর কর নিবন্ধন", fee: "৩০০৳", time: "৭-১০ দিন" },
      { name: "ভবন নির্মাণ ও বাড়ির প্ল্যান অনুমোদন সহায়তা", fee: "১০০০৳", time: "১৫-৩০ দিন" },
      { name: "সরকারি আবাসন ও গৃহ নির্মাণ ঋণ আবেদন", fee: "৫০০৳", time: "২০-৩০ দিন" },
      { name: "বিদ্যুৎ/গ্যাস/পানি আবাসিক সংযোগ আবেদন", fee: "২৫০৳", time: "৭-১৪ দিন" }
    ],
    devGuide: {
      filePath: "src/modules/housing/HousingPage.jsx",
      tableName: "housing_applications",
      nextSteps: "ভূমি সেবার খতিয়ান ও দাগের ডাটার সাথে হোল্ডিং ট্যাক্স মডিউলটি রিলেশনাল ডাটাবেসে যুক্ত করুন।"
    }
  },
  {
    id: "education-skill",
    number: "০৪",
    title: "শিক্ষা ও দক্ষতা উন্নয়ন সেবা",
    subtitle: "মৌলিক সেবা - ৪ (Education & Skills)",
    desc: "স্কুল-কলেজ ও বিশ্ববিদ্যালয় ভর্তি আবেদন, উপবৃত্তি ও শিক্ষা সহায়তা ট্রাস্ট ফর্ম, সার্টিফিকেট সংশোধন এবং আইটি প্রশিক্ষণ।",
    icon: "📚",
    color: "from-blue-600 to-cyan-700",
    lightBg: "bg-blue-50 border-blue-200 text-blue-800",
    status: "expandable",
    subServices: [
      { name: "প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট ও উপবৃত্তি আবেদন", fee: "১০০৳", time: "১-৩ দিন" },
      { name: "একাদশ ও বিশ্ববিদ্যালয় ভর্তি অনলাইন আবেদন", fee: "১৫০৳", time: "তাৎক্ষণিক" },
      { name: "বোর্ড সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন", fee: "৫০০৳", time: "১৫-৩০ দিন" },
      { name: "ফ্রিল্যান্সিং ও কারিগরি দক্ষতা উন্নয়ন কোর্স নিবন্ধন", fee: "২০০৳", time: "১-২ দিন" }
    ],
    devGuide: {
      filePath: "src/modules/education/EducationPage.jsx",
      tableName: "education_applications",
      nextSteps: "শিক্ষার্থীদের রোল ও রেজিস্ট্রেশন নম্বর ভেরিফিকেশন এবং পেমেন্ট গেটওয়ে (bKash/Nagad) ইন্টিগ্রেশন করুন।"
    }
  },
  {
    id: "health-medical",
    number: "০৫",
    title: "চিকিৎসা ও স্বাস্থ্য সেবা",
    subtitle: "মৌলিক সেবা - ৫ (Healthcare & Medical)",
    desc: "বিশেষজ্ঞ ডাক্তারের সিরিয়াল, টেলিমেডিসিন পরামর্শ, সরকারি চিকিৎসা অনুদান (সমাজকল্যাণ), ভ্যাকসিন ও হেলথ কার্ড।",
    icon: "🩺",
    color: "from-rose-600 to-red-700",
    lightBg: "bg-rose-50 border-rose-200 text-rose-800",
    status: "expandable",
    subServices: [
      { name: "জটিল রোগের সরকারি চিকিৎসা অনুদান আবেদন (৫০,০০০৳)", fee: "২০০৳", time: "১৫-৩০ দিন" },
      { name: "বিশেষজ্ঞ ডাক্তারের অনলাইন অ্যাপয়েন্টমেন্ট ও টেলিমেডিসিন", fee: "১০০৳", time: "তাৎক্ষণিক" },
      { name: "টিকাদান (ইপিআই) ও স্বাস্থ্য সুরক্ষা কার্ড নিবন্ধন", fee: "১০০৳", time: "১-২ দিন" },
      { name: "জরুরি অ্যাম্বুলেন্স ও ব্লাড ব্যাংক ডিরেক্টরি সেবা", fee: "বিনামূল্যে", time: "তাৎক্ষণিক" }
    ],
    devGuide: {
      filePath: "src/modules/health/HealthPage.jsx",
      tableName: "health_appointments",
      nextSteps: "ডাক্তারদের তালিকা ও সময়সূচির জন্য আলাদা `doctors` টেবিল তৈরি করে বুকিং স্লট যোগ করুন।"
    }
  },
  {
    id: "legal-digital",
    number: "০৬",
    title: "আইনি ও ডিজিটাল নাগরিক সেবা",
    subtitle: "মৌলিক সেবা - ৬ (Legal & Citizen Digital)",
    desc: "জাতীয় পরিচয়পত্র (NID), জন্ম নিবন্ধন, পাসপোর্ট, পুলিশ ক্লিয়ারেন্স, বয়স্ক/বিধবা ভাতা এবং প্রাথমিক আইনি সহায়তা।",
    icon: "⚖️",
    color: "from-teal-600 to-emerald-800",
    lightBg: "bg-teal-50 border-teal-200 text-teal-800",
    status: "expandable",
    subServices: [
      { name: "এনআইডি (NID) ও জন্ম নিবন্ধন সংশোধন আবেদন", fee: "৩০০৳", time: "৭-১৪ দিন" },
      { name: "ই-পাসপোর্ট ও পুলিশ ক্লিয়ারেন্স প্রসেসিং", fee: "৪০০৳", time: "৭-২১ দিন" },
      { name: "সরকারি লিগ্যাল এইড ও পারিবারিক/দেওয়ানি আইনি পরামর্শ", fee: "৩০০৳", time: "৩-৫ দিন" },
      { name: "বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা অনলাইন আবেদন", fee: "১০০৳", time: "৭-১০ দিন" }
    ],
    devGuide: {
      filePath: "src/modules/legal-digital/LegalDigitalPage.jsx",
      tableName: "citizen_service_requests",
      nextSteps: "আইনজীবীদের প্যানেল এবং নাগরিক সনদ ট্র্যাকিং যোগ করে এই মডিউলটি প্রসারিত করুন।"
    }
  }
];

// ভূমি সেবার ৬টি বিস্তারিত সাব-সার্ভিস (lsfc.shawonweb.com স্টাইল)
const LAND_SERVICES_LIST = [
  {
    id: "mutation",
    title: "ই-নামজারি (মিউটেশন) আবেদন",
    desc: "জমির মালিকানা পরিবর্তন ও নতুন খতিয়ান তৈরির পূর্ণাঙ্গ অনলাইন আবেদন সেবা।",
    govtFee: 1170,
    serviceFee: 330,
    time: "২৮ কার্যদিবস",
    icon: "📝",
    docs: ["আবেদনকারীর এনআইডি ও ছবি", "মূল দলিল/সার্টিফাইড কপি", "সর্বশেষ খতিয়ান ও ওয়ারিশ সনদ", "হালনাগাদ খাজনা দাখিলা"]
  },
  {
    id: "ldtax",
    title: "ভূমি উন্নয়ন কর (খাজনা) প্রদান",
    desc: "হোল্ডিং এন্ট্রি, খতিয়ান যুক্তকরণ ও অনলাইনে ভূমি উন্নয়ন কর পরিশোধ করে ডিজিটাল দাখিলা সংগ্রহ।",
    govtFee: 0,
    serviceFee: 150,
    time: "১-৩ কার্যদিবস",
    icon: "💳",
    docs: ["এনআইডি কার্ড ও মোবাইল নম্বর", "খতিয়ান বা নামজারি পর্চা", "পূর্বের দাখিলা (যদি থাকে)"]
  },
  {
    id: "eporcha",
    title: "খতিয়ান ও পর্চা (CS, SA, RS, BS) উত্তোলন",
    desc: "অনলাইন ভেরিফাইড কপি বা রেকর্ড রুম থেকে সার্টিফাইড খতিয়ান/পর্চা সংগ্রহের আবেদন।",
    govtFee: 100,
    serviceFee: 100,
    time: "৩-৭ কার্যদিবস",
    icon: "📄",
    docs: ["বিভাগ, জেলা, উপজেলা ও মৌজার নাম", "খতিয়ান নম্বর অথবা দাগ নম্বর", "আবেদনকারীর মোবাইল ও এনআইডি"]
  },
  {
    id: "mouzamap",
    title: "মৌজা ম্যাপ (নকশা) সংগ্রহ",
    desc: "সিএস, এসএ, আরএস বা বিএস মৌজা ম্যাপের দাগ অনুযায়ী সরকারি সার্টিফাইড নকশা উত্তোলন।",
    govtFee: 520,
    serviceFee: 200,
    time: "৭-১০ কার্যদিবস",
    icon: "🗺️",
    docs: ["মৌজার নাম ও জে.এল (JL) নম্বর", "শীট নম্বর ও জরিপের ধরন (CS/RS/BS)", "এনআইডি ও ডেলিভারি ঠিকানা"]
  },
  {
    id: "misccase",
    title: "মিস কেস (Misc Case) ও খতিয়ান সংশোধন",
    desc: "খতিয়ানে নামের বানান, দাগ বা অংশের করণিক ভুল সংশোধনের জন্য এসি ল্যান্ড অফিসে আবেদন।",
    govtFee: 500,
    serviceFee: 500,
    time: "৩০-৪৫ কার্যদিবস",
    icon: "⚖️",
    docs: ["ভুল খতিয়ানের কপি", "সঠিক দলিল ও পূর্ববর্তী খতিয়ান", "এনআইডি ও লিখিত আবেদনের কারণ"]
  },
  {
    id: "deedcheck",
    title: "দলিল যাচাই ও সার্টিফাইড নকল উত্তোলন",
    desc: "পুরাতন বা নতুন দলিলের সত্যতা যাচাই এবং সাব-রেজিস্ট্রি অফিস থেকে সার্টিফাইড কপি উত্তোলন।",
    govtFee: 400,
    serviceFee: 300,
    time: "৭-১৪ কার্যদিবস",
    icon: "🔍",
    docs: ["দলিল নম্বর ও রেজিস্ট্রির সাল", "সাব-রেজিস্ট্রি অফিসের নাম", "দাতা ও গ্রহীতার নাম"]
  }
];

const INITIAL_APPLICATIONS = [
  {
    trackingId: "ES-2026-1001",
    category: "ভূমি সেবা",
    serviceTitle: "ই-নামজারি (মিউটেশন) আবেদন",
    applicantName: "মোঃ রফিকুল ইসলাম",
    mobile: "01711223344",
    nid: "1990123456789",
    division: "রংপুর",
    district: "নীলফামারী",
    upazila: "সদর",
    mouza: "কুন্দপুকুর (জে.এল-৪৫)",
    khatianNo: "৪৫২",
    dagNo: "১২০৪",
    totalFee: 1500,
    status: "Processing",
    adminNote: "ইউনিয়ন ভূমি অফিস থেকে তদন্ত প্রতিবেদন এসি ল্যান্ড অফিসে প্রেরণ করা হয়েছে।",
    assignedAgent: "মোঃ শরিফুল ইসলাম (সদর)",
    date: "২৭ অক্টোবর, ২০২৬"
  },
  {
    trackingId: "ES-2026-1002",
    category: "খাদ্য ও কৃষি সেবা",
    serviceTitle: "টিসিবি (TCB) ডিজিটাল ফ্যামিলি কার্ড আবেদন",
    applicantName: "মোছাঃ রহিমা বেগম",
    mobile: "01811223344",
    nid: "1985987654321",
    division: "রংপুর",
    district: "নীলফামারী",
    upazila: "সৈয়দপুর",
    mouza: "বোতলাগাড়ী",
    khatianNo: "প্রযোজ্য নয়",
    dagNo: "ওয়ার্ড নং-০৪",
    totalFee: 100,
    status: "Verified",
    adminNote: "ওয়ার্ড কাউন্সিলর/ইউপি কার্যালয়ে ভেরিফিকেশন সম্পন্ন হয়েছে।",
    assignedAgent: "আব্দুল করিম (এজেন্ট)",
    date: "২৬ অক্টোবর, ২০২৬"
  }
];

const INITIAL_AGENTS = [
  {
    id: 1,
    name: "মোঃ শরিফুল ইসলাম",
    role: "admin",
    phone: "01700000000",
    password: "admin",
    division: "রংপুর",
    district: "নীলফামারী",
    upazila: "সদর",
    approved: true
  },
  {
    id: 2,
    name: "আব্দুল করিম (ডিজিটাল সেন্টার)",
    role: "agent",
    phone: "01800000000",
    password: "123",
    division: "রংপুর",
    district: "নীলফামারী",
    upazila: "সৈয়দপুর",
    approved: true
  },
  {
    id: 3,
    name: "তানভীর আহমেদ",
    role: "agent",
    phone: "01900000000",
    password: "123",
    division: "ঢাকা",
    district: "গাজীপুর",
    upazila: "শ্রীপুর",
    approved: true
  }
];

// ==========================================
// ২. SUPABASE + GITHUB + VERCEL EXPORT TEMPLATES
// ==========================================
const SUPABASE_SQL_SCHEMA = `-- E-Solution Database Schema for Supabase (Run in Supabase SQL Editor)

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
CREATE POLICY "Allow public insert agents" ON public.agents FOR INSERT WITH CHECK (true);`;

const SUPABASE_CLIENT_CODE = `// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);`;

const PACKAGE_JSON_CODE = `{
  "name": "e-solution-platform",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.45.0",
    "lucide-react": "^0.454.0",
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14"
  }
}`;

export default function App() {
  // Navigation States:
  // 'home' | 'vumi-hub' | 'basic-detail' | 'apply' | 'track' | 'calculator' | 'dashboard' | 'auth' | 'dev-export'
  const [activeView, setActiveView] = useState("home");
  const [selectedBasicService, setSelectedBasicService] = useState(SIX_BASIC_SERVICES[0]);

  // Persistent States
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [currentUser, setCurrentUser] = useState(null);

  // Application Form State
  const [applyCategory, setApplyCategory] = useState("ভূমি সেবা");
  const [applyServiceTitle, setApplyServiceTitle] = useState(LAND_SERVICES_LIST[0].title);
  const [applyFee, setApplyFee] = useState(LAND_SERVICES_LIST[0].govtFee + LAND_SERVICES_LIST[0].serviceFee);
  const [formData, setFormData] = useState({
    applicantName: "",
    mobile: "",
    nid: "",
    division: "রংপুর",
    district: "",
    upazila: "",
    mouza: "",
    khatianNo: "",
    dagNo: ""
  });
  const [generatedTrackingId, setGeneratedTrackingId] = useState(null);

  // Live Tracking State
  const [trackInput, setTrackInput] = useState("");
  const [trackedResult, setTrackedResult] = useState(null);
  const [trackError, setTrackError] = useState("");

  // Land Calculator State
  const [calcLength, setCalcLength] = useState("100");
  const [calcWidth, setCalcWidth] = useState("43.56");

  // Agent Filter
  const [agentDivisionFilter, setAgentDivisionFilter] = useState("সকল");

  // Auth State
  const [authMode, setAuthMode] = useState("login");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [regData, setRegData] = useState({
    name: "",
    phone: "",
    password: "",
    role: "agent",
    division: "রংপুর",
    district: "",
    upazila: ""
  });

  // Copy feedback state
  const [copiedKey, setCopiedKey] = useState(null);

  // Load saved data from localStorage
  useEffect(() => {
    try {
      const savedApps = localStorage.getItem("esolution_applications_v2");
      const savedAgents = localStorage.getItem("esolution_agents_v2");
      const savedUser = localStorage.getItem("esolution_user_v2");

      if (savedApps) setApplications(JSON.parse(savedApps));
      if (savedAgents) setAgents(JSON.parse(savedAgents));
      if (savedUser) setCurrentUser(JSON.parse(savedUser));
    } catch (e) {
      console.error("Storage load error:", e);
    }
  }, []);

  const saveApplications = (newList) => {
    setApplications(newList);
    try {
      localStorage.setItem("esolution_applications_v2", JSON.stringify(newList));
    } catch (e) {
      console.error(e);
    }
  };

  const saveAgents = (newList) => {
    setAgents(newList);
    try {
      localStorage.setItem("esolution_agents_v2", JSON.stringify(newList));
    } catch (e) {
      console.error(e);
    }
  };

  // Start an application from any card
  const startApplication = (categoryName, serviceTitle, feeAmount = 200) => {
    setApplyCategory(categoryName);
    setApplyServiceTitle(serviceTitle);
    setApplyFee(feeAmount);
    setGeneratedTrackingId(null);
    setActiveView("apply");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Submit Application
  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newId = `ES-2026-${randomCode}`;

    const newApp = {
      trackingId: newId,
      category: applyCategory,
      serviceTitle: applyServiceTitle,
      applicantName: formData.applicantName,
      mobile: formData.mobile,
      nid: formData.nid,
      division: formData.division,
      district: formData.district,
      upazila: formData.upazila,
      mouza: formData.mouza || "উল্লেখ নেই",
      khatianNo: formData.khatianNo || "প্রযোজ্য নয়",
      dagNo: formData.dagNo || "প্রযোজ্য নয়",
      totalFee: applyFee,
      status: "Pending",
      adminNote: "আপনার আবেদনটি ই-সলিউশন সিস্টেমে সফলভাবে গৃহীত হয়েছে। প্রতিনিধি কাগজপত্র যাচাই করছেন।",
      assignedAgent: "নির্ধারণ করা হয়নি",
      date: new Date().toLocaleDateString("bn-BD")
    };

    const updated = [newApp, ...applications];
    saveApplications(updated);
    setGeneratedTrackingId(newId);
    setFormData({
      applicantName: "",
      mobile: "",
      nid: "",
      division: "রংপুর",
      district: "",
      upazila: "",
      mouza: "",
      khatianNo: "",
      dagNo: ""
    });
  };

  // Search Tracking
  const handleTrackSearch = (e) => {
    if (e) e.preventDefault();
    setTrackError("");
    const q = trackInput.trim();
    if (!q) return;

    const found = applications.find(
      (item) =>
        item.trackingId.toLowerCase() === q.toLowerCase() ||
        item.mobile === q
    );

    if (found) {
      setTrackedResult(found);
    } else {
      setTrackedResult(null);
      setTrackError(
        "দুঃখিত! এই ট্র্যাকিং আইডি বা মোবাইল নম্বরে কোনো আবেদন পাওয়া যায়নি। (ডেমো দেখতে লিখুন: ES-2026-1001)"
      );
    }
  };

  // Login / Register
  const handleLogin = (e) => {
    e.preventDefault();
    setAuthMessage("");
    const found = agents.find(
      (a) => a.phone === loginPhone.trim() && a.password === loginPass
    );
    if (!found) {
      setAuthMessage("ভুল মোবাইল নম্বর বা পাসওয়ার্ড! ডেমো অ্যাডমিন: 01700000000 / পাসওয়ার্ড: admin");
      return;
    }
    setCurrentUser(found);
    localStorage.setItem("esolution_user_v2", JSON.stringify(found));
    setActiveView("dashboard");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setAuthMessage("");
    if (agents.some((a) => a.phone === regData.phone.trim())) {
      setAuthMessage("এই মোবাইল নম্বরে ইতিমধ্যে অ্যাকাউন্ট রয়েছে!");
      return;
    }
    const newAgent = {
      id: Date.now(),
      ...regData,
      approved: true
    };
    const updated = [...agents, newAgent];
    saveAgents(updated);
    setCurrentUser(newAgent);
    localStorage.setItem("esolution_user_v2", JSON.stringify(newAgent));
    setActiveView("dashboard");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("esolution_user_v2");
    setActiveView("home");
  };

  // Dashboard status update
  const updateAppStatus = (trackingId, newStatus) => {
    const updated = applications.map((app) =>
      app.trackingId === trackingId
        ? {
            ...app,
            status: newStatus,
            assignedAgent: currentUser ? `${currentUser.name} (${currentUser.role})` : app.assignedAgent
          }
        : app
    );
    saveApplications(updated);
    if (trackedResult && trackedResult.trackingId === trackingId) {
      setTrackedResult(updated.find((a) => a.trackingId === trackingId));
    }
  };

  const updateAppNote = (trackingId, newNote) => {
    const updated = applications.map((app) =>
      app.trackingId === trackingId ? { ...app, adminNote: newNote } : app
    );
    saveApplications(updated);
    if (trackedResult && trackedResult.trackingId === trackingId) {
      setTrackedResult(updated.find((a) => a.trackingId === trackingId));
    }
  };

  // Copy & Download Helpers for Developer Setup
  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const downloadFile = (filename, content) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Land Calculator Math
  const areaSqFt = (parseFloat(calcLength) || 0) * (parseFloat(calcWidth) || 0);
  const shotok = (areaSqFt / 435.6).toFixed(2);
  const katha = (areaSqFt / 720).toFixed(2);
  const bigha = (areaSqFt / 14400).toFixed(3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* ==========================================
          TOP BAR & MAIN NAVIGATION
      ========================================== */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>🇧🇩 <strong>E-Solution (ই-সলিউশন)</strong> — ৬টি মৌলিক নাগরিক সেবা ও সমন্বিত ডিজিটাল ভূমি সেবা প্ল্যাটফর্ম</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">হেল্পলাইন: ১৬১২২ / ০১৭০০-০০০০০০</span>
            <button
              onClick={() => setActiveView("dev-export")}
              className="bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-semibold px-2.5 py-0.5 rounded border border-emerald-600 transition flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5" />
              GitHub + Supabase + Vercel ফাইল ডাউনলোড
            </button>
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-3">
          {/* Brand Logo */}
          <div
            onClick={() => setActiveView("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center text-2xl font-black shadow-md group-hover:scale-105 transition">
              E
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  E-Solution
                </h1>
                <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  ৭টি সেবা কার্ড সংস্করণ
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                সহজ সমাধান, সবার জন্য • ৬টি মৌলিক সেবা + ভূমি সেবা
              </p>
            </div>
          </div>

          {/* Nav Buttons */}
          <nav className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
            <button
              onClick={() => setActiveView("home")}
              className={`px-3 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeView === "home"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Home className="w-4 h-4" />
              হোম (৭টি সেবা)
            </button>

            <button
              onClick={() => setActiveView("vumi-hub")}
              className={`px-3 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeView === "vumi-hub"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200"
              }`}
            >
              <Landmark className="w-4 h-4" />
              ভূমি সেবা পোর্টাল
            </button>

            <button
              onClick={() => {
                setGeneratedTrackingId(null);
                setActiveView("apply");
              }}
              className={`px-3 py-2 rounded-xl transition ${
                activeView === "apply"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              অনলাইন আবেদন
            </button>

            <button
              onClick={() => setActiveView("track")}
              className={`px-3 py-2 rounded-xl transition flex items-center gap-1 ${
                activeView === "track"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Search className="w-4 h-4" />
              ট্র্যাকিং
            </button>

            <button
              onClick={() => setActiveView("dev-export")}
              className={`px-3 py-2 rounded-xl transition flex items-center gap-1 ${
                activeView === "dev-export"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200"
              }`}
            >
              <Download className="w-4 h-4" />
              প্রজেক্ট কোড ও ZIP বিকল্প
            </button>

            {currentUser ? (
              <div className="flex items-center gap-1.5 ml-1">
                <button
                  onClick={() => setActiveView("dashboard")}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-3.5 py-2 rounded-xl shadow-sm transition text-xs"
                >
                  📊 ড্যাশবোর্ড ({currentUser.role === "admin" ? "Admin" : "Agent"})
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition"
                  title="লগআউট"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setActiveView("auth")}
                className="ml-1 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-xl shadow-sm transition text-xs font-bold"
              >
                🔐 এজেন্ট / অ্যাডমিন
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* ==========================================
          VIEW 1: HOME PAGE (7 CARDS: 1 FEATURED LAND + 6 BASIC SERVICES)
      ========================================== */}
      {activeView === "home" && (
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-12 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-700/70 border border-emerald-500/50 text-emerald-100 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>প্রয়োজনীয় সেবা এখন এক জায়গায় • ৬টি মৌলিক সেবা + বিশেষায়িত ভূমি সেবা</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  মানুষের ৬টি মৌলিক সেবা ও ডিজিটাল ভূমি সেবার সমন্বিত প্ল্যাটফর্ম
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                  দৈনন্দিন জীবনের মৌলিক চাহিদা (খাদ্য, বস্ত্র, বাসস্থান, শিক্ষা, চিকিৎসা ও আইনি সেবা) এবং জমিজমা সংক্রান্ত সকল কাজ (ই-নামজারি, খতিয়ান, খাজনা ও ম্যাপ) এখন একটি ওয়েবসাইটেই। প্রথমে ভূমি সেবা ১০০% প্রস্তুত রাখা হয়েছে এবং বাকি ৬টি সেবা ধাপে ধাপে নিজেই কোড ডেভেলপ করে বড় করার সুযোগ রাখা হয়েছে।
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setActiveView("vumi-hub")}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2"
                  >
                    🏡 ভূমি সেবায় প্রবেশ করুন
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveView("dev-export")}
                    className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-3 rounded-xl transition flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-amber-300" />
                    GitHub + Supabase + Vercel সেটআপ ফাইল
                  </button>
                </div>
              </div>

              {/* Quick Live Tracking Box on Hero */}
              <div className="lg:col-span-5 bg-white text-slate-800 p-6 rounded-2xl shadow-2xl border border-emerald-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-extrabold text-emerald-950 flex items-center gap-2">
                    <Search className="w-5 h-5 text-emerald-600" />
                    তাৎক্ষণিক আবেদন ট্র্যাকিং
                  </h3>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                    Live Status
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  ভূমি সেবা বা যেকোনো মৌলিক সেবার ট্র্যাকিং আইডি (যেমন: <code className="font-bold text-emerald-700">ES-2026-1001</code>) অথবা মোবাইল নম্বর দিয়ে সর্বশেষ অবস্থা জানুন।
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleTrackSearch();
                    setActiveView("track");
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    value={trackInput}
                    onChange={(e) => setTrackInput(e.target.value)}
                    placeholder="ট্র্যাকিং আইডি (ES-2026-1001) বা মোবাইল নম্বর..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl shadow transition"
                  >
                    আবেদনের সর্বশেষ অবস্থা দেখুন
                  </button>
                </form>
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap justify-between gap-2 text-xs text-slate-500">
                  <button
                    onClick={() => {
                      setTrackInput("ES-2026-1001");
                      const demo = applications.find((a) => a.trackingId === "ES-2026-1001");
                      setTrackedResult(demo);
                      setActiveView("track");
                    }}
                    className="text-emerald-700 font-semibold hover:underline"
                  >
                    👉 ডেমো ট্র্যাকিং দেখুন (ES-2026-1001)
                  </button>
                  <span>✅ ২৪/৭ অনলাইন আপডেট</span>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              CARD 1 (SPECIAL): স্বতন্ত্র ভূমি সেবা কার্ড (Featured Card #1)
          ========================================== */}
          <section className="max-w-7xl mx-auto px-4 pt-12 pb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  বিশেষায়িত প্রধান কার্ড (কার্ড ১ / ৭)
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  🏡 বিশেষায়িত ভূমি সেবা পোর্টাল (পূর্ণাঙ্গ কার্যকরী)
                </h3>
              </div>
              <button
                onClick={() => setActiveView("vumi-hub")}
                className="hidden sm:flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-900"
              >
                সকল ভূমি সেবা দেখুন <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div
              onClick={() => setActiveView("vumi-hub")}
              className="cursor-pointer bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition border-2 border-amber-400/80 relative overflow-hidden group"
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full">
                      ★ {FEATURED_VUMI_SEBA.badge}
                    </span>
                    <span className="bg-emerald-700/80 text-emerald-100 text-xs px-3 py-1 rounded-full border border-emerald-500">
                      ৬টি ভূমি সেবা + ক্যালকুলেটর + ট্র্যাকিং
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl bg-white/10 p-3 rounded-2xl border border-white/20">
                      {FEATURED_VUMI_SEBA.icon}
                    </span>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-300 transition">
                        {FEATURED_VUMI_SEBA.title}
                      </h4>
                      <p className="text-emerald-200 text-sm font-medium">
                        {FEATURED_VUMI_SEBA.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-emerald-100 text-sm leading-relaxed max-w-3xl pt-1">
                    {FEATURED_VUMI_SEBA.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 pt-2">
                    {FEATURED_VUMI_SEBA.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      এই কার্ডে ক্লিক করলে যা পাবেন:
                    </p>
                    <ul className="text-xs text-emerald-50 space-y-1.5 mt-2">
                      <li>• ই-নামজারি, খতিয়ান ও খাজনা আবেদন</li>
                      <li>• মৌজা ম্যাপ, মিস কেস ও দলিল যাচাই</li>
                      <li>• জমি মাপার ক্যালকুলেটর (শতক/কাঠা)</li>
                      <li>• ভেরিফাইড এজেন্ট ও লাইভ ট্র্যাকিং</li>
                    </ul>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveView("vumi-hub");
                    }}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    ভূমি সেবা বিস্তারিত পেজে যান
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ==========================================
              CARDS 2 TO 7: মানুষের ৬টি মৌলিক সেবা (6 Basic Human Services)
          ========================================== */}
          <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                  নাগরিকের মৌলিক অধিকার (কার্ড ২ থেকে ৭)
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  মানুষের ৬টি মৌলিক সেবার কার্ডসমূহ
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  প্রতিটি কার্ডে ক্লিক করলে সেই সেবার প্রাথমিক সাব-সার্ভিস, অনলাইন আবেদন এবং **নিজে কোড ডেভেলপ করে পরিধি বাড়ানোর ব্লুপ্রিন্ট** পাওয়া যাবে।
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-600 shadow-sm">
                মোট কার্ড: <strong className="text-emerald-700">৭টি (১টি ভূমি সেবা + ৬টি মৌলিক সেবা)</strong>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SIX_BASIC_SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => {
                    setSelectedBasicService(service);
                    setActiveView("basic-detail");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl bg-slate-100 p-3 rounded-2xl border border-slate-200 group-hover:scale-105 transition">
                          {service.icon}
                        </span>
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase">
                            মৌলিক সেবা কার্ড #{service.number}
                          </span>
                          <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-5">
                      <p className="text-[11px] font-bold text-slate-500 mb-1.5">
                        অন্তর্ভুক্ত প্রাথমিক সেবাসমূহ:
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {service.subServices.slice(0, 3).map((sub, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                            <span className="truncate">{sub.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${service.lightBg}`}>
                      ⚙️ সম্প্রসারণযোগ্য মডিউল
                    </span>
                    <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition flex items-center gap-1">
                      বিস্তারিত ও ডেভেলপ <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How Developer Architecture Works Banner */}
          <section className="max-w-7xl mx-auto px-4 pb-14">
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-lg grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  ডেভেলপার ফ্রেন্ডলি আর্কিটেকচার (Modular Design)
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  তুমি নিজেই কীভাবে এক এক করে ৬টি মৌলিক সেবার পরিধি বাড়াবে?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  এই প্রজেক্টে <strong>ভূমি সেবা</strong> মডিউলটি পূর্ণাঙ্গ উদাহরণ হিসেবে তৈরি করে দেওয়া হয়েছে। একই ডাটাবেস (`Supabase`) এবং একই ট্র্যাকিং সিস্টেম ব্যবহার করে তুমি বাকি ৬টি মৌলিক সেবায় নতুন ফর্ম, ফিচার বা পেজ যোগ করতে পারবে। প্রজেক্টের সবগুলো ফাইল ডাউনলোড করতে নিচের বাটনে ক্লিক করো।
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                <button
                  onClick={() => setActiveView("dev-export")}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3 px-5 rounded-xl text-sm transition flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  প্রজেক্ট ফাইল ও গাইড ডাউনলোড করুন
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==========================================
          VIEW 2: FULL VUMI SEBA PORTAL (ভূমি সেবার বিস্তারিত পেজ)
      ========================================== */}
      {activeView === "vumi-hub" && (
        <main className="flex-1 max-w-7xl mx-auto px-4 py-8 space-y-12">
          {/* Top Breadcrumb & Banner */}
          <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <button
                  onClick={() => setActiveView("home")}
                  className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full mb-3 inline-flex items-center gap-1"
                >
                  ← হোম পেজে ফিরে যান (৭টি সেবা)
                </button>
                <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2">
                  🏡 ই-ভূমি সেবা ও ডিজিটাল সহায়তা কেন্দ্র
                </h2>
                <p className="text-emerald-100 text-sm mt-1 max-w-2xl">
                  খতিয়ান উত্তোলন, ই-নামজারি আবেদন, ভূমি উন্নয়ন কর (খাজনা), মৌজা ম্যাপ, জমি মাপার ক্যালকুলেটর এবং লাইভ আবেদন ট্র্যাকিং—সবকিছু এক পেজে।
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveView("track")}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow"
                >
                  🔍 ভূমি আবেদন ট্র্যাকিং
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("land-calc-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white/15 hover:bg-white/25 text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm"
                >
                  📐 ভূমি ক্যালকুলেটর
                </button>
              </div>
            </div>
          </div>

          {/* 6 Land Sub-Services Grid */}
          <section>
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-slate-900">
                ভূমি সংক্রান্ত সকল অনলাইন সেবাসমূহ (৬টি প্রধান সেবা)
              </h3>
              <p className="text-sm text-slate-600">
                আপনার প্রয়োজনীয় ভূমি সেবাটি নির্বাচন করে অনলাইনে আবেদন সম্পন্ন করুন। সরকারি ফি ও প্রসেসিং ফি স্পষ্টভাবে দেওয়া আছে।
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LAND_SERVICES_LIST.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-200 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                        {srv.icon}
                      </span>
                      <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        ⏱ সময়: {srv.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 mb-2">
                      {srv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-bold text-slate-700 mb-1">প্রয়োজনীয় কাগজপত্র:</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {srv.docs.map((d, i) => (
                          <li key={i}>✔ {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="bg-slate-50 rounded-xl p-3 mb-4 text-xs flex justify-between items-center border border-slate-200">
                      <div>
                        <span className="text-slate-500 block">সরকারি ফি</span>
                        <span className="font-bold text-slate-800">৳ {srv.govtFee}</span>
                      </div>
                      <div className="h-6 w-px bg-slate-300"></div>
                      <div>
                        <span className="text-slate-500 block">সেবা ফি</span>
                        <span className="font-bold text-emerald-700">৳ {srv.serviceFee}</span>
                      </div>
                      <div className="h-6 w-px bg-slate-300"></div>
                      <div>
                        <span className="text-slate-500 block">মোট খরচ</span>
                        <span className="font-extrabold text-slate-900">
                          ৳ {srv.govtFee + srv.serviceFee}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        startApplication(
                          "ভূমি সেবা",
                          srv.title,
                          srv.govtFee + srv.serviceFee
                        )
                      }
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-xl transition"
                    >
                      এই সেবার আবেদন করুন →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Land Measurement Calculator */}
          <section
            id="land-calc-section"
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200"
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-3">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  ডিজিটাল ভূমি ক্যালকুলেটর
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  📐 জমির পরিমাপ ও শতক / কাঠা / বিঘা হিসাব করুন
                </h3>
                <p className="text-sm text-slate-600">
                  আপনার জমির গড় দৈর্ঘ্য এবং গড় প্রস্থ (ফুট হিসেবে) নিচের ঘরে লিখলে স্বয়ংক্রিয়ভাবে মোট বর্গফুট, শতক (ডিসিমাল), কাঠা ও বিঘার নিখুঁত হিসাব দেখতে পাবেন।
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      জমির দৈর্ঘ্য (ফুট)
                    </label>
                    <input
                      type="number"
                      value={calcLength}
                      onChange={(e) => setCalcLength(e.target.value)}
                      placeholder="যেমন: ১০০"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      জমির প্রস্থ (ফুট)
                    </label>
                    <input
                      type="number"
                      value={calcWidth}
                      onChange={(e) => setCalcWidth(e.target.value)}
                      placeholder="যেমন: ৪৩.৫৬"
                      className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400">
                  সূত্র: ১ শতক = ৪৩৫.৬ বর্গফুট | ১ কাঠা = ৭২০ বর্গফুট | ১ বিঘা = ১৪,৪০০ বর্গফুট
                </p>
              </div>

              <div className="md:col-span-6 bg-emerald-950 text-white p-6 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-emerald-900/90 p-4 rounded-xl border border-emerald-700">
                  <span className="text-xs text-emerald-200 block">মোট বর্গফুট</span>
                  <strong className="text-xl sm:text-2xl font-black text-white mt-1 block">
                    {areaSqFt.toFixed(1)}
                  </strong>
                </div>
                <div className="bg-emerald-900/90 p-4 rounded-xl border border-emerald-700">
                  <span className="text-xs text-emerald-200 block">শতক / ডিসিমাল</span>
                  <strong className="text-xl sm:text-2xl font-black text-amber-400 mt-1 block">
                    {shotok}
                  </strong>
                </div>
                <div className="bg-emerald-900/90 p-4 rounded-xl border border-emerald-700">
                  <span className="text-xs text-emerald-200 block">মোট কাঠা</span>
                  <strong className="text-xl sm:text-2xl font-black text-emerald-300 mt-1 block">
                    {katha}
                  </strong>
                </div>
                <div className="bg-emerald-900/90 p-4 rounded-xl border border-emerald-700">
                  <span className="text-xs text-emerald-200 block">মোট বিঘা</span>
                  <strong className="text-xl sm:text-2xl font-black text-cyan-300 mt-1 block">
                    {bigha}
                  </strong>
                </div>
              </div>
            </div>
          </section>

          {/* Verified Land Agents Directory */}
          <section className="space-y-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  👨‍💼 ভেরিফাইড ভূমি সেবা সহায়তাকারী (Registered Agents)
                </h3>
                <p className="text-xs text-slate-500">
                  আপনার এলাকার নিবন্ধিত প্রতিনিধির মাধ্যমে কাগজপত্র যাচাই ও দ্রুত সেবা গ্রহণ করুন
                </p>
              </div>
              <select
                value={agentDivisionFilter}
                onChange={(e) => setAgentDivisionFilter(e.target.value)}
                className="border border-slate-300 rounded-xl px-4 py-2 text-xs font-bold bg-white"
              >
                <option value="সকল">সকল বিভাগ</option>
                <option value="রংপুর">রংপুর বিভাগ</option>
                <option value="ঢাকা">ঢাকা বিভাগ</option>
                <option value="চট্টগ্রাম">চট্টগ্রাম বিভাগ</option>
                <option value="রাজশাহী">রাজশাহী বিভাগ</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {agents
                .filter(
                  (ag) =>
                    ag.approved &&
                    (agentDivisionFilter === "সকল" || ag.division === agentDivisionFilter)
                )
                .map((ag) => (
                  <div
                    key={ag.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                        {ag.role === "admin" ? "ভেরিফাইড অ্যাডমিন" : "রেজিস্টার্ড এজেন্ট"}
                      </span>
                      <h4 className="font-bold text-slate-900 mt-1.5">{ag.name}</h4>
                      <p className="text-xs text-slate-500">
                        📍 {ag.upazila}, {ag.district} ({ag.division})
                      </p>
                      <p className="text-xs font-bold text-emerald-700 mt-1">
                        📞 {ag.phone}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        startApplication("ভূমি সেবা", LAND_SERVICES_LIST[0].title, 1500)
                      }
                      className="bg-emerald-50 hover:bg-emerald-700 hover:text-white text-emerald-800 text-xs font-bold px-3.5 py-2 rounded-xl border border-emerald-200 transition"
                    >
                      আবেদন দিন
                    </button>
                  </div>
                ))}
            </div>
          </section>
        </main>
      )}

      {/* ==========================================
          VIEW 3: 6 BASIC SERVICES DETAIL & EXPANSION BLUEPRINT PAGE
      ========================================== */}
      {activeView === "basic-detail" && selectedBasicService && (
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 space-y-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveView("home")}
              className="text-xs font-bold text-emerald-700 hover:underline mb-4 inline-flex items-center gap-1"
            >
              ← হোম পেজে ফিরে যান (৭টি সেবা কার্ড)
            </button>

            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  {selectedBasicService.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase bg-indigo-100 text-indigo-800 px-3 py-0.5 rounded-full">
                      মৌলিক সেবা কার্ড #{selectedBasicService.number}
                    </span>
                    <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-0.5 rounded-full">
                      ধাপে ধাপে সম্প্রসারণযোগ্য
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {selectedBasicService.title}
                  </h2>
                  <p className="text-sm text-slate-500">{selectedBasicService.subtitle}</p>
                </div>
              </div>

              <button
                onClick={() =>
                  startApplication(
                    selectedBasicService.title,
                    selectedBasicService.subServices[0].name,
                    200
                  )
                }
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-3 rounded-xl shadow transition text-sm"
              >
                এই বিভাগে অনলাইন আবেদন করুন →
              </button>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-4">
              {selectedBasicService.desc}
            </p>

            {/* Sub-services inside this Basic Service */}
            <div className="mt-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                📋 {selectedBasicService.title}-এর বর্তমান প্রাথমিক সেবাসমূহ:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedBasicService.subServices.map((sub, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-3"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{sub.name}</h4>
                      <div className="flex gap-4 text-xs text-slate-500 mt-1">
                        <span>💰 ফি: {sub.fee}</span>
                        <span>⏱ সময়: {sub.time}</span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        startApplication(selectedBasicService.title, sub.name, 200)
                      }
                      className="self-start text-xs font-bold bg-white hover:bg-emerald-700 hover:text-white text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-lg transition"
                    >
                      আবেদন ফর্ম খুলুন →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Developer Self-Expansion Guide for this specific card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>ডেভেলপার এক্সপানশন গাইড (তুমি নিজে যেভাবে এই কার্ডের কোড বাড়াবে)</span>
            </div>
            <h3 className="text-xl font-extrabold">
              🛠️ "{selectedBasicService.title}" মডিউলটি যেভাবে নিজে ডেভেলপ করবে:
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              এই কার্ডটি ইতিমধ্যে হোম পেজ, অনলাইন আবেদন ফর্ম এবং লাইভ ট্র্যাকিংয়ের সাথে যুক্ত আছে। তুমি যখন ভবিষ্যতে এই সেবাটির জন্য আলাদা ফিচার যোগ করতে চাইবে, তখন নিচের কাঠামো অনুসরণ করবে:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                <span className="text-slate-400 block mb-1">১. প্রস্তাবিত ফাইল পাথ:</span>
                <code className="text-amber-300 font-bold">{selectedBasicService.devGuide.filePath}</code>
              </div>
              <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                <span className="text-slate-400 block mb-1">২. Supabase ডাটাবেস টেবিল:</span>
                <code className="text-emerald-300 font-bold">{selectedBasicService.devGuide.tableName}</code>
              </div>
              <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                <span className="text-slate-400 block mb-1">৩. পরবর্তী ডেভেলপমেন্ট ধাপ:</span>
                <span className="text-slate-200">{selectedBasicService.devGuide.nextSteps}</span>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ==========================================
          VIEW 4: UNIFIED ONLINE APPLICATION FORM (ভূমি + ৬টি মৌলিক সেবা)
      ========================================== */}
      {activeView === "apply" && (
        <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
          {generatedTrackingId ? (
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-emerald-500 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-3xl">
                🎉
              </div>
              <h3 className="text-2xl font-black text-emerald-950">
                আপনার আবেদনটি সফলভাবে জমা হয়েছে!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                আপনার আবেদনের সর্বশেষ অবস্থা যেকোনো সময় ট্র্যাক করতে নিচের **Tracking ID** সংরক্ষণ করুন:
              </p>
              <div className="bg-emerald-50 border-2 border-dashed border-emerald-600 py-4 px-8 rounded-2xl inline-block">
                <span className="text-xs text-slate-500 block">আপনার ট্র্যাকিং আইডি</span>
                <strong className="text-3xl font-black text-emerald-900 tracking-wider">
                  {generatedTrackingId}
                </strong>
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <button
                  onClick={() => {
                    setTrackInput(generatedTrackingId);
                    const found = applications.find(
                      (a) => a.trackingId === generatedTrackingId
                    );
                    setTrackedResult(found);
                    setActiveView("track");
                  }}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl shadow transition"
                >
                  🔍 এখনই লাইভ ট্র্যাক করুন
                </button>
                <button
                  onClick={() => setGeneratedTrackingId(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl transition"
                >
                  নতুন আরেকটি আবেদন করুন
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleApplicationSubmit}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  E-Solution অনলাইন আবেদন পোর্টাল
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  📝 নাগরিক ও ভূমি সেবা অনলাইন আবেদন ফর্ম
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  সঠিক তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন। সাবমিট করার সাথে সাথে একটি ইউনিক ট্র্যাকিং আইডি তৈরি হবে।
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    সেবার মূল বিভাগ (৭টি কার্ড থেকে) *
                  </label>
                  <select
                    value={applyCategory}
                    onChange={(e) => {
                      const cat = e.target.value;
                      setApplyCategory(cat);
                      if (cat === "ভূমি সেবা") {
                        setApplyServiceTitle(LAND_SERVICES_LIST[0].title);
                        setApplyFee(1500);
                      } else {
                        const foundBasic = SIX_BASIC_SERVICES.find((b) => b.title === cat);
                        if (foundBasic) {
                          setApplyServiceTitle(foundBasic.subServices[0].name);
                          setApplyFee(200);
                        }
                      }
                    }}
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold bg-slate-50"
                  >
                    <option value="ভূমি সেবা">🏡 ভূমি সেবা (Land Services)</option>
                    {SIX_BASIC_SERVICES.map((b) => (
                      <option key={b.id} value={b.title}>
                        {b.icon} {b.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    নির্দিষ্ট সেবার নাম *
                  </label>
                  <input
                    type="text"
                    required
                    value={applyServiceTitle}
                    onChange={(e) => setApplyServiceTitle(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    আবেদনকারীর পূর্ণ নাম *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.applicantName}
                    onChange={(e) =>
                      setFormData({ ...formData, applicantName: e.target.value })
                    }
                    placeholder="এনআইডি অনুযায়ী নাম"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    মোবাইল নম্বর (ট্র্যাকিংয়ের জন্য) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="017XXXXXXXX"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    জাতীয় পরিচয়পত্র (NID) নম্বর *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nid}
                    onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                    placeholder="১০ বা ১৭ ডিজিট"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    বিভাগ *
                  </label>
                  <select
                    value={formData.division}
                    onChange={(e) =>
                      setFormData({ ...formData, division: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm bg-white"
                  >
                    <option value="রংপুর">রংপুর</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="বরিশাল">বরিশাল</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    জেলা *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                    placeholder="যেমন: নীলফামারী"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    উপজেলা / থানা *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.upazila}
                    onChange={(e) =>
                      setFormData({ ...formData, upazila: e.target.value })
                    }
                    placeholder="যেমন: সদর"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    মৌজার নাম / ওয়ার্ড বা বিবরণ *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.mouza}
                    onChange={(e) => setFormData({ ...formData, mouza: e.target.value })}
                    placeholder="যেমন: কুন্দপুকুর, জে.এল-৪৫"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    খতিয়ান নম্বর (ভূমি সেবার ক্ষেত্রে)
                  </label>
                  <input
                    type="text"
                    value={formData.khatianNo}
                    onChange={(e) =>
                      setFormData({ ...formData, khatianNo: e.target.value })
                    }
                    placeholder="যেমন: ৪৫২"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    দাগ নম্বর / অতিরিক্ত তথ্য
                  </label>
                  <input
                    type="text"
                    value={formData.dagNo}
                    onChange={(e) => setFormData({ ...formData, dagNo: e.target.value })}
                    placeholder="যেমন: ১২০৪"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-wrap justify-between items-center gap-4">
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-emerald-950 block">
                    নির্বাচিত সেবা: {applyServiceTitle} ({applyCategory})
                  </span>
                  <span>আনুমানিক মোট প্রদেয় ফি: <strong>৳ {applyFee}</strong></span>
                </div>
                <button
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl shadow transition"
                >
                  ✅ আবেদন সাবমিট করুন ও ট্র্যাকিং আইডি নিন
                </button>
              </div>
            </form>
          )}
        </main>
      )}

      {/* ==========================================
          VIEW 5: LIVE APPLICATION TRACKING PAGE
      ========================================== */}
      {activeView === "track" && (
        <main className="flex-1 max-w-4xl mx-auto px-4 py-10 w-full space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-extrabold text-slate-900">
              🛰️ লাইভ আবেদন ট্র্যাকিং (Live Application Status)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              আপনার ট্র্যাকিং আইডি (যেমন: <code className="font-bold text-emerald-700">ES-2026-1001</code>) অথবা মোবাইল নম্বর দিয়ে সার্চ করুন।
            </p>

            <form onSubmit={handleTrackSearch} className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={trackInput}
                onChange={(e) => setTrackInput(e.target.value)}
                placeholder="ট্র্যাকিং আইডি (ES-2026-XXXX) বা মোবাইল নম্বর লিখুন..."
                className="flex-1 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition"
              >
                খুঁজুন
              </button>
            </form>

            {trackError && (
              <div className="mt-4 bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-xs sm:text-sm font-medium">
                {trackError}
              </div>
            )}
          </div>

          {trackedResult && (
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-emerald-200 space-y-6">
              <div className="flex flex-wrap justify-between items-start border-b border-slate-100 pb-4 gap-3">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {trackedResult.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    ট্র্যাকিং আইডি: {trackedResult.trackingId}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    {trackedResult.serviceTitle}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3.5 py-1 rounded-full text-xs font-extrabold ${
                      trackedResult.status === "Completed"
                        ? "bg-emerald-100 text-emerald-800"
                        : trackedResult.status === "Rejected"
                        ? "bg-rose-100 text-rose-800"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    বর্তমান অবস্থা: {trackedResult.status}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">তারিখ: {trackedResult.date}</p>
                </div>
              </div>

              {/* 4-Step Visual Progress */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold">
                {[
                  { key: "Pending", label: "১. আবেদন গৃহীত" },
                  { key: "Verified", label: "২. কাগজপত্র যাচাইকৃত" },
                  { key: "Processing", label: "৩. অফিসে প্রক্রিয়াধীন" },
                  { key: "Completed", label: "৪. সেবা সম্পন্ন" }
                ].map((st, idx) => {
                  const order = ["Pending", "Verified", "Processing", "Completed"];
                  const curIdx = order.indexOf(trackedResult.status);
                  const active = curIdx >= idx;
                  return (
                    <div
                      key={st.key}
                      className={`p-3 rounded-xl border ${
                        active
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                          : "bg-slate-50 text-slate-400 border-slate-200"
                      }`}
                    >
                      {st.label}
                    </div>
                  );
                })}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div><strong>আবেদনকারীর নাম:</strong> {trackedResult.applicantName}</div>
                <div><strong>মোবাইল নম্বর:</strong> {trackedResult.mobile}</div>
                <div><strong>ঠিকানা:</strong> {trackedResult.upazila}, {trackedResult.district} ({trackedResult.division})</div>
                <div><strong>মৌজা / বিবরণ:</strong> {trackedResult.mouza}</div>
                <div><strong>খতিয়ান ও দাগ:</strong> খতিয়ান: {trackedResult.khatianNo}, দাগ: {trackedResult.dagNo}</div>
                <div><strong>দায়িত্বপ্রাপ্ত প্রতিনিধি:</strong> {trackedResult.assignedAgent}</div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl text-xs sm:text-sm">
                <strong className="text-amber-950 block mb-1">
                  📌 সর্বশেষ অফিসিয়াল নোট (Admin/Agent Update):
                </strong>
                <p className="text-slate-700">{trackedResult.adminNote}</p>
              </div>
            </div>
          )}
        </main>
      )}

      {/* ==========================================
          VIEW 6: GITHUB + SUPABASE + VERCEL EXPORT & AUTO-SETUP CENTER
          (Solves the exact challenge where the previous AI failed to provide downloadable files)
      ========================================== */}
      {activeView === "dev-export" && (
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 space-y-8">
          <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-500/30">
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full">
              ⚡ চ্যালেঞ্জ সম্পন্ন: ডাউনলোডযোগ্য প্রজেক্ট ফাইল ও অটো-ডিপ্লয়মেন্ট প্যাক
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3">
              📦 E-Solution: GitHub + Supabase + Vercel অটোমেটিক সেটআপ ও ফাইল ডাউনলোড
            </h2>
            <p className="text-slate-300 text-sm mt-2 max-w-3xl leading-relaxed">
              আগের চ্যাটে যে ফাইলগুলো ডাউনলোড করা যায়নি, সেগুলোসহ সম্পূর্ণ প্রজেক্টের প্রত্যেকটি কোর ফাইল নিচে প্রস্তুত করা আছে। এখান থেকে এক ক্লিকেই তোমার কম্পিউটারে ডাউনলোড বা কপি করে নিতে পারবে।
            </p>

            {/* Direct One-Click File Download Buttons */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              <button
                onClick={() => downloadFile("supabase_schema.sql", SUPABASE_SQL_SCHEMA)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-3.5 rounded-2xl shadow flex items-center justify-center gap-2 text-xs transition"
              >
                <Download className="w-4 h-4" />
                ১. supabase_schema.sql ডাউনলোড
              </button>
              <button
                onClick={() => downloadFile("supabaseClient.js", SUPABASE_CLIENT_CODE)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold p-3.5 rounded-2xl shadow flex items-center justify-center gap-2 text-xs transition"
              >
                <Download className="w-4 h-4" />
                ২. supabaseClient.js ডাউনলোড
              </button>
              <button
                onClick={() => downloadFile("package.json", PACKAGE_JSON_CODE)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold p-3.5 rounded-2xl shadow flex items-center justify-center gap-2 text-xs transition"
              >
                <Download className="w-4 h-4" />
                ৩. package.json ডাউনলোড
              </button>
              <button
                onClick={() =>
                  downloadFile(
                    ".env.example",
                    "NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url\nNEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key\n"
                  )
                }
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold p-3.5 rounded-2xl shadow flex items-center justify-center gap-2 text-xs transition"
              >
                <Download className="w-4 h-4" />
                ৪. .env.example ডাউনলোড
              </button>
            </div>
          </div>

          {/* Step-by-Step Guide in Bengali */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
                ১
              </div>
              <h3 className="font-extrabold text-slate-900">ধাপ ১: Supabase ডাটাবেস সেটআপ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ১. <code className="font-bold">supabase.com</code>-এ গিয়ে একটি নতুন প্রজেক্ট খুলুন।<br />
                ২. বাম পাশের মেনু থেকে <strong>SQL Editor</strong>-এ যান এবং নিচের SQL কোডটি পেস্ট করে <strong>Run</strong> চাপুন।<br />
                ৩. এরপর Project Settings → API থেকে <code className="font-bold">Project URL</code> এবং <code className="font-bold">anon public key</code> কপি করুন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black">
                ২
              </div>
              <h3 className="font-extrabold text-slate-900">ধাপ ২: GitHub-এ কোড আপলোড</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ১. ডানপাশের কোড এডিটর থেকে সম্পূর্ণ কোডটি কপি করে আপনার প্রজেক্টের <code className="font-bold">app/page.jsx</code> বা <code className="font-bold">src/App.jsx</code> ফাইলে পেস্ট করুন।<br />
                ২. টার্মিনালে চালান:<br />
                <code className="bg-slate-100 px-1.5 py-0.5 rounded block mt-1 text-[11px]">
                  git add . && git commit -m "E-Solution 7 cards" && git push
                </code>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black">
                ৩
              </div>
              <h3 className="font-extrabold text-slate-900">ধাপ ৩: Vercel অটোমেটিক লাইভ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ১. <code className="font-bold">vercel.com</code>-এ গিয়ে আপনার GitHub রিপোজিটরিটি <strong>Import</strong> করুন।<br />
                ২. Environment Variables-এ Supabase URL ও Key দিয়ে <strong>Deploy</strong> চাপুন।<br />
                ৩. এরপর থেকে আপনি যখনই নতুন কোনো মৌলিক সেবার কোড লিখে GitHub-এ Push করবেন, Vercel তা <strong>অটোমেটিক লাইভ</strong> করে দেবে!
              </p>
            </div>
          </div>

          {/* Code Blocks with Copy Button */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-slate-100 rounded-2xl overflow-hidden border border-slate-800">
              <div className="bg-slate-800 px-4 py-3 flex justify-between items-center">
                <span className="text-xs font-bold text-emerald-400">
                  🗄️ ফাইল ১: supabase_schema.sql (Supabase SQL Editor-এ রান করুন)
                </span>
                <button
                  onClick={() => copyToClipboard(SUPABASE_SQL_SCHEMA, "sql")}
                  className="bg-slate-700 hover:bg-slate-600 text-xs px-3 py-1 rounded-lg flex items-center gap-1"
                >
                  {copiedKey === "sql" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedKey === "sql" ? "কপি হয়েছে!" : "কোড কপি করুন"}
                </button>
              </div>
              <pre className="p-4 text-xs overflow-x-auto text-slate-300 leading-relaxed">
                {SUPABASE_SQL_SCHEMA}
              </pre>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-2xl overflow-hidden border border-slate-800">
              <div className="bg-slate-800 px-4 py-3 flex justify-between items-center">
                <span className="text-xs font-bold text-amber-400">
                  🔌 ফাইল ২: src/lib/supabaseClient.js (Supabase সংযোগ ফাইল)
                </span>
                <button
                  onClick={() => copyToClipboard(SUPABASE_CLIENT_CODE, "client")}
                  className="bg-slate-700 hover:bg-slate-600 text-xs px-3 py-1 rounded-lg flex items-center gap-1"
                >
                  {copiedKey === "client" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedKey === "client" ? "কপি হয়েছে!" : "কোড কপি করুন"}
                </button>
              </div>
              <pre className="p-4 text-xs overflow-x-auto text-slate-300 leading-relaxed">
                {SUPABASE_CLIENT_CODE}
              </pre>
            </div>
          </div>
        </main>
      )}

      {/* ==========================================
          VIEW 7: AGENT / ADMIN AUTH & PROTECTED DASHBOARD
      ========================================== */}
      {activeView === "auth" && (
        <main className="flex-1 max-w-md mx-auto px-4 py-12 w-full">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex border-b border-slate-200 mb-6">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setAuthMessage("");
                }}
                className={`flex-1 pb-3 text-sm font-extrabold border-b-2 ${
                  authMode === "login"
                    ? "border-emerald-700 text-emerald-800"
                    : "border-transparent text-slate-400"
                }`}
              >
                এজেন্ট / অ্যাডমিন লগইন
              </button>
              <button
                onClick={() => {
                  setAuthMode("register");
                  setAuthMessage("");
                }}
                className={`flex-1 pb-3 text-sm font-extrabold border-b-2 ${
                  authMode === "register"
                    ? "border-emerald-700 text-emerald-800"
                    : "border-transparent text-slate-400"
                }`}
              >
                নতুন এজেন্ট নিবন্ধন
              </button>
            </div>

            {authMessage && (
              <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-xl text-xs font-semibold">
                {authMessage}
              </div>
            )}

            {authMode === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-xs text-emerald-900">
                  <strong>ডেমো অ্যাডমিন লগইন:</strong><br />
                  মোবাইল: <code className="font-bold">01700000000</code> | পাসওয়ার্ড: <code className="font-bold">admin</code>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    মোবাইল নম্বর
                  </label>
                  <input
                    type="text"
                    required
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value)}
                    placeholder="01700000000"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    পাসওয়ার্ড
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    placeholder="••••••"
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl shadow transition"
                >
                  ড্যাশবোর্ডে প্রবেশ করুন
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="আপনার পূর্ণ নাম"
                  value={regData.name}
                  onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                />
                <input
                  type="text"
                  required
                  placeholder="মোবাইল নম্বর"
                  value={regData.phone}
                  onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                />
                <input
                  type="password"
                  required
                  placeholder="পাসওয়ার্ড"
                  value={regData.password}
                  onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
                />
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={regData.role}
                    onChange={(e) => setRegData({ ...regData, role: e.target.value })}
                    className="border border-slate-300 rounded-xl px-3 py-2 text-sm bg-white"
                  >
                    <option value="agent">এজেন্ট (Agent)</option>
                    <option value="admin">অ্যাডমিন (Admin)</option>
                  </select>
                  <select
                    value={regData.division}
                    onChange={(e) => setRegData({ ...regData, division: e.target.value })}
                    className="border border-slate-300 rounded-xl px-3 py-2 text-sm bg-white"
                  >
                    <option value="রংপুর">রংপুর</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="জেলা"
                    value={regData.district}
                    onChange={(e) => setRegData({ ...regData, district: e.target.value })}
                    className="border border-slate-300 rounded-xl px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    required
                    placeholder="উপজেলা"
                    value={regData.upazila}
                    onChange={(e) => setRegData({ ...regData, upazila: e.target.value })}
                    className="border border-slate-300 rounded-xl px-3 py-2 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl shadow transition"
                >
                  রেজিস্টার ও ড্যাশবোর্ডে প্রবেশ করুন
                </button>
              </form>
            )}
          </div>
        </main>
      )}

      {activeView === "dashboard" && (
        <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full space-y-6">
          {!currentUser ? (
            <div className="bg-rose-50 border border-rose-200 p-8 rounded-2xl text-center">
              <h3 className="text-lg font-bold text-rose-800">প্রবেশাধিকার সংরক্ষিত!</h3>
              <button
                onClick={() => setActiveView("auth")}
                className="mt-3 bg-emerald-700 text-white px-5 py-2 rounded-xl text-sm font-bold"
              >
                লগইন পেজে যান
              </button>
            </div>
          ) : (
            <>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap justify-between items-center gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    {currentUser.role === "admin" ? "কেন্দ্রীয় অ্যাডমিন ড্যাশবোর্ড" : "এজেন্ট ড্যাশবোর্ড"}
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">
                    স্বাগতম, {currentUser.name}
                  </h2>
                  <p className="text-xs text-slate-500">
                    ভূমি সেবা ও ৬টি মৌলিক সেবার সকল আবেদনের স্ট্যাটাস ও অফিসিয়াল নোট এখান থেকে পরিবর্তন করলে গ্রাহকের ট্র্যাকিং পেজে সাথে সাথে আপডেট হয়ে যাবে।
                  </p>
                </div>
                <div className="flex gap-3 text-center">
                  <div className="bg-slate-100 px-4 py-2.5 rounded-xl">
                    <span className="text-xs text-slate-500 block">মোট আবেদন</span>
                    <strong className="text-xl font-black">{applications.length}</strong>
                  </div>
                  <div className="bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200">
                    <span className="text-xs text-amber-800 block">প্রক্রিয়াধীন</span>
                    <strong className="text-xl font-black text-amber-800">
                      {applications.filter((a) => a.status !== "Completed" && a.status !== "Rejected").length}
                    </strong>
                  </div>
                  <div className="bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200">
                    <span className="text-xs text-emerald-800 block">সম্পন্ন</span>
                    <strong className="text-xl font-black text-emerald-800">
                      {applications.filter((a) => a.status === "Completed").length}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 uppercase text-xs">
                      <th className="p-3.5 border-b">ট্র্যাকিং আইডি</th>
                      <th className="p-3.5 border-b">বিভাগ ও সেবা</th>
                      <th className="p-3.5 border-b">আবেদনকারী</th>
                      <th className="p-3.5 border-b">স্ট্যাটাস পরিবর্তন</th>
                      <th className="p-3.5 border-b">অফিসিয়াল নোট (লাইভ আপডেট)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app.trackingId} className="border-b hover:bg-slate-50">
                        <td className="p-3.5 font-black text-emerald-800">
                          {app.trackingId}
                          <span className="block text-[11px] font-normal text-slate-400">
                            {app.date}
                          </span>
                        </td>
                        <td className="p-3.5">
                          <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded">
                            {app.category}
                          </span>
                          <div className="font-bold text-slate-900 mt-1">{app.serviceTitle}</div>
                          <div className="text-xs text-slate-500">
                            {app.mouza} | খতিয়ান: {app.khatianNo}
                          </div>
                        </td>
                        <td className="p-3.5">
                          <div className="font-bold">{app.applicantName}</div>
                          <div className="text-xs text-slate-500">📞 {app.mobile}</div>
                        </td>
                        <td className="p-3.5">
                          <select
                            value={app.status}
                            onChange={(e) => updateAppStatus(app.trackingId, e.target.value)}
                            className="border border-slate-300 rounded-lg px-2.5 py-1.5 bg-white font-bold text-xs"
                          >
                            <option value="Pending">Pending (গৃহীত)</option>
                            <option value="Verified">Verified (যাচাইকৃত)</option>
                            <option value="Processing">Processing (চলমান)</option>
                            <option value="Completed">Completed (সম্পন্ন)</option>
                            <option value="Rejected">Rejected (বাতিল)</option>
                          </select>
                        </td>
                        <td className="p-3.5">
                          <input
                            type="text"
                            value={app.adminNote}
                            onChange={(e) => updateAppNote(app.trackingId, e.target.value)}
                            className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </main>
      )}

      {/* ==========================================
          FOOTER
      ========================================== */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-4 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <strong className="text-white text-sm">E-Solution (সহজ সমাধান, সবার জন্য)</strong>
            <p className="mt-0.5">
              মানুষের ৬টি মৌলিক সেবা এবং সমন্বিত ডিজিটাল ভূমি সেবা প্ল্যাটফর্ম • GitHub + Supabase + Vercel Ready
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://mutation.land.gov.bd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              ই-নামজারি পোর্টাল
            </a>
            <a
              href="https://dlrms.land.gov.bd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              অনলাইন খতিয়ান ও ম্যাপ
            </a>
            <a
              href="https://ldtax.gov.bd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              ভূমি উন্নয়ন কর
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}