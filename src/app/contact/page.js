'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />, title: 'Email Us',
      details: 'mayank@codemasterpro.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />, title: 'Call Us',
      details: '+91 84419 *****',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6" />, title: 'Visit Us',
      details: '123, Main Street, Behror',
      description: 'Come say hello at our office'
    },
    {
      icon: <Clock className="w-6 h-6" />, title: 'Support Hours',
      details: '24/7 Online Support',
      description: "We're here to help anytime"
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to complete a course?',
      answer: 'Course duration varies from 4-12 weeks depending on the program and your learning pace.'
    },
    {
      question: 'Do you offer job placement assistance?',
      answer: 'Yes! We provide career coaching, resume reviews, and interview preparation to help you land your dream job.'
    },
    {
      question: 'What if I need to pause my learning?',
      answer: 'You have lifetime access to all course materials, so you can learn at your own pace and resume anytime.'
    },
    {
      question: 'Are there any prerequisites?',
      answer: "Most of our beginner courses require no prior experience. We'll clearly mark any prerequisites for advanced courses."
    }
  ];

  return (
    <section>
      <Navbar />
      <div className="pt-16 min-h-screen bg-[#F1EFEC] dark:bg-[#030303] transition-colors duration-300">

        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-6">Get in Touch</h1>
            <p className="text-xl text-[#123458] dark:text-[#D4C9BE] max-w-3xl mx-auto">
              Have questions about our courses? Need help with your learning journey?
              We're here to help you succeed.
            </p>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#123458] dark:bg-[#D4C9BE] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-[#D4C9BE] dark:text-[#123458] mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-bold text-[#D4C9BE] dark:text-[#123458] mb-2">{info.title}</h3>
                <p className="text-[#D4C9BE] dark:text-[#123458] font-medium mb-1">{info.details}</p>
                <p className="text-sm text-[#D4C9BE]/70 dark:text-[#123458]/70">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="bg-[#FFFFFF] dark:bg-[#0F1F36] rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-[#123458] dark:text-[#D4C9BE] mr-3" />
                <h2 className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE]">Send us a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'subject'].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] dark:border-[#1D2C3E] bg-[#F1EFEC] dark:bg-[#030303] text-[#123458] dark:text-[#D4C9BE] rounded-lg focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-[#123458] dark:text-[#D4C9BE] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#E0E0E0] dark:border-[#1D2C3E] bg-[#F1EFEC] dark:bg-[#030303] text-[#123458] dark:text-[#D4C9BE] rounded-lg focus:ring-2 focus:ring-[#123458] dark:focus:ring-[#D4C9BE] focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="w-full flex items-center justify-center px-6 py-3 bg-[#123458] dark:bg-[#D4C9BE] text-white dark:text-[#123458] rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#123458] dark:text-[#D4C9BE] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-[#FFFFFF] dark:bg-[#0F1F36] rounded-2xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-[#123458] dark:text-[#D4C9BE] mb-3">{faq.question}</h3>
                    <p className="text-[#123458]/70 dark:text-[#D4C9BE]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#123458]/10 dark:bg-[#D4C9BE]/10 rounded-2xl">
                <h3 className="text-lg font-semibold text-[#123458] dark:text-[#D4C9BE] mb-2">Still have questions?</h3>
                <p className="text-[#123458]/70 dark:text-[#D4C9BE]/70 mb-4">
                  Our support team is here to help you with any questions about our courses,
                  pricing, or learning paths.
                </p>
                <button className="px-6 py-2 bg-[#123458] dark:bg-[#D4C9BE] text-white dark:text-[#123458] rounded-full font-medium hover:opacity-90 transition-all duration-200">
                  Live Chat Support
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}