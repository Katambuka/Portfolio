
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaDatabase, FaCloud, FaPaintBrush,FaSearch, FaLaptopCode, FaBug } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

interface Service {
  title: string;
  price: string;
  icon: React.ReactNode;
  desc: string;
  technologies: string[];
  features: string[];
}

interface ServicesProps {
  id: string;
}

const services: Service[] = [
  {
    title: "Web & App Development",
    price: "From $400",
    icon: <FaCode className="text-4xl" />,
    desc: "Custom-built websites, React apps, and full-stack solutions using modern frameworks.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    features: [
      "SEO-optimized architecture",
      "Progressive Web Apps",
      "RESTful APIs",
      "Performance optimization"
    ]
  },

{
  title: "Testing & Quality Assurance",
  price: "From $400",
  icon: <FaBug className="text-4xl" />,
  desc: "Focused unit testing using Python’s pytest to ensure reliable and maintainable code.",
  technologies: ["pytest", "Python"],
  features: [
    "Comprehensive unit tests",
    "Test-driven development (TDD) support",
    "Bug identification and prevention",
    "Clear and maintainable test scripts"
  ]
},
  {
    title: "Database Design & Optimization",
    price: "From $400",
    icon: <FaDatabase className="text-4xl" />,
    desc: "High-performance relational database design and implementation.",
    technologies: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", ""],
    features: [
      "Schema design",
      "Query optimization",
      "Data migration",
      "Security hardening"
    ]
  },
  {
    title: "Cloud Deployment & DevOps",
    price: "From $400",
    icon: <FaCloud className="text-4xl" />,
    desc: "Deploy and manage scalable apps with modern infrastructure.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    features: [
      "Auto-scaling",
      "Load balancing",
      "Infrastructure as Code",
      "Monitoring"
    ]
  },
  {
    title: "UI/UX Design",
    price: "From $400",
    icon: <FaPaintBrush className="text-4xl" />,
    desc: "Beautiful, user-friendly interfaces with attention to detail.",
    technologies: ["Figma", "Adobe XD", "User Testing", "Prototyping", "WCAG"],
    features: [
      "Wireframing",
      "Design systems",
      "Mobile responsiveness",
      "Accessibility"
    ]
  },
 {
  title: "Full-Stack Web Development",
  price: "From $400",
  icon: <FaLaptopCode className="text-4xl" />,
  desc: "Dynamic, responsive web applications using modern frameworks and clean code architecture.",
  technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  features: [
    "API integration",
    "Authentication & security",
    "Responsive UI/UX design",
    "Performance optimization"
  ]
},

{
    title: "Data Analysis & Reporting",
    price: "From $400",
    icon: <FaSearch className="text-4xl" />,
    desc: "Clear business insights from complex datasets.",
    technologies: ["Python", "SQL", "Power BI", "Excel"],
    features: [
      "Dashboard creation",
      "Predictive modeling",
      "Data visualization"
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const ServicesSection: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              Technical Services & Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full-stack development expertise with focus on performance, scalability, and user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.desc}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center text-blue-600 dark:text-blue-400 font-medium group mt-2">
                     <Link href={'https://github.com/Katambuka'}>View My Github </Link> 
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">Need a custom solution or have specific requirements?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg">
           <Link href={'/#contact'}>Discuss Your Project </Link> 
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;