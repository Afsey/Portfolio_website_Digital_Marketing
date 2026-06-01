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
  Zap 
} from 'lucide-react';
import myProfileImg from './assets/Hero_Section_myimage.jpeg';

// 7 Projects Data with custom colored accents, descriptions, case study details, and campaign metrics.
const projectsData = [
  {
    id: 'adzum',
    title: 'AdzumGlobal',
    category: 'Wordpress Website Design',
    accent: 'adzum',
    icon: Globe,
    desc: 'Developed a high-converting, blazing-fast WordPress website optimized for organic SEO, user retention, and enterprise client acquisition.',
    fullDesc: 'For AdzumGlobal, the objective was to transform their online digital presence into a conversion-oriented powerhouse. I designed and architected a premium responsive WordPress website, paying high attention to lightweight assets, clean UX flow, and standard search engine optimization guidelines.',
    goals: 'Improve loading speed under 1.5 seconds, overhaul visual branding, and double lead generation capabilities.',
    strategy: [
      'Engineered a lightweight custom theme using page builder optimization.',
      'Implemented advanced caching, next-gen image formats, and global CDN delivery.',
      'Designed high-converting landing pages with psychological CTA positioning.',
      'Conducted extensive technical SEO audit including Schema markup and page structure.'
    ],
    metrics: [
      { label: 'Page Speed Increase', value: '85%' },
      { label: 'Lead Generation Rate', value: '+120%' },
      { label: 'Reduction in Bounce', value: '45%' }
    ]
  },
  {
    id: 'synops',
    title: 'Synops Labs',
    category: 'Complete Digital Marketing',
    accent: 'synops',
    icon: TrendingUp,
    desc: 'Engineered an omni-channel growth engine spanning SEO strategy, high-intent Google Search campaigns, Meta advertising, and funnel automation.',
    fullDesc: 'At Synops Labs, I spearheaded the complete digital marketing strategy from zero. By combining precision organic SEO with targeted, data-backed pay-per-click (PPC) advertisement campaigns, we constructed a reliable lead acquisition funnel that consistently reduced the client acquisition costs.',
    goals: 'Rapidly scale qualified pipeline traffic, lower the CAC (Customer Acquisition Cost), and establish clear omni-channel attribution.',
    strategy: [
      'Conducted exhaustive keyword research focusing on high-intent transactional terms.',
      'Built and optimized hyper-targeted Meta and Google Ads campaigns.',
      'Designed custom landing pages and set up full A/B testing on ad copies.',
      'Automated nurture email sequences based on user interaction triggers.'
    ],
    metrics: [
      { label: 'Ads ROAS Average', value: '4.8x' },
      { label: 'Qualified Leads', value: '+180%' },
      { label: 'Reduction in CAC', value: '35%' }
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
    category: 'Social Media Marketing',
    accent: 'gameson',
    icon: Sparkles,
    desc: 'Crafted viral short-form video campaigns, custom content calendars, and interactive community activation strategies across major channels.',
    fullDesc: 'For Gameson, the focus was all about community and engagement. I designed a strategic, high-frequency social media blueprint focused on viral vertical reels and YouTube shorts, driving a massive increase in organic reach and scaling their interactive Discord community.',
    goals: 'Build a highly active brand community, increase reels organic reach, and drive loyal users to Discord and product links.',
    strategy: [
      'Developed a high-retention content calendar tailored to gaming culture trends.',
      'Scripted and structured viral-optimized Instagram Reels and YouTube Shorts.',
      'Hosted community-driven tournaments and activation giveaways.',
      'Established highly engaging brand voice interactions across comment sections.'
    ],
    metrics: [
      { label: 'Total Organic Reach', value: '2.1M+' },
      { label: 'Engagement Rate', value: '+320%' },
      { label: 'Discord Members', value: '4,500+' }
    ]
  },
  {
    id: 'equestrian',
    title: 'Equestrian Oman',
    category: 'Social Media & Graphic Design',
    accent: 'equestrian',
    icon: PenTool,
    desc: 'Elevated brand aesthetic for a luxury equestrian organization through high-end minimalist graphics, premium layouts, and regional campaigns.',
    fullDesc: 'Equestrian Oman requested a premium brand identity online. I created a unified digital design guidelines framework, designing high-end minimalist graphics and layouts that appeal directly to luxury equestrian circles in the Middle East, while executing hyper-targeted regional campaigns.',
    goals: 'Reposition the brand aesthetic into the luxury sector, establish premium graphic templates, and boost high-net-worth regional engagement.',
    strategy: [
      'Curated an elegant, minimal visual palette utilizing deep gold and pristine tones.',
      'Designed premium editorial-style graphic templates for Instagram grids.',
      'Managed local and regional targeted advertising campaigns for niche audiences.',
      'Produced custom branding collateral, highlighting elite equestrian events.'
    ],
    metrics: [
      { label: 'Premium Followers', value: '+140%' },
      { label: 'Graphic Assets Crafted', value: '90+' },
      { label: 'Direct Lead Messages', value: '+210%' }
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
  }
];

// Companies Logo loop list
const companies = [
  { name: 'AdzumGlobal', color: 'bg-indigo-500' },
  { name: 'Synops Labs', color: 'bg-emerald-500' },
  { name: 'Marketingwithafsal', color: 'bg-blue-500' },
  { name: 'Neoverse', color: 'bg-orange-500' },
  { name: 'Gameson', color: 'bg-red-500' },
  { name: 'Equsterian oman', color: 'bg-amber-500' },
  { name: 'Adpersona', color: 'bg-pink-500' },
  { name: 'Growx', color: 'bg-teal-500' }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  
  // Custom Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // 1. Sticky Header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Cursor canvas particle trail animation logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const maxParticles = 60;
    let mouse = { x: null, y: null, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Add a couple of particles on mouse move
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 6 + 4,
          // Shift color dynamically
          color: `hsla(${Math.floor(Math.random() * 60 + 200)}, 85%, 60%, ${Math.random() * 0.4 + 0.3})`,
          life: 1.0,
          decay: Math.random() * 0.02 + 0.015
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle trails
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.98;

        if (p.life <= 0 || p.size <= 0.5) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw subtle connecting lines if close enough
      if (particles.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < particles.length - 1; i++) {
          const p1 = particles[i];
          const p2 = particles[i + 1];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * p1.life})`;
            ctx.lineWidth = p1.size * 0.2;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
        ctx.stroke();
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

  // 3. Scroll Reveal / Row-by-row slide-up trigger logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // triggers slightly before it enters the viewport fully
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

  // Contact Form submit logic
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formName.trim() && formEmail.trim() && formMessage.trim()) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormName('');
        setFormEmail('');
        setFormMessage('');
        setFormSubmitted(false);
      }, 5000);
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
      {/* Background aesthetics */}
      <div className="bg-grid-overlay"></div>
      <div className="bg-gradient-glow"></div>
      <div className="bg-gradient-glow-left"></div>

      {/* Dynamic Physics Cursor Trails */}
      <canvas ref={canvasRef} className="cursor-canvas"></canvas>

      <div className="app-container">
        {/* Modern Glassmorphic Header */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="container header-inner">
            <a href="#" className="logo-text" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Zap size={20} className="text-blue-500 fill-blue-500" />
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
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div 
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #e2e8f0',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
              }}
            >
              <a href="#home" style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
              <a href="#projects" style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
              <a href="#about" style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a>
              <a href="#contact" style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="tagline-badge">
                Digital Marketing Specialist
              </div>
              <h1 className="hero-title">
                Crafting High-Growth <span>Digital Strategies.</span>
              </h1>
              <p className="hero-desc">
                Hi, I'm **Afsal Muhammad N**. I help ambitious brands build visual authority, script high-performance content, and scale their customer acquisition funnels through precise, result-oriented digital marketing.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                  View Case Studies
                  <ArrowRight size={16} />
                </a>
                <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Let's Connect
                </a>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="profile-frame">
                <div className="profile-img-container">
                  <img 
                    src={myProfileImg} 
                    alt="Afsal Muhammad N - Digital Marketing Specialist" 
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vertical Looping Company Ticker Section */}
        <section className="company-marquee-section">
          <div className="container company-container">
            <div className="company-title-wrapper">
              <h3>Partnered Brands</h3>
              <p>Driving marketing initiatives and digital growth for leading companies and agencies.</p>
            </div>
            
            {/* The Vertical Looping Marquee container */}
            <div className="vertical-marquee-viewport">
              <div className="vertical-marquee-track">
                {/* Double the list of companies to ensure a seamless vertical loop */}
                {[...companies, ...companies, ...companies].map((c, index) => (
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
              <h2 className="section-title">Featured Case Studies</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '0.5rem' }}>
                Explore real results across Web Design, Social Campaigns, PPC advertising, Copywriting, and Video Creative Scripting.
              </p>
            </div>

            {/* 3x3 Project Card Grid Layout */}
            <div className="projects-grid">
              
              {/* ROW 1: Projects 1, 2, 3 (Initially Active / Always Visible on enter) */}
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

              {/* ROW 3: Project 7 (Fades/Slides up when user scrolls further) */}
              <div ref={row3Ref} className={`project-row scroll-reveal-row ${row3Active ? 'active' : ''}`}>
                {projectsData.slice(6, 7).map((project) => {
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

        {/* About & Location Section (Fades/Slides up together) */}
        <section id="about" className="about-section">
          <div ref={aboutRef} className={`container about-grid scroll-reveal-row ${aboutActive ? 'active' : ''}`}>
            
            <div className="about-left">
              <div className="section-subtitle">Background</div>
              <h2 className="section-title">Who Is Afsal Muhammad N?</h2>
              <p className="about-text">
                As a dedicated **Digital Marketing Specialist**, I stand at the intersection of business strategy, consumer psychology, and modern visual design. My focus is simple: **to craft campaigns that capture attention and drive direct revenue.**
              </p>
              <p className="about-text" style={{ color: 'var(--text-secondary)' }}>
                Whether it is building custom, high-speed WordPress/Webflow platforms, scripting short-form video clips that command high retention, or launching full advertising structures on Google and Meta Ads, I design end-to-end growth cycles tailored to target metrics.
              </p>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.85rem' }}>Core Professional Skills</h4>
                <div className="skills-container">
                  {[
                    { name: 'Omni-channel PPC Campaigns', color: 'bg-blue-500' },
                    { name: 'Copywriting & Script Writing', color: 'bg-purple-500' },
                    { name: 'WordPress & Webflow Architecture', color: 'bg-emerald-500' },
                    { name: 'Lead Generation Funnels', color: 'bg-amber-500' },
                    { name: 'Short-form Content Strategy', color: 'bg-rose-500' },
                    { name: 'Conversion Rate Optimization (CRO)', color: 'bg-teal-500' }
                  ].map((skill, index) => (
                    <div key={index} className="skill-badge">
                      <span className={`bullet ${skill.color}`}></span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-right">
              {/* Creative Location Card */}
              <div className="location-card">
                <div className="location-card-header">
                  <div className="location-icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="location-title">Current Base</h4>
                    <p className="location-subtitle">Kozhikode, Kerala, India</p>
                  </div>
                </div>

                {/* Minimalist interactive visual map graphic */}
                <div className="map-canvas-visual">
                  <div className="map-dots"></div>
                  <div className="map-road-1"></div>
                  <div className="map-road-2"></div>
                  <div className="map-pulse-pin"></div>
                </div>

                <div className="location-info-footer">
                  <Globe size={14} style={{ color: 'var(--text-tertiary)' }} />
                  <span>Available for global remote contracts and onsite consulting.</span>
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
      </div>
    </>
  );
}
