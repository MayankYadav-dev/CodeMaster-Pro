import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  const benefits = [
    'Lifetime access to all courses',
    'Direct mentorship from experts',
    'Career placement assistance',
    'Certificate of completion'
  ];

  return (
    <section className="py-24 bg-[#F1EFEC] dark:bg-[#030303] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-6">
            Ready to Transform
            <span className="block text-[#123458]/70 dark:text-[#D4C9BE]/70">Your Career?</span>
          </h2>

          <p className="text-xl md:text-2xl text-[#123458]/80 dark:text-[#D4C9BE]/80 mb-12 max-w-3xl mx-auto">
            Join thousands of successful developers and start your coding journey today. 
            No experience required – just passion and dedication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-[#123458] dark:text-[#D4C9BE] text-lg">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group px-10 py-4 bg-white dark:bg-[#D4C9BE] text-[#123458] dark:text-[#030303] rounded-full font-bold text-xl hover:bg-[#F1EFEC] hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
              Start Learning Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-10 py-4 border-2 border-[#123458] dark:border-[#D4C9BE] text-[#123458] dark:text-[#D4C9BE] rounded-full font-bold text-xl hover:bg-[#E7EFC7] dark:hover:bg-[#8A784E] hover:text-black transition-all duration-300">
              View All Courses
            </button>
          </div>

          <div className="inline-block bg-[#FFDEDE] dark:bg-[#8A784E] text-black px-6 py-3 rounded-full font-bold text-lg animate-pulse">
            🎉 Limited Time: 50% OFF on All Courses!
          </div>
        </div>
      </div>
    </section>
  );
}
