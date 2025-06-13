
import { SectionProps } from '@/types';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FiDownload, FiEye, FiFileText, FiArrowRight } from 'react-icons/fi';

const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { 
    ssr: false,
    loading: () => <div className="text-xl md:text-3xl h-20 md:h-16 mb-8 flex items-center justify-center">Web Developer</div>
  }
);

export default function Hero({ id }: SectionProps) {
  const handleCVAction = (action: 'view' | 'download') => {
    const pdfUrl = '/Nathan062025.pdf';
    if (action === 'view') {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'NathanKanyesigye_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section 
      id={id}
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            <span className="block text-gray-900">Hi, I&apos;m </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">Kanyesigye Nathane</span>
          </h1>
          
          {/* TypeAnimation */}
          <div className="text-xl md:text-2xl lg:text-3xl h-16 md:h-14 lg:h-16 mb-6 md:mb-8 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'React & Nextjs Developer',
                2000,
                'Front End Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'Logistics Cordinator',
                2000,
                'QA Tester',
                2000, 
                'Junior Software Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium px-4 py-2 rounded-lg text-gray-700 bg-gray-100"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-6 md:px-8 py-3 rounded-lg font-medium text-white overflow-hidden group shadow-md"
              aria-label="Contact me"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:from-blue-700 group-hover:to-cyan-600 z-0" />
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                Contact Me <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
            
            {/* Secondary CTA - Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-6 md:px-8 py-3 rounded-lg font-medium overflow-hidden group border border-gray-300 text-gray-800 bg-white hover:bg-gray-50"
              aria-label="View my projects"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                View Projects <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
            
            {/* Resume Card */}
            <motion.div 
              className="p-0.5 rounded-lg bg-gradient-to-r from-blue-500/80 to-cyan-500/80"
              whileHover={{ y: -3 }}
            >
              <div className="p-3 md:p-4 rounded-lg bg-white">
                <div className="flex flex-col items-center">
                  <FiFileText className="text-xl md:text-2xl mb-2 text-blue-600" />
                  <h2 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-gray-800">My Resume</h2>
                  <div className="flex gap-2 md:gap-3">
                    <motion.button
                      onClick={() => handleCVAction('view')}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-1 md:gap-2 px-3 py-1.5 rounded-md text-xs md:text-sm bg-gray-100 hover:bg-gray-200 text-gray-800"
                      aria-label="Preview resume"
                    >
                      <FiEye className="text-xs md:text-sm" />
                      <span>Preview</span>
                    </motion.button>
                    <motion.button
                      onClick={() => handleCVAction('download')}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-1 md:gap-2 px-3 py-1.5 rounded-md text-xs md:text-sm text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                      aria-label="Download resume"
                    >
                      <FiDownload className="text-xs md:text-sm" />
                      <span>Download</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-2 rounded-full bg-white border border-gray-200 shadow-md">
            <svg
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}