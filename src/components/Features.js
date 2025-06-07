import { Code2, Zap, Users, Award, Clock, Headphones } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Code2,
      title: 'Interactive Coding',
      description: 'Practice with real-time code editors and instant feedback on your progress.',
      color: 'bg-[#123458]'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized learning paths that get you job-ready in record time.',
      color: 'bg-[#D4C9BE]'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of real-world experience.',
      color: 'bg-[#123458]/80'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Earn recognized certificates to showcase your skills to employers.',
      color: 'bg-[#D4C9BE]/90'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with 24/7 access to course materials.',
      color: 'bg-[#123458]/70'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team.',
      color: 'bg-[#D4C9BE]/80'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F1EFEC] dark:bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-4">
            Why Choose
            <span className="block text-[#123458]/70 dark:text-[#D4C9BE]/70">
              CodeMaster Pro?
            </span>
          </h2>
          <p className="text-xl text-[#123458]/80 dark:text-[#D4C9BE]/80 max-w-3xl mx-auto">
            We provide everything you need to become a successful developer in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#123458] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#D4C9BE]/30 dark:border-[#F1EFEC]/10"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-3">
                {feature.title}
              </h3>

              <p className="text-[#123458]/80 dark:text-[#D4C9BE]/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
