import React from 'react';
import '../App.css';
import { useState } from 'react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'opensource', label: 'Open Source' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button 
          className="nav-brand"
          onClick={() => scrollToSection('home')}
        >
          Ramanan T
        </button>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu-mobile ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item-mobile">
              <button 
                className="nav-link-mobile"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero-section text-center text-white">
      <div className="container">
        <h1 className="display-3 fw-bold mb-4">Ramanan T</h1>
        <p className="lead fs-2 mb-4">Software Engineer</p>
        <p className="fs-5 mb-5 mx-auto hero-description">
          3+ years of experience in Ruby on Rails development with strong focus on Test-Driven Development (TDD) practices, 
          CI/CD, and streaming platforms like Confluent Kafka.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
          <a href="mailto:ramananthiruchi09@gmail.com" className="btn-custom">
            <i className="fas fa-envelope me-2"></i>
            Contact Me
          </a>
          <a href="tel:+918610893012" className="btn-outline-custom">
            <i className="fas fa-phone me-2"></i>
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-user me-3"></i>
          About Me
        </h2>
        
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="fs-5 text-muted mb-4">
              I'm a passionate Software Engineer with 3+ years of experience specializing in Ruby on Rails development. 
              I have a strong focus on Test-Driven Development (TDD) practices and expertise in modern software development methodologies.
            </p>
            <p className="fs-5 text-muted mb-4">
              My experience includes working with streaming platforms like Confluent Kafka, various databases including PostgreSQL, 
              and cloud technologies. I'm particularly interested in building scalable solutions and automating business processes.
            </p>
            <div className="contact-info-list">
              <div className="contact-info">
                <i className="fas fa-map-marker-alt"></i>
                Coimbatore, Tamil Nadu, India
              </div>
              <div className="contact-info">
                <i className="fas fa-envelope"></i>
                ramananthiruchi09@gmail.com
              </div>
              <div className="contact-info">
                <i className="fas fa-phone"></i>
                +91 8610893012
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card education-card">
              <div className="card-body">
                <h3 className="h5 mb-4">Education</h3>
                <div className="mb-4">
                  <h4 className="h6 fw-semibold">Bachelor of Computer Science and Engineering</h4>
                  <p className="text-muted mb-1">Sri Ramakrishna Engineering College, Coimbatore</p>
                  <p className="text-primary fw-semibold">CGPA: 9.08</p>
                </div>
                
                <h3 className="h5 mb-3">Achievements</h3>
                <div className="achievements">
                  <div className="achievement-item">
                    <i className="fas fa-star"></i>
                    Business Champ of the Quarter
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-star"></i>
                    Team Player Award (2 occasions)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Compact Skills Component
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: ["Ruby", "Python", "JavaScript"]
    },
    {
      title: "Frameworks & Technologies",
      icon: "fas fa-layer-group",
      skills: ["Ruby on Rails", "React.js", "RSpec", "Kafka", "Docker"]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: ["PostgreSQL", "DynamoDB", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: ["AWS Lambda", "AWS EC2", "AWS S3", "AWS SQS", "AWS RDS", "LoadBalancer", "CI/CD", "Circle CI"]
    },
    {
      title: "Tools & Monitoring",
      icon: "fas fa-tools",
      skills: ["Postman", "Airbrake", "Datadog", "Skylight", "Git", "JIRA", "Github Copilot", "Cursor"]
    },
    {
      title: "Integrations",
      icon: "fas fa-plug",
      skills: ["Persona", "SIFT", "Bandwidth", "Twilio", "Salesforce", "Knock", "Yardi", "Google APIs"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-light skills-section">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-code me-3"></i>
          Technical Skills
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">
                <i className={category.icon}></i>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Rently",
      location: "Coimbatore, Tamil Nadu",
      duration: "Feb 2022 - Present",
      achievements: [
        "Partnered with stakeholders to identify business challenges and developed scalable solutions using RESTful APIs, relational databases, and Rails best practices.",
        "Led cross-team collaboration by facilitating regular syncs and knowledge-sharing to align on goals. Proactively identified and resolved complex technical issues.",
        "Automated key business processes by collaborating with stakeholders, leading to a 30% reduction in client onboarding time and a 20% decrease in client churn rate, contributing to a noticeable increase in revenue."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Rently",
      location: "Coimbatore, Tamil Nadu",
      duration: "June 2022 - Jan 2023",
      achievements: [
        "Improved Security and performance of multiple 3rd party integrations.",
        "Collaborated with multiple cross-functional teams to implement solutions for various company products, identifying and resolving a wide range of technical challenges."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-briefcase me-3"></i>
          Experience
        </h2>
        
        <div className="row g-4">
          {experiences.map((exp, index) => (
            <div key={index} className="col-12">
              <div className="card experience-card">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="h5 mb-1">{exp.title}</h3>
                      <p className="text-primary fw-medium mb-1">{exp.company}</p>
                      <p className="text-muted small">{exp.location}</p>
                    </div>
                    <div className="mt-2 mt-md-0">
                      <span className="duration-badge">{exp.duration}</span>
                    </div>
                  </div>
                  <br />
                  <ul className="list-unstyled">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>
                        <i className="fas fa-check-circle"></i>
                        <span className="text-muted small">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: "Fake Listing Monitoring",
      technologies: "Ruby on Rails, Kafka, PostgreSQL, Integration, REST APIs, React.js",
      achievements: [
        "Implemented a robust listing removal and fault-tolerant synchronization for accurate, recurring revenue. Deployed monitoring and recovery solutions, achieving 95% reconciliation accuracy.",
        "Implemented Kafka for billing item tracking, reducing data inconsistency by 90% and enhancing revenue discrepancy mitigation. This streamlined tracking and ensured reliable performance. Designed and developed REST APIs for client onboarding, ensuring smooth user adoption."
      ]
    },
    {
      title: "Property Manager Alert System",
      technologies: "Ruby on Rails, React.js, PostgreSQL",
      achievements: [
        "Developed and implemented a bitwise encoding strategy to enhance database efficiency. Utilized bitwise values to represent multiple states within a single record, reducing the number of records needed by over 80%.",
        "Engineered an asynchronous email notification system for subscribed users, significantly improving communication efficiency and user engagement."
      ]
    },
    {
      title: "Property Management Systems Integration",
      technologies: "Ruby on Rails, 3rd party Integration, PostgreSQL, Asynchronous and Scalable Data Processing",
      achievements: [
        "Engineered a system to process 100K+ properties daily across 3rd-party integrations, using Airbrake for proactive error logging and failure identification.",
        "Collaborated with global third-party integrators to integrate their APIs/feeds. Monitored and optimized AWS performance metrics, including RDS and Redis utilization, to efficiently manage high data volumes."
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">
          <i className="fas fa-laptop-code me-3"></i>
          Projects
        </h2>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12">
              <div className="card project-card">
                <div className="card-body">
                  <h3 className="h5 mb-3">{project.title}</h3>
                  <div className="mb-4">
                    {project.technologies.split(', ').map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="list-unstyled project-list">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>
                        <i className="fas fa-check-circle"></i>
                        <span className="text-muted small">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Open Source Component
const OpenSource = () => {
  return (
    <section id="opensource" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">
          <i className="fab fa-github me-3"></i>
          Open Source Contributions
        </h2>
        
        <div className="card opensource-card">
          <div className="card-body">
            <div className="d-flex align-items-start">
              <i className="fas fa-code text-success me-3 mt-1 fs-4"></i>
              <div className="flex-grow-1">
                <h3 className="h5 mb-2">OpenFoodFoundation - mrujs to Turbo Migration</h3>
                <p className="text-muted mb-2">
                  <span className="status-badge">Ongoing  </span>
                  <span></span>
                  Currently working on replacing mrujs with turbo-based solution in the openfoodfoundation repository.
                </p>
                <p className="text-muted mb-3">
                  This contribution involves using Hotwire Turbo to replace some of the CableReady based features, 
                  improving the overall performance and maintainability of the application.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">Hotwire Turbo</span>
                  <span className="tech-tag">Ruby on Rails</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">CableReady</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-muted mb-4">Interested in contributing to open source projects and learning from the community.</p>
          <a 
            href="mailto:ramananthiruchi09@gmail.com" 
            className="btn btn-primary btn-lg"
          >
            <i className="fas fa-envelope me-2"></i>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <OpenSource />
    </div>
  );
};

export default Portfolio;