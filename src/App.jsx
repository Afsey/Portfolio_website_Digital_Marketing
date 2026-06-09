import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  ExternalLink, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Check, 
  MapPin, 
  X, 
  Globe, 
  MousePointer, 
  Menu, 
  ChevronRight, 
  Clock, 
  TrendingUp, 
  Layers, 
  PenTool, 
  Video, 
  Sparkles, 
  Zap,
  Mail,
  ArrowUp,
  MessageCircle,
  Share2
} from 'lucide-react';
import myProfileImg from './assets/Hero_Section_myimage.jpeg';

// Custom SVG Brand Icons since Lucide v1.0.0 removed them
const Instagram = ({ size = 24, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


// 7 Projects Data with rich high-saturation color accents
const projectsData = [
  {
    id: 'adzum',
    title: 'AdzumGlobal',
    category: 'Wordpress Website Design',
    accent: 'adzum',
    icon: Globe,
    desc: 'Developed a 15 page wordpress website for a tax advisor company in dubai. Website is optimized for SEO and integrated various plugins.',
    fullDesc: 'For AdzumGlobal, the objective was to transform their online digital presence into a conversion-oriented powerhouse. I designed and architected a premium responsive WordPress website, paying high attention to lightweight assets, clean UX flow, and standard search engine optimization guidelines.',
    goals: 'Improve loading speed under 1.5 seconds, overhaul visual branding, and double lead generation capabilities.',
    strategy: [
      'Engineered a lightweight custom theme using page builder optimization.',
      'Implemented advanced caching, next-gen image formats, and global CDN delivery.',
      'Designed high-converting landing pages with psychological CTA positioning.',
      'Conducted extensive technical SEO audit including Schema markup and page structure.'
    ],
    metrics: [
      { label: 'Google Page Speed Insight', value: '80+' },
      { label: 'More Lead Gen on Landing Page', value: '100%' },
      { label: 'Increased Website Opening Speed', value: '50%' }
    ]
  },
  {
    id: 'synops',
    title: 'Synops Labs',
    category: 'Complete Digital Marketing',
    accent: 'synops',
    icon: TrendingUp,
    desc: 'Implemented marketing strategy for services like AI WhatsApp Automation, AI content creation, AI workflow management, AI business processes, Custom CRM, and AI implementation.',
    fullDesc: 'At Synops Labs, I spearheaded the complete digital marketing strategy from scratch. We focused on positioning and marketing their core services, including AI WhatsApp Automation, AI content creation, AI workflow management, AI business process optimization, Custom CRM setups, and enterprise AI implementations.',
    goals: 'Scale lead acquisition velocity, improve conversion rates for AI products, and maximize overall marketing performance.',
    strategy: [
      'Built targeted search and display campaigns for AI WhatsApp Automation solutions.',
      'Created content marketing funnels explaining AI workflow and process optimization.',
      'Configured CRM lead tracking pipelines to improve closing rates for enterprise accounts.',
      'Automated follow-up and booking workflows for AI implementation inquiries.'
    ],
    metrics: [
      { label: 'More Leads Generated', value: '40%' },
      { label: 'Meetings Booked', value: '30+' },
      { label: 'Increase in Overall Marketing Growth', value: '68%' }
    ]
  },
  {
    id: 'neoverse',
    title: 'Neoverse',
    category: 'Website built by Webflow',
    accent: 'neoverse',
    icon: Layers,
    desc: 'Architected and built a futuristic, fully animated Web3-inspired website in Webflow featuring smooth layouts, parallax elements, and micro-interactions.',
    fullDesc: 'Neoverse demanded a modern visual aesthetic that reflects the future of Web3. Utilizing Webflow as the core engine, I built a highly responsive website complete with complex layout interactions, custom JavaScript modules, and dynamic CMS frameworks to enable easy ongoing updates.',
    goals: 'Deliver a breathtaking high-end visual design, maintain 95+ Lighthouse performance, and drive immediate call-to-action button clicks.',
    strategy: [
      'Created custom scroll-triggered parallax sections and smooth page transitions.',
      'Integrated lightweight animated assets and responsive SVG visuals.',
      'Developed modular CMS structures for direct portfolio items and news updates.',
      'Injected custom CSS triggers to manage complex interactive scroll timelines.'
    ],
    metrics: [
      { label: 'Lighthouse Rating', value: '98%' },
      { label: 'Unique Site Visitors', value: '15k+' },
      { label: 'Action Button Click Rate', value: '+52%' }
    ]
  },
  {
    id: 'gameson',
    title: 'Gameson',
    category: 'Meta Ads - Campaign for Events & Store',
    accent: 'gameson',
    icon: Sparkles,
    desc: 'Ran targeted Meta ad campaigns for events and store visits for Gameson, a premium gaming experience center where you play various games and activities.',
    fullDesc: 'Gameson is a high-end gaming experience center where players come to play various games and engage in gaming activities. I ran hyper-targeted Meta ad campaigns to promote their physical location and community events, using lead generation strategies to bring gamers directly through the door.',
    goals: 'Drive foot traffic to the physical store during events, increase overall store sales, and maintain recurring player engagement.',
    strategy: [
      'Developed and optimized Meta lead generation ad sets for major tournaments and events.',
      'Implemented local awareness campaigns targeting active gamers in the immediate area.',
      'A/B tested creative hooks showcasing gaming stations and competitive events.',
      'Maintained retargeting campaigns to turn one-time attendees into recurring in-store players.'
    ],
    metrics: [
      { label: 'Instore Visits via Lead Gen Ads', value: '100+' },
      { label: 'Sales Increase', value: '20%' },
      { label: 'Recurring Instore Visits', value: 'Maintained' }
    ]
  },
  {
    id: 'equestrian',
    title: 'Equestrian Oman',
    category: 'Social Media & Graphic Design',
    accent: 'equestrian',
    icon: PenTool,
    desc: 'Elevated brand aesthetic for Equestrian Oman, a luxury equestrian organization, by producing premium social media layouts and targeted ad creatives.',
    fullDesc: 'For Equestrian Oman, a premier luxury equestrian organization, I redesigned their digital visual presence. I developed high-end minimalist graphic assets for their social media grids and produced custom layouts optimized for paid advertising campaigns.',
    goals: 'Establish a luxury brand aesthetic, design high-quality social assets, and create compelling ad graphics.',
    strategy: [
      'Designed premium editorial-style graphic templates for social media grids.',
      'Produced custom high-impact visual assets optimized for regional ad campaigns.',
      'Curated cohesive color palettes reflecting luxury equestrian branding guidelines.'
    ],
    metrics: [
      { label: 'Social Media Assets Created', value: '30+' },
      { label: 'Assets Created for Ads', value: '10+' }
    ]
  },
  {
    id: 'adpersona',
    title: 'Adpersona',
    category: 'Script Writing & Copywriting',
    accent: 'adpersona',
    icon: Clock,
    desc: 'Wrote high-retention video script hooks and psychological copywriting for sales assets, landing pages, and email marketing funnels.',
    fullDesc: 'Words sell. At Adpersona, I engineered conversion copywriting frameworks designed to drive immediate user action. By studying direct consumer psychology, I scripted highly engaging hooks and long-form scripts for promotional videos and email sequences that dramatically increased response rates.',
    goals: 'Maximize audience script retention rates, generate immediate click-throughs from ad scripts, and script compelling direct-response copy.',
    strategy: [
      'Utilized proven hook-writing formulas (e.g. AIDA, PAS) for video scripts.',
      'Wrote high-retention scripts for ads, focusing heavily on strong first-3-second retention.',
      'Created persuasive email sequences optimized for open rates and conversions.',
      'Drafted clear sales landing page copy emphasizing immediate value propositions.'
    ],
    metrics: [
      { label: 'Average Video Retention', value: '+65%' },
      { label: 'Scripted Video Views', value: '100k+' },
      { label: 'Email Funnel CTR', value: '+28%' }
    ]
  },
  {
    id: 'growx',
    title: 'Growx',
    category: 'Scriptwriting & Content Creation',
    accent: 'growx',
    icon: Video,
    desc: 'Produced high-performance vertical video scripts and rapid-hook creative blueprints that successfully scaled direct-to-consumer digital brands.',
    fullDesc: 'For Growx, my objective was to establish a high-performance short-form content factory. I developed and scripted custom visual hooks, editing blueprints, and direct-to-camera concepts that allowed direct-to-consumer brands to organically capture viral attention and scale traffic.',
    goals: 'Drive high-volume organic brand awareness, build a repeatable viral script workflow, and increase click-through interest to target brands.',
    strategy: [
      'Conducted exhaustive research on trending hooks and vertical visual styles.',
      'Scripted 100+ short-form vertical reels optimized for rapid social algorithm loops.',
      'Established visual editing guidelines to match fast-paced, high-engagement script tempos.',
      'Monitored direct viewer comments and feedback to iterate script models daily.'
    ],
    metrics: [
      { label: 'Combined Video Views', value: '5M+' },
      { label: 'Brand Mentions Scaled', value: '+410%' },
      { label: 'Video Scripts Authored', value: '120+' }
    ]
  },
  {
    id: 'marketingwithafsal',
    title: 'Marketingwithafsal',
    category: 'Personal Branding & SEO',
    accent: 'marketingwithafsal',
    icon: Globe,
    desc: 'Created a personal branding website using WordPress and Elementor. Optimized for organic SEO, AI search engines (AI SEO), and GEO, ranking key search queries in Google, Yahoo, and Bing.',
    fullDesc: 'As a Freelance Digital Marketer in Trivandrum, I built my personal branding platform using WordPress, Elementor, WP Forms, and custom plugins. I implemented advanced SEO, AI SEO, and Generative Engine Optimization (GEO) frameworks, successfully ranking localized target keywords in Google, Yahoo, and Bing search results (last checked Dec 2025), as well as Google Image search.',
    goals: 'Build an authoritative personal branding hub, achieve top search rankings for local digital marketing services, and secure visibility in generative AI search engines.',
    strategy: [
      'Built a fully responsive portfolio site using WordPress, Elementor Pro, and contact modules.',
      'Optimized target keywords for high rankings in Google, Yahoo, and Bing across text and image search.',
      'Integrated schema markup and structured data to ensure high indexability by AI search engines (GEO).',
      'Leveraged organic search optimization to generate high-intent inbound clients.'
    ],
    metrics: [
      { label: 'Organic Clients Acquired', value: '5+' },
      { label: 'Visible in AI Search / GEO', value: 'Showed' },
      { label: 'LinkedIn Ranked in Google', value: 'AFSAL MUHAMMAD N' },
      { label: 'Organic Visitor Growth', value: 'Engagement' }
    ]
  }
];

// Partnered Companies
const companies = [
  { name: 'AdzumGlobal', color: 'bg-indigo-600' },
  { name: 'Synops Labs', color: 'bg-emerald-600' },
  { name: 'Marketingwithafsal', color: 'bg-blue-600' },
  { name: 'Neoverse', color: 'bg-orange-600' },
  { name: 'Gameson', color: 'bg-red-600' },
  { name: 'Equsterian oman', color: 'bg-amber-600' },
  { name: 'Adpersona', color: 'bg-pink-600' },
  { name: 'Growx', color: 'bg-teal-600' }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  
  // Custom Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Floating widgets states
  const [socialsExpanded, setSocialsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll position & direction refs
  const lastScrollY = useRef(0);

  // Scroll reveal references
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const canvasRef = useRef(null);

  const [row2Active, setRow2Active] = useState(false);
  const [row3Active, setRow3Active] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  // 1. Sticky Header scroll listener (sticks when scrolling down, hides when scrolling up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle back-to-top button visibility
      if (currentScrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Always show header at the very top of the page
      if (currentScrollY < 50) {
        setHeaderVisible(true);
        setScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY.current) {
        // User is scrolling down -> make header stick (visible)
        setHeaderVisible(true);
      } else {
        // User is scrolling up -> header disappears (hidden)
        setHeaderVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Interactive Canvas 3D Grid Background Animation (strictly inside Hero, dark tiles, red/pink/violet backlight)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Grid size setup (approx 72px square plates)
    const cellSize = 72;
    const gap = 5;
    const depth = 5; // Bevel depth for 3D extrusion
    let cols = Math.ceil(width / cellSize);
    let rows = Math.ceil(height / cellSize);

    // Smooth cursor lag/easing values
    let targetMouse = { x: width / 2, y: height / 2, active: false };
    let currentMouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
      targetMouse.active = true;
      currentMouse.active = true;
    };

    const handleMouseLeave = () => {
      targetMouse.active = false;
    };

    // Listen to mouse events on the window, but map coordinates locally
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    // Animation loop
    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      time += 1;

      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      // Apply ease-lag to cursor coordinates for fluid motion
      if (targetMouse.active) {
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;
      } else {
        // Ambient slow center floating when cursor is inactive
        const idleX = width / 2 + Math.sin(time * 0.006) * (width * 0.15);
        const idleY = height / 2 + Math.cos(time * 0.008) * (height * 0.15);
        currentMouse.x += (idleX - currentMouse.x) * 0.03;
        currentMouse.y += (idleY - currentMouse.y) * 0.03;
      }

      // STEP 1: Draw a dark base background first
      ctx.fillStyle = '#0b0c10'; // Premium dark base color
      ctx.fillRect(0, 0, width, height);

      // STEP 2: Draw the vibrant backlight centered at the mouse coordinates
      const gradientRadius = 320;
      const lightGrad = ctx.createRadialGradient(
        currentMouse.x,
        currentMouse.y,
        0,
        currentMouse.x,
        currentMouse.y,
        gradientRadius
      );

      // Saturated Red -> Pink -> Violet Gradient matching overall theme
      lightGrad.addColorStop(0, 'rgba(239, 68, 68, 0.45)');   // Saturated Red
      lightGrad.addColorStop(0.35, 'rgba(236, 72, 153, 0.35)'); // Saturated Pink
      lightGrad.addColorStop(0.7, 'rgba(124, 58, 237, 0.22)');  // Saturated Violet/Indigo
      lightGrad.addColorStop(1, 'rgba(11, 12, 16, 0)');          // Fade to black

      ctx.fillStyle = lightGrad;
      ctx.beginPath();
      ctx.arc(currentMouse.x, currentMouse.y, gradientRadius, 0, Math.PI * 2);
      ctx.fill();

      // STEP 3: Draw beveled dark charcoal-black squares over the glow
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const cellCenterX = c * cellSize + cellSize / 2;
          const cellCenterY = r * cellSize + cellSize / 2;

          // Vector distance to cursor/light
          const dx = currentMouse.x - cellCenterX;
          const dy = currentMouse.y - cellCenterY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 320;
          const proximity = Math.max(0, 1 - dist / maxDist); // 1.0 at light, 0.0 far away

          // Sine-wave floating variables with speed acceleration based on cursor proximity
          const localTime = time * 0.015 + (c * 0.3) + (r * 0.25) + (proximity * 2.5);

          // Looping fluid floats
          const fx = Math.sin(localTime) * (2.0 + proximity * 7.0);
          const fy = Math.cos(localTime * 0.8) * (2.0 + proximity * 7.0);

          // 3D Parallax Tilt (plates tilt slightly toward/away from backlight)
          const tiltX = -(dx / maxDist) * (4 + proximity * 8);
          const tiltY = -(dy / maxDist) * (4 + proximity * 8);

          // Plate bounds
          const px = c * cellSize + gap / 2 + fx + tiltX;
          const py = r * cellSize + gap / 2 + fy + tiltY;
          const w = cellSize - gap;
          const h = cellSize - gap;

          // Shaded bottom bevel (3D side)
          ctx.fillStyle = `rgb(${Math.max(5, 12 - Math.floor(proximity * 6))}, ${Math.max(5, 12 - Math.floor(proximity * 6))}, ${Math.max(5, 14 - Math.floor(proximity * 6))})`;
          ctx.beginPath();
          ctx.moveTo(px, py + h);
          ctx.lineTo(px + w, py + h);
          ctx.lineTo(px + w + depth, py + h + depth);
          ctx.lineTo(px + depth, py + h + depth);
          ctx.closePath();
          ctx.fill();

          // Shaded right bevel (3D side)
          ctx.fillStyle = `rgb(${Math.max(8, 16 - Math.floor(proximity * 8))}, ${Math.max(8, 16 - Math.floor(proximity * 8))}, ${Math.max(8, 18 - Math.floor(proximity * 8))})`;
          ctx.beginPath();
          ctx.moveTo(px + w, py);
          ctx.lineTo(px + w + depth, py + depth);
          ctx.lineTo(px + w + depth, py + h + depth);
          ctx.lineTo(px + w, py + h);
          ctx.closePath();
          ctx.fill();

          // Save canvas context to draw front faces
          ctx.save();

          // Keep the front face dark and uniform (no cursor/torch highlight on top)
          const faceColorValue = 12; // A constant very dark charcoal color
          ctx.fillStyle = `rgb(${faceColorValue}, ${faceColorValue}, ${faceColorValue + 1})`;
          
          ctx.beginPath();
          ctx.rect(px, py, w, h);
          ctx.fill();

          // A constant very faint border to keep plates visually separated, without proximity highlight
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 3. Scroll Reveal observer logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === row2Ref.current) {
            setRow2Active(true);
          } else if (entry.target === row3Ref.current) {
            setRow3Active(true);
          } else if (entry.target === aboutRef.current) {
            setAboutActive(true);
          } else if (entry.target === contactRef.current) {
            setContactActive(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (row2Ref.current) observer.observe(row2Ref.current);
    if (row3Ref.current) observer.observe(row3Ref.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Contact Form submit logic using free FormSubmit API
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formName.trim() && formEmail.trim() && formMessage.trim()) {
      setFormSubmitted(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/marketingwithafsal@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formName,
            email: formEmail,
            message: formMessage,
            _subject: `New Message from Portfolio: ${formName}`
          })
        });
        if (response.ok) {
          setFormName('');
          setFormEmail('');
          setFormMessage('');
        }
      } catch (err) {
        console.error("Form submission error:", err);
      } finally {
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    }
  };

  // Smooth scroll helper
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="app-container">
        {/* Sticky Header with Scroll Direction Physics & Mobile Capsule design */}
        <header className={`header ${scrolled ? 'scrolled' : ''} ${headerVisible ? 'header-visible' : 'header-hidden'}`}>
          <div className="container header-inner">
            <a href="#" className="logo-text" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              {/* Lightning symbol replaced with tiny circular picture avatar */}
              <img src={myProfileImg} alt="Afsal Muhammad N" className="header-avatar" />
              AFSAL MUHAMMAD N.
            </a>

            {/* Desktop Menu */}
            <ul className="nav-menu">
              <li>
                <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Contact
                </a>
              </li>
            </ul>

            <a href="#contact" className="contact-cta" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Let's Talk
            </a>

            {/* Mobile menu trigger */}
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={24} />
            </button>

            {/* Mobile Floating Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="mobile-dropdown">
                <a href="#home" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                <a href="#projects" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
                <a href="#about" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a>
                <a href="#contact" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          {/* Interactive Grid Canvas Container (Contained strictly within Hero, Dark Theme layout) */}
          <div className="hero-canvas-container">
            <canvas ref={canvasRef} className="hero-canvas"></canvas>
          </div>
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="tagline-badge">
                Digital Marketing Specialist
              </div>
              {/* Updated Copywriting Title */}
              <h1 className="hero-title">
                Beyond Marketing, <span>I Build Brand Success.</span>
              </h1>
              {/* Updated Copywriting Description */}
              <p className="hero-desc">
                Hi, I'm Afsal Muhammad N. I help ambitious brands build authority, script high performance content, and scale their customer acquisition funnels through precise, result oriented digital marketing.
              </p>
              <div className="hero-actions">
                {/* Updated button text */}
                <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                  View Works Done
                  <ArrowRight size={16} />
                </a>
                <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Let's Connect
                </a>
              </div>
            </div>
            
            <div className="hero-right">
              {/* Updated to a clean, minimal rounded rectangular tab frame */}
              <div className="profile-frame">
                <div className="profile-img-container">
                  <img 
                    src={myProfileImg} 
                    alt="Afsal Muhammad N" 
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Looping Company Ticker Section */}
        <section className="company-marquee-section">
          <div className="container company-container">
            <div className="company-title-wrapper">
              <h3>Partnered Brands</h3>
              <p>Driving marketing initiatives and digital growth for leading companies and agencies.</p>
            </div>
            
            <div className="horizontal-marquee-viewport">
              <div className="horizontal-marquee-track">
                {[...companies, ...companies, ...companies, ...companies].map((c, index) => (
                  <div key={index} className="company-logo-card">
                    <span className={`dot ${c.color}`} style={{ width: 8, height: 8, borderRadius: '50%', display: 'inline-block' }}></span>
                    {c.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Custom Grid with fade scroll transitions */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-header">
              <div className="section-subtitle">Portfolio</div>
              <h2 className="section-title">Featured Works</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '0.5rem' }}>
                Explore real results across Web Design, Social Campaigns, PPC advertising, Copywriting, and Video Creative Scripting.
              </p>
            </div>

            {/* 3x3 Project Card Grid Layout */}
            <div className="projects-grid">
              
              {/* ROW 1: Projects 1, 2, 3 (Always Visible on enter) */}
              <div className="project-row scroll-reveal-row active">
                {projectsData.slice(0, 3).map((project) => {
                  const IconComponent = project.icon;
                  return (
                    <article key={project.id} className={`project-tab card-${project.accent}`}>
                      <div className="project-thumb">
                        <div className="project-thumb-placeholder">
                          <IconComponent size={40} strokeWidth={1.5} />
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '0.5rem', opacity: 0.8 }}>
                            {project.title} Case Study
                          </span>
                        </div>
                        <div className="project-category">{project.category}</div>
                      </div>
                      <div className="project-content">
                        <h3 className="project-tab-title">{project.title}</h3>
                        <p className="project-tab-desc">{project.desc}</p>
                        <div 
                          className="project-readmore"
                          onClick={() => setActiveModal(project)}
                        >
                          Read Case Study
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* ROW 2: Projects 4, 5, 6 (Fades/Slides up when user scrolls down) */}
              <div ref={row2Ref} className={`project-row scroll-reveal-row ${row2Active ? 'active' : ''}`}>
                {projectsData.slice(3, 6).map((project) => {
                  const IconComponent = project.icon;
                  return (
                    <article key={project.id} className={`project-tab card-${project.accent}`}>
                      <div className="project-thumb">
                        <div className="project-thumb-placeholder">
                          <IconComponent size={40} strokeWidth={1.5} />
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '0.5rem', opacity: 0.8 }}>
                            {project.title} Case Study
                          </span>
                        </div>
                        <div className="project-category">{project.category}</div>
                      </div>
                      <div className="project-content">
                        <h3 className="project-tab-title">{project.title}</h3>
                        <p className="project-tab-desc">{project.desc}</p>
                        <div 
                          className="project-readmore"
                          onClick={() => setActiveModal(project)}
                        >
                          Read Case Study
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* ROW 3: Project 7 & 8 (Fades/Slides up when user scrolls further) */}
              <div ref={row3Ref} className={`project-row scroll-reveal-row ${row3Active ? 'active' : ''}`}>
                {projectsData.slice(6, 8).map((project) => {
                  const IconComponent = project.icon;
                  return (
                    <article key={project.id} className={`project-tab card-${project.accent}`}>
                      <div className="project-thumb">
                        <div className="project-thumb-placeholder">
                          <IconComponent size={40} strokeWidth={1.5} />
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '0.5rem', opacity: 0.8 }}>
                            {project.title} Case Study
                          </span>
                        </div>
                        <div className="project-category">{project.category}</div>
                      </div>
                      <div className="project-content">
                        <h3 className="project-tab-title">{project.title}</h3>
                        <p className="project-tab-desc">{project.desc}</p>
                        <div 
                          className="project-readmore"
                          onClick={() => setActiveModal(project)}
                        >
                          Read Case Study
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Project Details Overlay / Modal */}
        <div className={`modal-overlay ${activeModal ? 'active' : ''}`} onClick={() => setActiveModal(null)}>
          {activeModal && (
            <div 
              className="modal-card" 
              onClick={(e) => e.stopPropagation()}
              style={{ '--modal-accent': `var(--color-${activeModal.accent})` }}
            >
              <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
                <X size={20} />
              </button>

              <div className="modal-hero">
                <div className="modal-hero-content">
                  <div className="modal-hero-badge">{activeModal.category}</div>
                  <h2>{activeModal.title}</h2>
                </div>
              </div>

              <div className="modal-body">
                <div>
                  <h4 className="modal-section-title">
                    <Check size={18} style={{ color: `hsl(var(--color-${activeModal.accent}))` }} />
                    Campaign Highlights & Growth Metrics
                  </h4>
                  <div className="modal-metrics-grid">
                    {activeModal.metrics.map((metric, i) => (
                      <div key={i} className="metric-card" style={{ '--modal-accent': `var(--color-${activeModal.accent})` }}>
                        <div className="metric-val">{metric.value}</div>
                        <div className="metric-lbl">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="modal-section-title">
                    <Check size={18} style={{ color: `hsl(var(--color-${activeModal.accent}))` }} />
                    Overview & Key Challenges
                  </h4>
                  <p>{activeModal.fullDesc}</p>
                </div>

                <div>
                  <h4 className="modal-section-title">
                    <Check size={18} style={{ color: `hsl(var(--color-${activeModal.accent}))` }} />
                    Main Objective
                  </h4>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    "{activeModal.goals}"
                  </p>
                </div>

                <div>
                  <h4 className="modal-section-title">
                    <Check size={18} style={{ color: `hsl(var(--color-${activeModal.accent}))` }} />
                    Growth Implementation Strategy
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    {activeModal.strategy.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* About & Location Section */}
        <section id="about" className="about-section">
          <div ref={aboutRef} className={`container about-grid scroll-reveal-row ${aboutActive ? 'active' : ''}`}>
            
            <div className="about-left">
              <div className="bubble-badge">Know Me</div>
              <h2 className="section-title">Why Afsal Muhammad</h2>
              
              <div className="about-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p className="about-text" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.35 }}>
                  How do I position myself as a Digital Marketing expert?
                </p>
                <p className="about-text" style={{ color: 'var(--text-secondary)' }}>
                  In today's digital landscape, every business needs to stand out. That's where I come in! As a passionate digital marketer, I specialize in crafting strategies that don't just look good, but deliver tangible results.
                </p>
                <p className="about-text" style={{ color: 'var(--text-secondary)' }}>
                  I've got a deep understanding of SEO strategies, not just for improving search rankings and click-through rates, but also for optimizing your website for generative engines and AI.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(37, 99, 235, 0.05)', borderLeft: '4px solid #2563eb', padding: '0.85rem 1.25rem', borderRadius: '8px', margin: '0.5rem 0' }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>✅</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>This means higher traffic and better performance where it counts.</span>
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>My expertise covers:</h4>
                  <div className="motion-skills-container">
                    {[
                      { name: 'Social Media Marketing', color: 'purple', anim: '1' },
                      { name: 'SEO & Website Optimization', color: 'green', anim: '2' },
                      { name: 'Google Ads & Paid Advertising', color: 'blue', anim: '3' },
                      { name: 'Content and Email Marketing', color: 'rose', anim: '4' },
                      { name: 'Also a Freelancer', color: 'teal', anim: '5' }
                    ].map((skill, index) => (
                      <div 
                        key={index} 
                        className={`motion-bubble-skill bubble-skill-${skill.color} bubble-anim-${skill.anim}`}
                      >
                        <span style={{ fontSize: '1rem' }}>✨</span>
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="about-text" style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                  Let's turn your brand into an unforgettable experience that people recall, engage with, and eagerly buy into. Ready to Transform Your Online Presence?
                </p>
              </div>
            </div>

            <div className="about-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Creative Location Card */}
              <div className="location-card">
                <div className="location-card-header">
                  <div className="location-icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="location-title">Current Base</h4>
                    <p className="location-subtitle">Kallambalam, Trivandrum, Kerala, India</p>
                  </div>
                </div>

                {/* Real interactive Google Map embed */}
                <div className="map-canvas-visual">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.670691703698!2d76.7904128!3d8.7709322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ec2c322b7c4d%3A0xbb1a3fa41fb525f2!2sKallambalam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1717396000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Afsal Muhammad N Location Map"
                  ></iframe>
                </div>

                <div className="location-info-footer">
                  <Globe size={14} style={{ color: 'var(--text-tertiary)' }} />
                  <span>Available for global remote contracts and onsite consulting.</span>
                </div>
              </div>

              {/* Personal Website Tab/Card */}
              <div className="website-showcase-card">
                <div className="website-card-header">
                  <div className="website-icon-wrapper">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h4 className="website-title">Official Blog & Agency</h4>
                    <a 
                      href="https://marketingwithafsal.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="website-link"
                    >
                      marketingwithafsal.com
                    </a>
                  </div>
                </div>

                <div className="website-card-body">
                  <p>Access free digital marketing templates, in-depth growth case studies, and book direct consultations.</p>
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <span className="mock-dot red"></span>
                      <span className="mock-dot yellow"></span>
                      <span className="mock-dot green"></span>
                      <div className="mock-address-bar">https://marketingwithafsal.com</div>
                    </div>
                    <div className="browser-body">
                      <div className="mock-hero">
                        <span className="mock-logo">M</span>
                        <div className="mock-lines">
                          <div className="mock-line-long"></div>
                          <div className="mock-line-short"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="website-card-footer">
                  <a 
                    href="https://marketingwithafsal.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="visit-website-btn"
                  >
                    Explore Platform <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div ref={contactRef} className={`container contact-grid scroll-reveal-row ${contactActive ? 'active' : ''}`}>
            
            <div className="contact-left">
              <div className="section-subtitle">Get in touch</div>
              <h2 className="section-title">Let's build something massive.</h2>
              <p>
                Have a campaign to launch, a website to build, or want to scale your brand's organic retention? Drop a message, or redirect directly to my channels below.
              </p>

              <div className="contact-info-card">
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact-item-title">Phone & WhatsApp</div>
                    <div className="contact-item-value">+91 8078873963</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-item-title">Email</div>
                    <div className="contact-item-value">
                      <a href="mailto:marketingwithafsal@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        marketingwithafsal@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="contact-item-title">Location</div>
                    <div className="contact-item-value">Kerala, India</div>
                  </div>
                </div>
              </div>

              {/* Redirection pills to WhatsApp, Instagram, LinkedIn */}
              <div className="social-redirections">
                <a 
                  href="https://wa.me/918078873963" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-redirect-btn btn-whatsapp"
                >
                  <div className="social-redirect-btn-left">
                    <div className="social-brand-icon">
                      <MessageSquare size={16} />
                    </div>
                    <span>Connect on WhatsApp</span>
                  </div>
                  <ExternalLink size={14} className="social-arrow" />
                </a>

                <a 
                  href="https://www.instagram.com/afsalmuhammad.n?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-redirect-btn btn-instagram"
                >
                  <div className="social-redirect-btn-left">
                    <div className="social-brand-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <span>Follow on Instagram</span>
                  </div>
                  <ExternalLink size={14} className="social-arrow" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/afsalmuhammadn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-redirect-btn btn-linkedin"
                >
                  <div className="social-redirect-btn-left">
                    <div className="social-brand-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <span>Connect on LinkedIn</span>
                  </div>
                  <ExternalLink size={14} className="social-arrow" />
                </a>
              </div>
            </div>

            <div className="contact-right-form">
              <h3 className="form-title">Send a Direct Message</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group-grid">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Your Name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="your@email.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-input textarea" 
                    placeholder="Tell me about your project, goals, or schedule a consulting call..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  Send Message
                  <Send size={16} />
                </button>

                {formSubmitted && (
                  <div className="form-success-msg">
                    <Check size={18} />
                    <span>Message received! Thank you, I will get back to you shortly.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-logo">AFSAL MUHAMMAD N.</div>
            <p>Digital Marketing Specialist & Brand Growth Strategist</p>
            
            <ul className="footer-nav">
              <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
              <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a></li>
              <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>

            <div className="footer-divider"></div>
            
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
              &copy; {new Date().getFullYear()} Afsal Muhammad N. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Floating Social Media Expandable FAB on bottom left */}
        <div className={`floating-social-fab ${socialsExpanded ? 'expanded' : ''}`}>
          <div className="fab-options">
            <a 
              href="https://wa.me/918078873963" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="fab-option whatsapp" 
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="tooltip">WhatsApp</span>
            </a>
            <a 
              href="https://www.instagram.com/afsalmuhammad.n?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="fab-option instagram" 
              aria-label="Follow on Instagram"
            >
              <Instagram size={18} />
              <span className="tooltip">Instagram</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/afsalmuhammadn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="fab-option linkedin" 
              aria-label="Connect on LinkedIn"
            >
              <Linkedin size={18} />
              <span className="tooltip">LinkedIn</span>
            </a>
          </div>
          <button 
            className="fab-main-btn" 
            onClick={() => setSocialsExpanded(!socialsExpanded)}
            aria-label="Expand Social Channels"
          >
            <Share2 size={22} className="share-icon" />
            <X size={22} className="close-icon" />
          </button>
        </div>

        {/* Scroll to top button */}
        <button 
          className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
}
