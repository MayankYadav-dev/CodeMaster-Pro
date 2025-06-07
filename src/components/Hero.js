'use client';
import { ArrowRight, Play, Star, Users, BookOpen, Trophy, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F1EFEc] dark:bg-[#030303] overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          <div className="w-full md:w-1/2 sm:text-left text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D4C9BE]/30 dark:bg-[#123458]/30 text-[#123458] dark:text-[#D4C9BE] text-sm font-medium mb-6 border border-[#D4C9BE]/50 dark:border-[#123458]/50">
              <Star className="w-4 h-4 mr-2 text-[#123458] dark:text-[#D4C9BE]" fill="currentColor" />
              Trusted by 50,000+ developers worldwide
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#123458] dark:text-[#D4C9BE] leading-tight">
              Master <br />
              <span className="text-[#123458] dark:text-[#D4C9BE]">Coding Skills</span><br />
              Like a Pro
            </h1>

            <p className="text-lg md:text-xl text-[#123458]/80 dark:text-[#D4C9BE]/80 mb-8 leading-relaxed">
              Transform your career with our comprehensive coding bootcamps.
              Learn from industry experts and build real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-[#123458] text-[#F1EFEc] rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group flex items-center px-8 py-4 text-[#123458] dark:text-[#D4C9BE] font-semibold text-lg hover:text-[#D4C9BE] dark:hover:text-[#F1EFEc] transition-colors duration-200">
                <div className="flex items-center justify-center w-12 h-12 bg-[#F1EFEc] dark:bg-[#123458] rounded-full shadow-lg mr-3 group-hover:shadow-xl transition-shadow">
                  <Play className="w-5 h-5 text-[#123458] dark:text-[#F1EFEc] ml-1" fill="currentColor" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#123458] dark:bg-[#D4C9BE] rounded-2xl mb-3 shadow-lg">
                <Users className="w-8 h-8 text-[#F1EFEc] dark:text-[#123458]" />
              </div>
              <div className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">50K+</div>
              <div className="text-[#123458]/80 dark:text-[#D4C9BE]/80">Active Students</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#D4C9BE] dark:bg-[#123458] rounded-2xl mb-3 shadow-lg">
                <BookOpen className="w-8 h-8 text-[#123458] dark:text-[#F1EFEc]" />
              </div>
              <div className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">200+</div>
              <div className="text-[#123458]/80 dark:text-[#D4C9BE]/80">Expert Courses</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#D4C9BE] dark:bg-[#123458] rounded-2xl mb-3 shadow-lg">
                <Trophy className="w-8 h-8 text-[#123458] dark:text-[#F1EFEc]" />
              </div>
              <div className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">95%</div>
              <div className="text-[#123458]/80 dark:text-[#D4C9BE]/80">Success Rate</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#123458] dark:bg-[#D4C9BE] rounded-2xl mb-3 shadow-lg">
                <Headphones className="w-8 h-8 text-[#F1EFEc] dark:text-[#123458]" />
              </div>
              <div className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">24/7</div>
              <div className="text-[#123458]/80 dark:text-[#D4C9BE]/80">Mentors Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
