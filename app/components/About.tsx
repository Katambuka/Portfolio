
import { SectionProps } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techIcons = [
  { icon: <FaReact className="text-[#61DAFB]" size={20} />, name: 'React' },
  { icon: <SiNextdotjs className="text-black dark:text-white" size={20} />, name: 'Next.js' },
  { icon: <SiTypescript className="text-[#3178C6]" size={20} />, name: 'TypeScript' },
  { icon: <FaNodeJs className="text-[#68A063]" size={20} />, name: 'Node.js' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" size={20} />, name: 'Tailwind' },
  { icon: <FaDatabase className="text-[#47A248]" size={20} />, name: 'MongoDB' },
];

export default function About({ id }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-20 bg-gradient-to-b from-indigo-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3]">
              <Image
                src="/images/images11.jpg"
                alt="Nathane"
                fill
                className="object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <div className="translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-white">Digital Craftsmanship</h3>
                  <p className="text-indigo-200 text-sm md:text-base">Full-stack developer based in Uganda and UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Header */}
              <div className="flex items-center mb-6 md:mb-8">
                <div className="mr-4 md:mr-6 relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-fuchsia-500 to-blue-600 rounded-full animate-pulse opacity-70" />
                  <div className="relative z-10 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden w-16 h-16 md:w-20 md:h-20">
                    <Image
                      src="/images/images12.jpg"
                      alt="Nathane Kanyesigye"
                      width={90}
                      height={120}
                      className="rounded-full"
                      priority
                    />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  About Me
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Building <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">Digital Experiences</span>
                </h3>

                <div className="space-y-3 md:space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-base md:text-lg leading-relaxed">
                    I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Nathane Kanyesigye</span>, a passionate full-stack developer specializing in modern web technologies.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed">
                    With a blend of <span className="text-blue-600 font-medium">technical precision</span> and <span className="text-purple-600 font-medium">creative vision</span>, I craft responsive, performant websites.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed">
                    I thrive on challenges and continuously seek to expand my skill set, always aiming to deliver exceptional user experiences.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Whether it&apos;s building <span className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent font-medium">building a dynamic web application or optimizing performance,</span> I approach each project with enthusiasm and dedication.
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-8 md:mt-10">
                <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 text-gray-900 dark:text-white flex items-center">
                  <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 w-2.5 h-2.5 rounded-full mr-2" />
                  My Technology Stack
                </h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -3 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        delay: index * 0.05
                      }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 w-20 h-20"
                    >
                      {tech.icon}
                      <span className="mt-1.5 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}