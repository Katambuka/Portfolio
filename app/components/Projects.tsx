
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  features: string[];
  codeUrl?: string;
}

interface ProjectsProps {
  id: string;
}

const projects: Project[] = [
  {
    title: "Diabetes Education Blog Platform",
    description: "Informational blog with health tracking features for diabetes patients",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/diabetes.jpg",
    features: [
      "User authentication system",
      "Content management dashboard",
      "Health metric tracking",
      "Responsive mobile design"
    ],
    codeUrl: "https://github.com/Katambuka"
  },
  {
    title: "Restaurant Menu Management System",
    description: "Full-stack application for digital menu display and order management",
    tags: ["Next.js", "Firebase", "Stripe API", "UI Design"],
    image: "/images/plate.jpg",
    features: [
      "Real-time menu updates",
      "Online payment integration",
      "Admin control panel",
      "Tablet-friendly interface"
    ],
    codeUrl: "https://github.com/Katambuka"
  },
  {
    title: "Kubernetes Cluster Configuration",
    description: "Production-grade container orchestration setup with monitoring",
    tags: ["Kubernetes", "Docker", "Helm", "Prometheus"],
    image: "/images/infrastructure.jpg",
    features: [
      "Multi-node cluster deployment",
      "Custom pod configurations",
      "Resource monitoring",
      "CI/CD pipeline integration"
    ],
    codeUrl: "https://github.com/Katambuka"
  },
  {
    title: "SQL Database Optimization Project",
    description: "Performance tuning and query optimization for enterprise databases",
    tags: ["SQL Server", "T-SQL", "Query Tuning", "SSMS"],
    image: "/images/sqlserver.jpg",
    features: [
      "Query execution plan analysis",
      "Index optimization",
      "Stored procedure refactoring",
      "ETL process improvement"
    ],
    codeUrl: "https://github.com/Katambuka"
  }
];

const ProjectsSection: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="px-4 py-3 md:px-6 md:py-3.5 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600  text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center  w-full md:w-auto  text-sm md:text-base">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical implementations demonstrating my problem-solving approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex">
                  {project.codeUrl && (
                    <Link
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center w-full"
                    >
                      View Code
                      <FiGithub className="w-4 h-4 ml-2" />
                    </Link>
                  )}
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
          <p className="text-lg text-gray-600 mb-6">
            Want to see more technical implementations or discuss a project?
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;