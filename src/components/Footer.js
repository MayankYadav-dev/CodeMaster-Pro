import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    courses: [
      'Full Stack Development',
      'Python Programming',
      'Mobile Development',
      'Data Science',
      'Web Design',
      'DevOps'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press',
      'Blog',
      'Contact'
    ],
    support: [
      'Help Center',
      'Student Portal',
      'Course Catalog',
      'Refund Policy',
      'Terms of Service',
      'Privacy Policy'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-10 w-10 text-primary-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                CodeMaster Pro
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Empowering the next generation of developers with cutting-edge courses and hands-on learning experiences.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                mayank@codemasterpro.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                +91 84419*****
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                123, Main Street, Behror
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-primary-400">Popular Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-primary-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-primary-400">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest courses and coding tips delivered to your inbox.</p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-full focus:outline-none focus:border-primary-500 text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-r-full font-semibold hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2025 CodeMaster Pro. All rights reserved.</p>
            <p className="text-sm mt-1">Made with ❤️ for developers worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}