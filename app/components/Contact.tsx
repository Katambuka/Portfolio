
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FiGlobe, FiMail, FiSearch, FiSmartphone, FiBox, FiCloud, FiCode, FiCpu, FiDatabase, FiGitBranch, FiLock, FiMonitor, FiPieChart, FiRepeat, FiSettings, FiShield, FiZap } from 'react-icons/fi';

interface ContactSectionProps {
  id: string;
}

export default function ContactSection({ id }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ 
    success: boolean; 
    message: string 
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const services = checked
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value);
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({
        success: true,
        message: data.message || 'Your message has been sent successfully! I will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        services: []
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-6"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-6 border-4 border-white dark:border-gray-800 shadow-lg transform hover:rotate-6 transition-transform duration-300">
              <Image
                src="/images/images11.jpg"
                alt="Working at desk"
                width={64}
                height={64}
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Get In Touch
            </h1>
          </motion.div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center">
            Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                <FiGlobe className="mr-2 text-blue-500 dark:text-blue-400" />
                Services Offered
              </h2>
              <ul className="space-y-3">
                {['Web Development', 'UI/UX Design', 'E-commerce', 'SEO Optimization'].map((service) => (
                  <li key={service} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                  <FiBox className="mr-2 text-blue-500 dark:text-blue-400" />
                  Start a Project
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Available for freelance projects and exciting collaborations.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <FaTwitter className="text-blue-400" />, url: 'https://x.com/katambuka?t=7Xasj2Sb6bUEHPYfgdj_Rg&s=09', name: 'Twitter' },
                    { icon: <FaFacebook className="text-blue-600" />, url: 'https://www.facebook.com/share/15ih5TNrtK/?mibextid=qi2Omg', name: 'Facebook' },
                    { icon: <FaInstagram className="text-pink-500" />, url: 'https://www.instagram.com/nathank2?igsh=cDU0OGxtZDRwMGQ1', name: 'Instagram' },
                    { icon: <FaTiktok className="text-black dark:text-white" />, url: 'https://www.tiktok.com/@flellaharvest?_t=ZS-8x5vus8AaEk&_r=1', name: 'TikTok' },
                    { icon: <FaYoutube className="text-red-600" />, url: 'https://youtube.com/@flellainsights?si=tZwdG4FgXcFqVlNJ', name: 'YouTube' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors hover:scale-110"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
                <FiMail className="mr-2 text-blue-500 dark:text-blue-400" />
                Contact Details
              </h2>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                  <Link
                    href="mailto:albaashe77@gmail.com"
                    className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center"
                    aria-label="Send email to albaashe77@gmail.com"
                  >
                    <FiMail className="mr-2" />
                    albaashe77@gmail.com
                  </Link>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Phone</p>
                  <Link
                    href="tel:+971555598261"
                    className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center"
                    aria-label="Call +971 55 559 8261"
                  >
                    <FiSmartphone className="mr-2" />
                    +971 55 559 8261
                  </Link>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">LinkedIn</p>
                  <Link
                    href="https://www.linkedin.com/in/nathane-kanyesigye-948969236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center"
                    aria-label="Visit Nathane Kanyesigye's LinkedIn profile"
                  >
                    <FaLinkedin className="mr-2 text-blue-600" />
                    Nathane Kanyesigye
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                Send Me a Message
              </h2>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Services Needed
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: <FiGlobe className="mr-2" />, label: 'Web Development', id: 'web-dev' },
                    { icon: <FiBox className="mr-2" />, label: 'UI/UX Design', id: 'ui-ux' },
                    { icon: <FiSmartphone className="mr-2" />, label: 'E-commerce', id: 'ecommerce' },
                    { icon: <FiSearch className="mr-2" />, label: 'SEO', id: 'seo' },
                    { icon: <FiMonitor className="mr-2" />, label: "UI/UX Design", id: "ui-ux-design" },
                    { icon: <FiCode className="mr-2" />, label: "Web Development", id: "web-development" },
                    { icon: <FiDatabase className="mr-2" />, label: "Database Design", id: "db-design" },
                    { icon: <FiSettings className="mr-2" />, label: "Database Management", id: "db-management" },
                    { icon: <FiRepeat className="mr-2" />, label: "Data Migration", id: "data-migration" },
                    { icon: <FiZap className="mr-2" />, label: "Stored Procedures", id: "stored-procedures" },
                    { icon: <FiCpu className="mr-2" />, label: "API Development", id: "api-dev" },
                    { icon: <FiSmartphone className="mr-2" />, label: "Responsive Design", id: "responsive" },
                    { icon: <FiShield className="mr-2" />, label: "Web Security", id: "web-security" },
                    { icon: <FiLock className="mr-2" />, label: "Authentication", id: "auth" },
                    { icon: <FiCloud className="mr-2" />, label: "Cloud Deployment", id: "cloud-deployment" },
                    { icon: <FiGitBranch className="mr-2" />, label: "Version Control", id: "git" },
                    { icon: <FiPieChart className="mr-2" />, label: "Performance", id: "performance" }
                  ].map((service) => (
                    <div key={service.id} className="flex items-center">
                      <input
                        id={service.id}
                        name={service.id}
                        type="checkbox"
                        value={service.label}
                        checked={formData.services.includes(service.label)}
                        onChange={handleServiceChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label htmlFor={service.id} className="ml-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        {service.icon}
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <span>Project Details</span><span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <p>Send Message</p>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}