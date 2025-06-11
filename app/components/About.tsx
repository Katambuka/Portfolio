
import { SectionProps } from '@/types';
import Image from 'next/image';

export default function About({ id }: SectionProps) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/images11.jpg"
                alt="Nathane"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h2 className="text-white text-lg font-medium">Full-stack developer based in Uganda and UAE</h2>
              </div>
            </div>
          </div>
       
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="mr-4 relative">
                    <div className="absolute -inset-2 bg-blue-600/20 rounded-full animate-pulse"></div>
                    <Image
                      src="/images/images12.jpg"
                      alt="Nathane Kanyesigye"
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-white relative z-10"
                      priority
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    My Story
                  </h2>
                </div>
                <div className="hidden lg:block text-blue-600 text-6xl font-bold opacity-20">01</div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                A little bit about <span className="text-blue-700">Nathane</span>
              </h3>

              <div className="space-y-4 text-gray-800">
                <p className="text-lg leading-relaxed">
                  I&apos;m <span className="font-semibold text-gray-900">Nathane Kanyesigye</span>, a passionate full-stack developer specializing in modern web technologies like React, Next.js, and Node.js.
                </p>

                <p className="text-lg leading-relaxed">
                  With a keen eye for design and performance, I create responsive, user-friendly websites that deliver exceptional experiences across all devices.
                </p>

                <p className="text-lg leading-relaxed">
                  My approach combines technical expertise with creative problem-solving to build solutions that are both functional and visually compelling.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Technologies I work with:</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-md border border-gray-300 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}