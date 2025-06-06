import { Code2, Zap, Users, Award, Clock, Headphones } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Code2,
      title: 'Interactive Coding',
      description: 'Practice with real-time code editors and instant feedback on your progress.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized learning paths that get you job-ready in record time.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of real-world experience.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Earn recognized certificates to showcase your skills to employers.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with 24/7 access to course materials.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose 
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              CodeMaster Pro?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide everything you need to become a successful developer in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}