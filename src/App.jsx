import { useEffect, useRef, useState } from 'react';
import {
  BackgroundLayers,
} from './components/BackgroundLayers.jsx';
import { AboutSection } from './components/AboutSection.jsx';
import { ContactSection } from './components/ContactSection.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { ProjectsSection } from './components/ProjectsSection.jsx';
import { SiteFooter } from './components/SiteFooter.jsx';
import { SiteHeader } from './components/SiteHeader.jsx';
import { TechStackShowcase } from './components/TechStackShowcase.jsx';
import { ProjectModal } from './components/ProjectModal.jsx';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
];

const sectionOrder = ['home', 'about', 'tech-stack', 'projects', 'contact'];

const socialLinks = [
  {
    href: 'https://github.com/gracyy17',
    label: 'G',
    ariaLabel: 'GitHub profile',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    href: 'mailto:septimogracey@gmail.com',
    label: '@',
    ariaLabel: 'Send an email',
  },
  {
    href: 'https://gracyy17.github.io/portfolio.github.io/',
    label: '↗',
    ariaLabel: 'View portfolio',
    target: '_blank',
    rel: 'noreferrer',
  },
];

const aboutHighlights = [
  {
    prefix: '06+',
    title: 'Projects Completed',
  },
  {
    prefix: '01',
    title: 'Internship',
    detail: 'Frontend & UI/UX Designer',
  },
  {
    title: 'UI/UX Design with Mobile Specialization',
  },
];

const featuredProjects = [
  {
    imageClassName: 'image-1',
    title: 'Dormitory Management Website',
    description:
      'A React.js and Node.js/Express.js system for managing tenants and room allocation with responsive interfaces.',
    designs: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=800'],
  },
  {
    imageClassName: 'image-2',
    title: 'H2Know Mobile Application',
    description:
      'A Flutter and Firebase mobile app for water monitoring, notifications, and real-time user awareness.',
    designs: ['https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=1200&h=800'],
  },
  {
    imageClassName: 'image-3',
    title: 'Video Streaming Website',
    description:
      'A web-based streaming platform with video upload and playback features, built with responsive layouts and smooth interactions.',
    designs: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200&h=800'],
  },
  {
    imageClassName: 'image-4',
    title: 'PPO SYSTEM',
    description:
      'The Planning and Development Office (PDO) Investment Programming System is a digital platform designed to streamline the planning, prioritization, and monitoring of development projects. It centralizes project data, improves transparency, and supports data-driven decision-making for efficient resource allocation.',
    designs: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800'],
  },
];

const portraitUrl = new URL('./bg design/formal.png', import.meta.url).href;
const cvUrl = new URL('../SEPTIMO-RESUME.pdf', import.meta.url).href;

export default function App() {
  const sectionRefs = useRef({});
  const projectCardRefs = useRef([]);
  const trackRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState(() => new Set(['home']));
  const [activeSection, setActiveSection] = useState('home');
  const [projectIndex, setProjectIndex] = useState(featuredProjects.length); // Start at second set
  const [projectOffset, setProjectOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Create 3 sets for infinite scrolling
  const displayProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];

  const bindSectionRef = (sectionId) => (element) => {
    sectionRefs.current[sectionId] = element;
  };

  const bindProjectCardRef = (cardIndex) => (element) => {
    projectCardRefs.current[cardIndex] = element;
  };

  useEffect(() => {
    document.title = 'Grace | Portfolio';

    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute(
      'content',
      'Computer Engineering graduating student and UI/UX designer based in the Philippines with frontend, mobile, and IoT experience.'
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((currentSections) => {
          const nextSections = new Set(currentSections);

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              nextSections.add(entry.target.id);
            }
          });

          return nextSections;
        });
      },
      {
        threshold: 0.2,
      }
    );

    sectionOrder.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      let currentSection = '';

      sectionOrder.forEach((sectionId) => {
        const element = sectionRefs.current[sectionId];

        if (!element) {
          return;
        }

        const top = element.offsetTop - 140;
        const height = element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || featuredProjects.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setIsTransitioning(true);
      setProjectIndex((currentIndex) => currentIndex + 1);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, []);

  // Reset logic for infinite scroll
  useEffect(() => {
    if (projectIndex === featuredProjects.length * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setProjectIndex(featuredProjects.length);
      }, 700); // Wait for CSS transition (0.65s) to finish
      return () => clearTimeout(timeout);
    }
  }, [projectIndex]);

  useEffect(() => {
    const trackElement = trackRef.current;
    const projectCards = projectCardRefs.current.filter(Boolean);

    if (!trackElement || projectCards.length === 0) {
      return undefined;
    }

    const updateProjectOffset = () => {
      const cardWidth = projectCards[0].offsetWidth;
      const gapValue = parseFloat(window.getComputedStyle(trackElement).gap) || 0;
      const containerWidth = trackElement.parentElement.getBoundingClientRect().width;
      const offset = (cardWidth + gapValue) * projectIndex - (containerWidth - cardWidth) / 2;
      setProjectOffset(offset);
    };

    updateProjectOffset();
    window.addEventListener('resize', updateProjectOffset);

    return () => {
      window.removeEventListener('resize', updateProjectOffset);
    };
  }, [projectIndex]);

  const sectionClassName = (baseClassName, sectionId) =>
    `${baseClassName} reveal${visibleSections.has(sectionId) ? ' is-visible' : ''}`;

  return (
    <>
      <BackgroundLayers />

      <SiteHeader navigationItems={navigationItems} activeSection={activeSection} />

      <main>
        <HeroSection
          sectionRef={bindSectionRef('home')}
          className={sectionClassName('section hero', 'home')}
        />

        <AboutSection
          sectionRef={bindSectionRef('about')}
          className={sectionClassName('section about slide-bg', 'about')}
          socialLinks={socialLinks}
          aboutHighlights={aboutHighlights}
          portraitUrl={portraitUrl}
          cvUrl={cvUrl}
        />

        <TechStackShowcase
          sectionRef={bindSectionRef('tech-stack')}
          className={sectionClassName('section tech-stack-showcase slide-bg', 'tech-stack')}
        />

        <ProjectsSection
          sectionRef={bindSectionRef('projects')}
          className={sectionClassName('section portfolio slide-bg', 'projects')}
          displayProjects={displayProjects}
          projectOffset={projectOffset}
          trackRef={trackRef}
          bindProjectCardRef={bindProjectCardRef}
          projectIndex={projectIndex}
          isTransitioning={isTransitioning}
          onProjectClick={setSelectedProject}
        />

        <ContactSection
          sectionRef={bindSectionRef('contact')}
          className={sectionClassName('section contact', 'contact')}
        />
      </main>

      <SiteFooter />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}