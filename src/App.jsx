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
    designs: [
      { src: dormDashboard, title: 'Dashboard Overview', description: 'A high-level view of available rooms, monthly revenue, and recent activity.' },
      { src: dormRooms, title: 'Rooms Management', description: 'Interface for managing building layouts, room capacity, and electric bill splitting.' },
      { src: dormTenants, title: 'Tenants Management', description: 'Track tenant accounts, assigned rooms, and outstanding payment status.' },
      { src: dormPayments, title: 'Payments Review Queue', description: 'Admin dashboard for reviewing tenant receipt uploads and verifying payments.' },
      { src: dormMaintenance, title: 'Maintenance Management', description: 'Track tenant repair requests and monitor room maintenance status.' },
      { src: dormReports, title: 'Financial & Occupancy Reports', description: 'Generate detailed dues status reports and room occupancy statistics.' },
      { src: dormUsers, title: 'Users Management', description: 'Manage system access levels, tenant passwords, and administrative accounts.' }
    ],
  },
  {
    imageClassName: 'image-2',
    title: 'H2Know Mobile Application',
    description:
      'A Flutter and Firebase mobile app for water monitoring, notifications, and real-time user awareness.',
    designs: [
      { src: h2knowSignin, title: 'Secure Sign In', description: 'Authentication screen with email and Google Sign-In support.' },
      { src: h2knowWelcome, title: 'Welcome Tutorial', description: 'Onboarding screen explaining the mobile-based water quality monitoring system.' },
      { src: h2knowDashboard, title: 'Live Dashboard', description: 'Real-time monitoring interface displaying vital water metrics like TDS, Temp, Turbidity, pH, DO, and ORP.' },
      { src: h2knowResult, title: 'Results Analysis', description: 'Detailed breakdown of raw sensor data compared against acceptable threshold ranges to determine compliance.' },
      { src: h2knowSaveResult, title: 'Historical Records', description: 'Archive of previous water quality readings categorized by testing location and date.' },
      { src: h2knowMenu, title: 'Application Menu', description: 'Quick access to profile settings, saved results, and device configuration.' },
      { src: h2knowUserManual, title: 'Built-in Manual', description: 'In-app documentation providing users with setup instructions and device connectivity guides.' },
      { src: h2knowWifiSetup, title: 'Device Provisioning', description: 'Step-by-step interface for connecting the ESP32 hardware to a local Wi-Fi network.' },
      { src: h2knowOverview, title: 'System Overview', description: 'A consolidated view of device connectivity status and overall water compliance score.' },
      { src: h2knowDashboardOnline, title: 'Online Monitoring', description: 'The main dashboard interface actively syncing live data from the hardware sensors.' }
    ],
  },
  {
    imageClassName: 'image-3',
    title: 'Video Streaming Website',
    description:
      'A web-based streaming platform with video upload and playback features, built with responsive layouts and smooth interactions.',
    designs: [
      { src: strikeflixWatch, title: 'Video Player Interface', description: 'A fully-featured video playback screen with episode navigation and layout toggles.' },
      { src: strikeflixRegister, title: 'User Registration', description: 'A clean, distraction-free sign-up form customized with the brand\'s vibrant yellow accent.' },
      { src: strikeflixLogin, title: 'Engaging Login Screen', description: 'Authentication page featuring a dynamic, high-quality anime background to immerse users.' }
    ],
  },
  {
    imageClassName: 'image-4',
    title: 'PPO SYSTEM',
    description:
      'The Planning and Development Office (PDO) Investment Programming System is a digital platform designed to streamline the planning, prioritization, and monitoring of development projects. It centralizes project data, improves transparency, and supports data-driven decision-making for efficient resource allocation.',
    designs: [
      { src: ppoDashboard, title: 'Investment Dashboard', description: 'Visual analytics featuring a total investment cost distribution chart and project status summaries.' },
      { src: ppoInstitutes, title: 'Institute Directory', description: 'Categorized list of university institutes and their respective number of active projects.' },
      { src: ppoCompleteList, title: 'Complete Project Masterlist', description: 'A comprehensive table tracking all projects, fund sources, implementation periods, and budgets.' },
      { src: ppoAccounts, title: 'Account Management', description: 'Administrative view for managing user accounts and institute assignments.' },
      { src: ppoEvaluation, title: 'Project Evaluation', description: 'Interface for reviewing proposed projects, tracking readiness, and updating status from proposed to evaluated.' }
    ],
  },
];

import h2knowSignin from './images/h2know/signin.png';
import h2knowWelcome from './images/h2know/welcome.png';
import h2knowDashboard from './images/h2know/dashboard.png';
import h2knowResult from './images/h2know/result.png';
import h2knowSaveResult from './images/h2know/save-result.png';
import h2knowMenu from './images/h2know/menu.png';
import h2knowUserManual from './images/h2know/user-manual.png';
import h2knowWifiSetup from './images/h2know/wifi-setup.png';
import h2knowOverview from './images/h2know/overview.png';
import h2knowDashboardOnline from './images/h2know/dashboard-online.png';

import strikeflixWatch from './images/strikeflix/watch.png';
import strikeflixRegister from './images/strikeflix/register.png';
import strikeflixLogin from './images/strikeflix/login.png';

import dormDashboard from './images/dormitory/dashboard.png';
import dormRooms from './images/dormitory/rooms.png';
import dormTenants from './images/dormitory/tenants.png';
import dormPayments from './images/dormitory/payments.png';
import dormMaintenance from './images/dormitory/maintenance.png';
import dormReports from './images/dormitory/reports.png';
import dormUsers from './images/dormitory/users.png';

import ppoDashboard from './images/ppo/dashboard.png';
import ppoInstitutes from './images/ppo/institutes.png';
import ppoCompleteList from './images/ppo/complete-list.png';
import ppoAccounts from './images/ppo/accounts.png';
import ppoEvaluation from './images/ppo/evaluation.png';

import portraitUrl from './bg design/formal.png';
import cvUrl from '../SEPTIMO-RESUME.pdf';

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