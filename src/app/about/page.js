'use client';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const stats = [
    { number: '50,000+', label: 'Students Enrolled' },
    { number: '200+', label: 'Expert Instructors' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission Driven',
      description: 'We believe in making quality education accessible to everyone, regardless of their background or location.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Building a supportive community where learners can grow together and support each other\'s journey.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in our curriculum, instructors, and learning experience.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly evolving our teaching methods and technology to provide the best learning experience.'
    }
  ];

  return (
    <section>
    <Navbar />
    <div className="pt-16 min-h-screen bg-[#F1EFEC] dark:bg-[#030303] transition-colors duration-300">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-6">
              About CodeMaster Pro
            </h1>
            <p className="text-xl ttext-[#123458]/80 dark:text-[#D4C9BE]/80 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform lives through quality coding education. 
              Since 2020, we've been helping thousands of students launch successful careers in tech.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#123458]/70 dark:text-[#D4C9BE]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-[#123458]/80 dark:text-[#D4C9BE]/80 leading-relaxed">
              <p>
                CodeMaster Pro was founded with a simple yet powerful vision: to bridge the gap between 
                traditional education and the rapidly evolving tech industry. We saw too many talented 
                individuals struggling to break into tech due to lack of practical, industry-relevant training.
              </p>
              <p>
                Our founders, seasoned software engineers and educators, combined their decades of experience 
                to create a learning platform that doesn't just teach code—it builds careers. We focus on 
                real-world projects, industry best practices, and the soft skills that make great developers.
              </p>
              <p>
                Today, we're proud to have helped thousands of students transition into fulfilling tech careers, 
                working at companies ranging from innovative startups to Fortune 500 corporations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white dark:bg-[#0F1F36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[#123458]/70 dark:text-[#D4C9BE]/70 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the learning experience we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#F1EFEC] dark:bg-[#030303] rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#123458] dark:text-[#D4C9BE] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#123458]/70 dark:text-[#D4C9BE]/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#123458]/70 dark:text-[#D4C9BE]/70 mb-8">
            Join thousands of successful graduates who have transformed their careers with CodeMaster Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#123458] dark:bg-[#D4C9BE] text-white dark:text-[#123458] rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              View All Courses
            </button>
            <button className="px-8 py-3 border-2 border-[#123458] dark:border-[#D4C9BE] text-[#123458] dark:text-[#D4C9BE] rounded-full font-semibold hover:bg-[#123458] hover:text-white dark:hover:bg-[#D4C9BE] dark:hover:text-[#030303] transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </section>
  );
}