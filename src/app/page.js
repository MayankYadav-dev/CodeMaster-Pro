'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Courses from '@/components/Courses'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  const router = useRouter();

  const handleViewAllCourses = () => {
    router.push('/allcourses');
  };
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Courses onViewAllCourses={handleViewAllCourses} />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}