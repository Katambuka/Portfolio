
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDarkMode(savedTheme ? savedTheme === 'dark' : systemPrefersDark);

    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1200);
    
    // Scroll event listener for section detection
    const handleScroll = () => {
      const sections = ['about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Head>
        <title>Nathane K. | Full-Stack Developer</title>
        <meta name="description" content="Portfolio showcasing my journey from beginner to proficient developer with projects in Next.js, React, and full-stack development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar 
        activeSection={activeSection} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="overflow-hidden">
        <Hero id="home" isDarkMode={isDarkMode} />
        <About id="about"/>
        <Services id="services" />
        <Projects id="projects" />
        <Contact id='contact'/>
      </main>

      <Footer/>
      
      <ScrollToTop />
    </div>
  );
}