import { Clock, Users, Star, ArrowRight, Code, Database, Smartphone } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'Full Stack JavaScript',
      description: 'Master modern web development with React, Node.js, and MongoDB',
      duration: '12 weeks',
      students: '15,420',
      rating: '4.9',
      price: '$299',
      icon: <Code className="w-12 h-12" />,
      tags: ['React', 'Node.js', 'MongoDB'],
      level: 'Intermediate'
    },
    {
      title: 'Python for Data Science',
      description: 'Learn Python, pandas, NumPy, and machine learning fundamentals',
      duration: '10 weeks',
      students: '12,830',
      rating: '4.8',
      price: '$249',
      icon: <Database className="w-12 h-12" />,
      tags: ['Python', 'Pandas', 'ML'],
      level: 'Beginner'
    },
    {
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps with React Native and Flutter',
      duration: '14 weeks',
      students: '9,240',
      rating: '4.9',
      price: '$349',
      icon: <Smartphone className="w-12 h-12" />,
      tags: ['React Native', 'Flutter'],
      level: 'Advanced'
    }
  ];

  return (
    <section id="courses" className="py-24 bg-[#F1EFEC] dark:bg-[#030303] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-[#123458]/70 dark:text-[#D4C9BE]/70 max-w-3xl mx-auto">
            Choose from our carefully crafted courses designed by industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-[#FFFFFF] dark:bg-[#0F1F36] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#E0E0E0] dark:border-[#1D2C3E]"
              >
                <div className="text-[#123458] dark:text-[#D4C9BE] mb-6">
                  {course.icon}
                </div>

                <div className="inline-block px-3 py-1 bg-[#123458]/10 dark:bg-[#D4C9BE]/10 text-[#123458] dark:text-[#D4C9BE] text-sm font-medium rounded-full mb-4">
                  {course.level}
                </div>

                <h3 className="text-xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-3 group-hover:underline">
                  {course.title}
                </h3>

                <p className="text-[#123458]/70 dark:text-[#D4C9BE]/70 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-[#123458]/10 dark:bg-[#D4C9BE]/10 text-[#123458] dark:text-[#D4C9BE] text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6 text-sm text-[#123458]/70 dark:text-[#D4C9BE]/70">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">
                    {course.price}
                  </div>
                  <button className="group/btn flex items-center px-4 py-2 bg-[#123458] dark:bg-[#D4C9BE] text-white dark:text-[#123458] rounded-full font-medium hover:opacity-90 transition-all duration-200">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#123458] text-[#123458] dark:text-[#D4C9BE] dark:border-[#D4C9BE] rounded-full font-semibold hover:bg-[#123458] hover:text-white dark:hover:bg-[#D4C9BE] dark:hover:text-[#030303] transition-all duration-200">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
