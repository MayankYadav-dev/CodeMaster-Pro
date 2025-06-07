'use client';
import { useEffect, useState } from 'react';
import { TrendingUp, Award, Globe, Zap } from 'lucide-react';

export default function Stats() {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    countries: 0,
    satisfaction: 0
  });

  const finalValues = {
    students: 50000,
    courses: 200,
    countries: 50,
    satisfaction: 98
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.round(finalValues.students * progress),
        courses: Math.round(finalValues.courses * progress),
        countries: Math.round(finalValues.countries * progress),
        satisfaction: Math.round(finalValues.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: counters.students.toLocaleString() + '+',
      label: 'Students Enrolled'
    },
    {
      icon: Award,
      value: counters.courses + '+',
      label: 'Expert Courses'
    },
    {
      icon: Globe,
      value: counters.countries + '+',
      label: 'Countries Reached'
    },
    {
      icon: Zap,
      value: counters.satisfaction + '%',
      label: 'Satisfaction Rate'
    }
  ];

  return (
    <section id='stats' className="py-24 bg-[#F1EFEC] dark:bg-[#030303] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-4">
            Trusted by Developers
            <span className="block text-[#123458]/70 dark:text-[#D4C9BE]/70">Worldwide</span>
          </h2>
          <p className="text-xl text-[#123458]/70 dark:text-[#D4C9BE]/70 max-w-3xl mx-auto">
            Join thousands of successful developers who transformed their careers with us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#123458] dark:bg-[#D4C9BE] text-white dark:text-[#123458] rounded-3xl mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-10 h-10" />
              </div>

              <div className="text-4xl md:text-5xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-2">
                {stat.value}
              </div>

              <div className="text-lg font-medium text-[#123458]/80 dark:text-[#D4C9BE]/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
