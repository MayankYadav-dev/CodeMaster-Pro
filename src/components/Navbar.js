'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'All Courses', path: '/allcourses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  const isActivePage = (path) => {
    return pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 bg-[#F1EFEc]/80 dark:bg-[#030303]/90 backdrop-blur-xl border-b border-[#D4C9BE] dark:border-[#123458]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <div className="relative">
              <Code className="h-8 w-8 text-[#123458] dark:text-[#D4C9BE]" />
            </div>
            <span className="text-xl font-bold text-[#123458] dark:text-[#D4C9BE]">
              CodeMaster Pro
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`transition-colors duration-200 font-medium ${
                  isActivePage(item.path)
                    ? 'text-[#030303] dark:text-[#F1EFEc] border-b-2 border-[#123458] dark:border-[#D4C9BE] pb-1'
                    : 'text-[#123458] dark:text-[#D4C9BE] hover:text-[#030303] dark:hover:text-[#F1EFEc]'
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#D4C9BE] dark:bg-[#123458] hover:bg-[#C0B49E] dark:hover:bg-[#0f2a59] transition-colors duration-200"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-[#123458] dark:text-[#D4C9BE]" />
              ) : (
                <Sun className="h-5 w-5 text-[#123458] dark:text-[#D4C9BE]" />
              )}
            </button>

            <button 
              onClick={() => handleNavigation('/auth')}
              className="bg-[#123458] text-[#F1EFEc] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Start Learning
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#D4C9BE] dark:bg-[#123458]"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-[#123458] dark:text-[#D4C9BE]" />
              ) : (
                <Sun className="h-5 w-5 text-[#123458] dark:text-[#D4C9BE]" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#123458] dark:text-[#D4C9BE] hover:text-[#030303] dark:hover:text-[#F1EFEc]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#F1EFEc] dark:bg-[#030303] border-t border-[#D4C9BE] dark:border-[#123458]">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left px-3 py-2 transition-colors duration-200 ${
                    isActivePage(item.path)
                      ? 'text-[#030303] dark:text-[#F1EFEc] bg-[#123458]/10 dark:bg-[#D4C9BE]/10 rounded-lg'
                      : 'text-[#123458] dark:text-[#D4C9BE] hover:text-[#030303] dark:hover:text-[#F1EFEc]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => handleNavigation('/auth')}
                className="w-full mt-4 bg-[#123458] text-[#F1EFEc] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Start Learning
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}