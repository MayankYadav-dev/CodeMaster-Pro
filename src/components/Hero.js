'use client';
import { ArrowRight, Play, Star, Users, BookOpen, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden  bg-gray-50 dark:bg-gray-900">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 border border-primary-200 dark:border-primary-800">
            <Star className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" />
            Trusted by 50,000+ developers worldwide
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white mb-2">Master</span>
            <span className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-800 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Coding Skills
            </span>
            <span className="block text-gray-900 dark:text-white">Like a Pro</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your career with our comprehensive coding bootcamps. 
            Learn from industry experts and build real-world projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center px-8 py-4 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg mr-3 group-hover:shadow-xl transition-shadow">
                <Play className="w-5 h-5 text-primary-600 ml-1" fill="currentColor" />
              </div>
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-3 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Students</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl mb-3 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">200+</div>
              <div className="text-gray-600 dark:text-gray-400">Expert Courses</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-3 shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}