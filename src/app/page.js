import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Courses from '@/components/Courses'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}