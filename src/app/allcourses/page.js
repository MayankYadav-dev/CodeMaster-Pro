'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, Users, Star, ArrowRight, Database } from 'lucide-react';
import { allCourses, categories, levels } from '@/data/mockCoursesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AllCoursesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = allCourses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'rating':
        return parseFloat(b.rating) - parseFloat(a.rating);
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      default: // popular
        return parseInt(b.students.replace(',', '')) - parseInt(a.students.replace(',', ''));
    }
  });

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <section>
    <Navbar />
    <div className="pt-16 min-h-screen bg-[#F1EFEC] dark:bg-[#030303] transition-colors duration-300">

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-4">
              All Courses
            </h1>
            <p className="text-xl text-[#123458]/80 dark:text-[#D4C9BE]/80 max-w-3xl mx-auto">
              Explore our complete collection of courses designed to advance your career and skills.
            </p>
            <div className="mt-6 text-[#123458]/60 dark:text-[#D4C9BE]/60">
              <span className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">{filteredCourses.length}</span> courses available
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-sm border-b border-[#E0E0E0] dark:border-[#1D2C3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-[#E0E0E0] dark:border-[#1D2C3E] bg-white dark:bg-[#030303] text-[#123458] dark:text-[#D4C9BE] rounded-lg focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                  Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 border border-[#E0E0E0] dark:border-[#1D2C3E] bg-white dark:bg-[#030303] text-[#123458] dark:text-[#D4C9BE] rounded-lg focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-[#E0E0E0] dark:border-[#1D2C3E] bg-white dark:bg-[#030303] text-[#123458] dark:text-[#D4C9BE] rounded-lg focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-[#0F1F36] rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#E0E0E0] dark:border-[#1D2C3E]"
              >
                <div className="text-[#123458] dark:text-[#D4C9BE] mb-4">
                  {course.icon}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block px-3 py-1 bg-[#123458]/10 dark:bg-[#D4C9BE]/10 text-[#123458] dark:text-[#D4C9BE] text-sm font-medium rounded-full">
                    {course.level}
                  </div>
                  <div className="text-xs text-[#123458]/60 dark:text-[#D4C9BE]/60 font-medium">
                    {course.category}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#123458] dark:text-[#D4C9BE] mb-3 group-hover:underline line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-[#123458]/70 dark:text-[#D4C9BE]/70 mb-4 text-sm line-clamp-3">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-[#123458]/10 dark:bg-[#D4C9BE]/10 text-[#123458] dark:text-[#D4C9BE] text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                  {course.tags.length > 2 && (
                    <span className="px-2 py-1 bg-[#123458]/10 dark:bg-[#D4C9BE]/10 text-[#123458] dark:text-[#D4C9BE] text-xs font-medium rounded-lg">
                      +{course.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4 text-xs text-[#123458]/70 dark:text-[#D4C9BE]/70">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-[#123458] dark:text-[#D4C9BE]">
                    {course.price}
                  </div>
                  <button className="group/btn flex items-center px-3 py-2 bg-[#123458] dark:bg-[#D4C9BE] text-white dark:text-[#123458] rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200">
                    Enroll
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-[#123458]/40 dark:text-[#D4C9BE]/40 mb-4">
                <Database className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-[#123458] dark:text-[#D4C9BE] mb-2">
                No courses found
              </h3>
              <p className="text-[#123458]/70 dark:text-[#D4C9BE]/70">
                Try adjusting your filters to find more courses.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </section>
  );
}