'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer at Google',
      image: '👩‍💻',
      content:
        'CodeMaster Pro transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at Google within 6 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer at Microsoft',
      image: '👨‍💻',
      content:
        'The quality of instruction is unmatched. I went from zero programming knowledge to building full-stack applications. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Netflix',
      image: '👩‍🔬',
      content:
        'The Python for Data Science course was incredible. The practical approach and real-world projects gave me the confidence to switch careers.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer at Uber',
      image: '👨‍🚀',
      content:
        'Learning React Native here was the best decision I made. The instructors are industry experts who really care about student success.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id='testimonials' className="py-24 bg-[#F1EFEC] dark:bg-[#030303] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-4">
            What Our
            <span className="block text-[#123458]/70 dark:text-[#D4C9BE]/70">Students Say</span>
          </h2>
          <p className="text-xl text-[#123458]/70 dark:text-[#D4C9BE]/70 max-w-3xl mx-auto">
            Success stories from developers who transformed their careers with CodeMaster Pro.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#123458] text-[#123458] dark:text-[#D4C9BE] rounded-3xl p-8 md:p-12 shadow-xl border border-[#AEC8A4] dark:border-[#D4C9BE]/30">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-16 h-16 text-[#123458] dark:text-[#D4C9BE] opacity-20" />
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">{testimonials[currentIndex].image}</div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="border-t border-[#AEC8A4] dark:border-[#D4C9BE]/30 pt-8">
                <h4 className="text-xl font-bold mb-2">{testimonials[currentIndex].name}</h4>
                <p className="text-[#123458]/70 dark:text-[#D4C9BE]/70 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#FFFFFF] dark:bg-[#123458] text-[#123458] dark:text-[#D4C9BE] rounded-full border border-[#AEC8A4] dark:border-[#D4C9BE]/30 shadow-md hover:scale-110 transition-all duration-200 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#FFFFFF] dark:bg-[#123458] text-[#123458] dark:text-[#D4C9BE] rounded-full border border-[#AEC8A4] dark:border-[#D4C9BE]/30 shadow-md hover:scale-110 transition-all duration-200 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#123458] dark:bg-[#D4C9BE]'
                    : 'bg-[#AEC8A4] dark:bg-[#8A784E] hover:opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
