import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    courses: ['Full Stack Development', 'Python Programming', 'Mobile Development', 'Data Science', 'Web Design', 'DevOps'],
    company: ['About Us', 'Our Team', 'Careers', 'Press', 'Blog', 'Contact'],
    support: ['Help Center', 'Student Portal', 'Course Catalog', 'Refund Policy', 'Terms of Service', 'Privacy Policy'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-[#F1EFEC] text-[#030303] dark:bg-[#030303] dark:text-[#D4C9BE] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-10 w-10 text-[#123458]" />
              <span className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">CodeMaster Pro</span>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-[#030303]/80 dark:text-[#D4C9BE]/80">
              Empowering the next generation of developers with cutting-edge courses and hands-on learning experiences.
            </p>

            <div className="space-y-3 text-sm text-[#030303]/80 dark:text-[#D4C9BE]/80">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#123458]" />
                mayank@codemasterpro.com
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#123458]" />
                +91 84419*****
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#123458]" />
                123, Main Street, Behror
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#123458] dark:text-[#F1EFEC]">Popular Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-[#123458] dark:hover:text-[#F1EFEC] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#123458] dark:text-[#F1EFEC]">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-[#123458] dark:hover:text-[#F1EFEC] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#123458] dark:text-[#F1EFEC]">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-[#123458] dark:hover:text-[#F1EFEC] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#123458]/20 dark:border-[#D4C9BE]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-[#123458] dark:text-[#F1EFEC]">Stay Updated</h3>
              <p className="text-[#030303]/80 dark:text-[#D4C9BE]/70">Get the latest courses and coding tips delivered to your inbox.</p>
            </div>

            <div className="flex w-full md:w-auto mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-white text-[#030303] dark:bg-[#123458] dark:text-white border border-[#123458]/40 dark:border-[#D4C9BE]/30 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#123458] placeholder:text-[#030303]/50 dark:placeholder:text-[#D4C9BE]/60"
              />
              <button className="px-6 py-3 bg-[#123458] text-white dark:bg-[#D4C9BE] dark:text-[#030303] rounded-r-full font-semibold hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#123458]/20 dark:border-[#D4C9BE]/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-[#123458]/10 dark:bg-[#123458] rounded-full flex items-center justify-center text-[#123458] dark:text-[#F1EFEC] hover:bg-[#123458] hover:text-white dark:hover:bg-[#D4C9BE] dark:hover:text-[#030303] transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-sm text-[#030303]/60 dark:text-[#D4C9BE]/60 text-center md:text-right">
            <p>&copy; 2025 CodeMaster Pro. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for developers worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
