import React, { useEffect, useMemo, useState } from "react";
import Icon from "./components/Icon";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import GlassCard from "./components/GlassCard";
import {
  profile,
  skills,
  tools,
  awsServices,
  projects,
  experience,
  education,
  certifications,
} from "./data";

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["stack", "Stack"],
  ["projects", "Projects"],
  ["experience", "Journey"],
  ["contact", "Contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="topbar">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          <span className="brand-mark">HM</span>
          <span className="brand-copy">
            <strong>HANSATH</strong>
            <small>FULL STACK DEVELOPER</small>
          </span>
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              className={activeSection === id ? "active" : ""}
              onClick={() => goTo(id)}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="mini-social" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={17} />
          </a>
          <button className="hire-btn" onClick={() => goTo("contact")}>Let's talk <Icon name="arrow" size={15} /></button>
          <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-left">
            <Reveal>
              <div className="status-line">
                <span className="status-dot" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="hero-kicker">PYTHON × REACT × CLOUD</p>
              <h1>
                Building <span>fast</span> web
                <br />
                experiences.
              </h1>
              <p className="hero-sub">
                {profile.name} — {profile.role} focused on practical full-stack
                applications, APIs, databases, and cloud-ready deployments.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => goTo("projects")}>
                  Explore projects <Icon name="arrow" />
                </button>
                <button className="ghost-btn" onClick={() => goTo("contact")}>
                  Contact me
                </button>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="hero-meta">
                <span><Icon name="location" size={15} /> {profile.location}</span>
                <span><Icon name="spark" size={15} /> React + FastAPI</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-visual" delay={120}>
            <div className="hud-frame">
              <div className="hud-corner c1" />
              <div className="hud-corner c2" />
              <div className="hud-corner c3" />
              <div className="hud-corner c4" />
              <div className="scan-line" />

              <div className="hud-top">
                <span>JARVIS // PORTFOLIO CORE</span>
                <span>SYS. ONLINE</span>
              </div>

              <div className="portrait-wrap">
                <div className="orbit orbit-a" />
                <div className="orbit orbit-b" />
                <div className="portrait-glow" />
                <img src="/profile.jpg" alt="H Mohamed Hansath" className="portrait" />
                <div className="portrait-shade" />
              </div>

              <div className="hud-bottom">
                <div>
                  <small>IDENTITY</small>
                  <strong>H. MOHAMED HANSATH</strong>
                </div>
                <div className="hud-chip">HM // 001</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="about" className="section-shell content-section">
          <SectionHeading
            index="01"
            eyebrow="SYSTEM PROFILE"
            title="About me"
            text="A practical developer profile built around full-stack fundamentals and cloud exposure."
          />
          <div className="about-grid">
            <Reveal>
              <GlassCard className="about-card">
                <span className="card-label">PROFILE.LOG</span>
                <p className="about-lead">
                  BCA graduate with hands-on knowledge of full-stack web development
                  and cloud technologies.
                </p>
                <p>
                  Skilled in HTML, CSS, JavaScript (ES6+), React.js, Python, FastAPI,
                  and MySQL. Familiar with AWS services, Docker, Kubernetes, Jenkins,
                  and Linux basics, with practical project experience in car rental and
                  gym management applications.
                </p>
                <div className="about-tags">
                  <span>REST APIs</span><span>CRUD</span><span>Database Design</span><span>Cloud Basics</span>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={90}>
              <div className="stat-stack">
                <GlassCard className="stat-card">
                  <span className="stat-num">02</span>
                  <div><strong>Practical projects</strong><small>Car Rental + Gym Management</small></div>
                </GlassCard>
                <GlassCard className="stat-card">
                  <span className="stat-num">10+</span>
                  <div><strong>Core technologies</strong><small>Frontend, backend, database & cloud</small></div>
                </GlassCard>
                <GlassCard className="stat-card">
                  <span className="stat-num">BCA</span>
                  <div><strong>Computer Applications</strong><small>2022 — 2026</small></div>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="stack" className="section-shell content-section">
          <SectionHeading
            index="02"
            eyebrow="TECH ARSENAL"
            title="Stack & tools"
            text="The technologies and tools documented in the profile and resume."
          />
          <div className="stack-layout">
            <Reveal>
              <GlassCard className="stack-card">
                <div className="stack-card-head">
                  <span className="card-label">TECH.MAP</span>
                  <span className="tiny-status">ONLINE</span>
                </div>
                <div className="skill-grid">
                  {skills.map((skill) => (
                    <div className="skill-pill" key={skill.name}>
                      <span className="skill-node" />
                      <div><strong>{skill.name}</strong><small>{skill.group}</small></div>
                      <em>{skill.level}</em>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={90}>
              <div className="cloud-card-wrap">
                <GlassCard className="cloud-card">
                  <span className="card-label">CLOUD // AWS</span>
                  <h3>Cloud exposure</h3>
                  <p>Core AWS services listed in the resume, presented as a compact infrastructure HUD.</p>
                  <div className="aws-orbit">
                    {awsServices.map((service, i) => (
                      <span key={service} className={`aws-node n${i}`}>{service}</span>
                    ))}
                    <div className="aws-core">AWS</div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="tools-row">
              <div className="tools-label">DEV TOOLKIT</div>
              <div className="tools-list">
                {tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="section-shell content-section">
          <SectionHeading
            index="03"
            eyebrow="BUILD LOG"
            title="Featured projects"
            text="Two practical full-stack applications built across frontend, backend and database layers."
          />
          <div className="projects-list">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 80}>
                <GlassCard className="project-card">
                  <div className="project-index">{project.number}</div>
                  <div className="project-main">
                    <div className="project-topline">
                      <span className="card-label">PROJECT // {project.number}</span>
                      <span className="project-live"><span /> LIVE DEMO</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-short">{project.short}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="stack-tags">
                      {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                    <div className="project-actions">
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                        <Icon name="github" size={16} /> Source code
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="project-link strong">
                        Live demo <Icon name="external" size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="project-visual">
                    <div className="window-top"><span /><span /><span /></div>
                    <div className="mock-ui">
                      <div className="mock-sidebar" />
                      <div className="mock-content">
                        <span className="mock-line long" /><span className="mock-line" />
                        <div className="mock-boxes"><i /><i /><i /></div>
                        <span className="mock-line medium" />
                        <span className="mock-line short" />
                      </div>
                    </div>
                    <div className="project-orbit" />
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell content-section">
          <SectionHeading
            index="04"
            eyebrow="JOURNEY.LOG"
            title="Experience & education"
            text="Academic foundation, internship exposure, and completed certifications."
          />
          <div className="journey-grid">
            <Reveal>
              <GlassCard className="timeline-card">
                <div className="timeline-head">
                  <span className="card-label">EXPERIENCE</span>
                  <span className="timeline-date">{experience.period}</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                    <p className="timeline-detail">{experience.detail}</p>
                    <ul>
                      {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <div className="journey-side">
              <Reveal delay={70}>
                <GlassCard className="education-card">
                  <span className="card-label">EDUCATION</span>
                  <span className="edu-year">{education.period}</span>
                  <h3>{education.degree}</h3>
                  <p>{education.college}</p>
                  <small>{education.location}</small>
                </GlassCard>
              </Reveal>
              <Reveal delay={130}>
                <GlassCard className="cert-card">
                  <span className="card-label">CERTIFICATIONS // ACHIEVEMENTS</span>
                  {certifications.map((item, i) => (
                    <div className="cert-row" key={item.title}>
                      <span>0{i + 1}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.issuer} · {item.date}</p>
                      </div>
                    </div>
                  ))}
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell content-section contact-section">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">/05 // CONNECTION</p>
              <h2>Let's build something useful.</h2>
              <p>
                Open to conversations around full-stack development, practical web
                applications, and cloud-oriented projects.
              </p>
              <div className="contact-actions">
                <a className="primary-btn" href={`mailto:${profile.email}`}>
                  Send email <Icon name="mail" />
                </a>
                <button className="ghost-btn" onClick={copyEmail}>
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>

            <div className="contact-grid">
              <a className="contact-item" href={`mailto:${profile.email}`}>
                <span className="contact-icon"><Icon name="mail" /></span>
                <div><small>EMAIL</small><strong>{profile.email}</strong></div>
              </a>
              <a className="contact-item" href={`tel:${profile.phone}`}>
                <span className="contact-icon"><Icon name="phone" /></span>
                <div><small>PHONE</small><strong>{profile.phone}</strong></div>
              </a>
              <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon name="github" /></span>
                <div><small>GITHUB</small><strong>Mohamedhansath</strong></div>
              </a>
              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon name="linkedin" /></span>
                <div><small>LINKEDIN</small><strong>Mohamed Hansath</strong></div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <span>© {year} H Mohamed Hansath</span>
        <span>REACT // FASTAPI // MYSQL // AWS</span>
        <button onClick={() => goTo("home")}>BACK TO TOP ↑</button>
      </footer>

      <button
        className={`jarvis-fab ${assistantOpen ? "open" : ""}`}
        onClick={() => setAssistantOpen((v) => !v)}
        aria-label="Open portfolio assistant"
      >
        <span className="fab-ring" />
        <span className="fab-core">J</span>
      </button>

      {assistantOpen && (
        <div className="assistant-panel">
          <div className="assistant-head">
            <div><span className="status-dot" /> JARVIS CORE</div>
            <button onClick={() => setAssistantOpen(false)} aria-label="Close assistant"><Icon name="close" size={16} /></button>
          </div>
          <p className="assistant-msg">Hello. I can route you to the key areas of Hansath's portfolio.</p>
          <div className="assistant-actions">
            <button onClick={() => { setAssistantOpen(false); goTo("projects"); }}>Show projects <Icon name="arrow" size={14} /></button>
            <button onClick={() => { setAssistantOpen(false); goTo("stack"); }}>Show tech stack <Icon name="arrow" size={14} /></button>
            <button onClick={() => { setAssistantOpen(false); goTo("contact"); }}>Open contact <Icon name="arrow" size={14} /></button>
            <a href={profile.resume} download>Get resume <Icon name="download" size={14} /></a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
