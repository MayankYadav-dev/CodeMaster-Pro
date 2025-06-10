'use client';
import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, User, Mail, Lock, Star, Code, BookOpen } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    if (isLogin) {
      if (formData.email && formData.password) {
        console.log('Login successful');
        window.location.href = '/';
      } else {
        alert('Please fill in all fields');
      }
    } else {
      if (formData.name && formData.email && formData.password && formData.confirmPassword) {
        if (formData.password === formData.confirmPassword) {
          console.log('Sign up successful');
          window.location.href = '/';
        } else {
          alert('Passwords do not match');
        }
      } else {
        alert('Please fill in all fields');
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F1EFEc] dark:bg-[#030303] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D4C9BE]/30 dark:bg-[#123458]/30 text-[#123458] dark:text-[#D4C9BE] text-sm font-medium mb-6 border border-[#D4C9BE]/50 dark:border-[#123458]/50">
              <Star className="w-4 h-4 mr-2 text-[#123458] dark:text-[#D4C9BE]" fill="currentColor" />
              Join 50,000+ developers worldwide
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#123458] dark:text-[#D4C9BE] leading-tight">
              {isLogin ? 'Welcome Back' : 'Start Your'} <br />
              <span className="text-[#123458] dark:text-[#D4C9BE]">Coding Journey</span>
            </h1>

            <p className="text-lg text-[#123458]/80 dark:text-[#D4C9BE]/80 mb-8 leading-relaxed">
              {isLogin 
                ? 'Continue your learning journey and master new coding skills with our expert-led courses.'
                : 'Join thousands of developers who have transformed their careers with our comprehensive bootcamps.'
              }
            </p>

            <div className="hidden lg:flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#123458] dark:bg-[#D4C9BE] rounded-xl">
                  <Code className="w-5 h-5 text-[#F1EFEc] dark:text-[#123458]" />
                </div>
                <span className="text-[#123458] dark:text-[#D4C9BE] font-medium">Real-world projects & hands-on experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#D4C9BE] dark:bg-[#123458] rounded-xl">
                  <BookOpen className="w-5 h-5 text-[#123458] dark:text-[#F1EFEc]" />
                </div>
                <span className="text-[#123458] dark:text-[#D4C9BE] font-medium">Expert mentorship & 24/7 support</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-md mx-auto">
            <div className="bg-white dark:bg-[#0A0A0A] rounded-3xl shadow-2xl p-8 border border-[#D4C9BE]/20 dark:border-[#123458]/20">
              
              <div className="flex bg-[#F1EFEc] dark:bg-[#123458]/20 rounded-2xl p-1 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    isLogin 
                      ? 'bg-[#123458] text-[#F1EFEc] shadow-lg' 
                      : 'text-[#123458] dark:text-[#D4C9BE] hover:bg-[#D4C9BE]/30 dark:hover:bg-[#123458]/30'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    !isLogin 
                      ? 'bg-[#123458] text-[#F1EFEc] shadow-lg' 
                      : 'text-[#123458] dark:text-[#D4C9BE] hover:bg-[#D4C9BE]/30 dark:hover:bg-[#123458]/30'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="space-y-6">
                
                {!isLogin && (
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#123458]/50 dark:text-[#D4C9BE]/50" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-[#F1EFEc] dark:bg-[#123458]/10 border border-[#D4C9BE]/30 dark:border-[#123458]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent text-[#123458] dark:text-[#D4C9BE] placeholder-[#123458]/50 dark:placeholder-[#D4C9BE]/50 transition-all duration-200"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="relative">
                  <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#123458]/50 dark:text-[#D4C9BE]/50" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-[#F1EFEc] dark:bg-[#123458]/10 border border-[#D4C9BE]/30 dark:border-[#123458]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent text-[#123458] dark:text-[#D4C9BE] placeholder-[#123458]/50 dark:placeholder-[#D4C9BE]/50 transition-all duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#123458]/50 dark:text-[#D4C9BE]/50" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-4 bg-[#F1EFEc] dark:bg-[#123458]/10 border border-[#D4C9BE]/30 dark:border-[#123458]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent text-[#123458] dark:text-[#D4C9BE] placeholder-[#123458]/50 dark:placeholder-[#D4C9BE]/50 transition-all duration-200"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#123458]/50 dark:text-[#D4C9BE]/50 hover:text-[#123458] dark:hover:text-[#D4C9BE] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="relative">
                    <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#123458]/50 dark:text-[#D4C9BE]/50" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-[#F1EFEc] dark:bg-[#123458]/10 border border-[#D4C9BE]/30 dark:border-[#123458]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent text-[#123458] dark:text-[#D4C9BE] placeholder-[#123458]/50 dark:placeholder-[#D4C9BE]/50 transition-all duration-200"
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#123458]/50 dark:text-[#D4C9BE]/50 hover:text-[#123458] dark:hover:text-[#D4C9BE] transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-[#123458] dark:text-[#D4C9BE] hover:text-[#123458]/80 dark:hover:text-[#D4C9BE]/80 text-sm font-medium transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="group w-full px-8 py-4 bg-[#123458] text-[#F1EFEc] rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {!isLogin && (
                  <p className="text-xs text-[#123458]/70 dark:text-[#D4C9BE]/70 text-center">
                    By creating an account, you agree to our{' '}
                    <button className="text-[#123458] dark:text-[#D4C9BE] hover:underline font-medium">
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button className="text-[#123458] dark:text-[#D4C9BE] hover:underline font-medium">
                      Privacy Policy
                    </button>
                  </p>
                )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}