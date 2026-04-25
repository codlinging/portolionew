import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const videos = [
    { id: 1, title: 'Self Introduction', src: 'selfintro.mp4' },
    { id: 2, title: 'My Projects', src: 'projects.mp4' },
    { id: 3, title: 'Lesson-1 (Self Introduction)', src: 'lesson1.mp4' },
    { id: 4, title: 'Lesson-2 (Group Discussion)', src: 'lesson2.mp4' },
    { id: 5, title: 'Lesson-3 (Extempore)', src: 'lesson3.mp4' },
    { id: 6, title: 'Lesson-4 (Interview)', src: 'lesson4.mp4' },
  ];

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>
              Home
            </button>
          </li>
          <li>
            <button className={activePage === 'videos' ? 'active' : ''} onClick={() => setActivePage('videos')}>
              Videos
            </button>
          </li>
          {/* External Projects Link */}
          <li>
            <a href="https://github.com/codlinging" target="_blank" rel="noreferrer" className="nav-link-btn">
              Projects
            </a>
          </li>
          <li>
            <button className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="content-area">
        
        {/* --- HOME PAGE --- */}
        {activePage === 'home' && (
          <section className="page-section home-page fade-in brutal-card">
            <div className="profile-container">
              <img src="img.png" alt="Ahmed Nizam" className="profile-image brutal-border" />
            </div>
            <div className="intro-text">
              <h1 className="brutal-title">Ahmed Nizam</h1>
              <h2>Computer Science Engineer & Cybersecurity Enthusiast</h2>
              
              <p>
                 I am currently pursuing my <strong>Bachelors in Computer Science and Engineering at Graphic Era Hill University</strong>. My fascination with technology began in an unconventional way: spending hours playing pirated video games during my childhood. That early exposure sparked a deep curiosity about how software actually works under the hood. It drove me to learn how to reverse-engineer games, understand system vulnerabilities, and eventually crack into systems myself. 
              </p>
              
              <p>
                What started as a childhood curiosity has evolved into a dedicated focus on cybersecurity, DevSecOps, and full-stack development. Today, I thrive on solving complex problems—from building "OneVoice," an AI accessibility translator, to engineering a 32-bit graphical OS from scratch. Beyond development, I am an active ethical hacker ranked in the top 5% globally on TryHackMe, and I proudly serve as the Technical Lead for my university's Cybersecurity Club.
              </p>

              <p>
                My ultimate goal with my B.Tech degree is to secure a fulfilling and dynamic role as a Cybersecurity Engineer or Security Analyst. I want to use my engineering skills to build a comfortable and peaceful life for my family, ensuring they have everything they need.
              </p>
              
              <div className="action-buttons">
                {/* Download CV Button */}
                <a href="resume.pdf" download="Ahmed_Nizam_CV.pdf" className="brutal-btn dark-btn cv-btn">
                  <span className="btn-text">Download CV</span>
                </a>
              </div>

              <div className="tech-stack">
                <span className="brutal-tag">ReactJS</span>
                <span className="brutal-tag">Python</span>
                <span className="brutal-tag">Cybersecurity</span>
                <span className="brutal-tag">C/C++</span>
              </div>
            </div>
          </section>
        )}

        {/* --- VIDEOS PAGE --- */}
        {activePage === 'videos' && (
          <section className="page-section videos-page fade-in">
            <h2 className="section-title brutal-title-centered">Video Presentations</h2>
            <div className="video-grid">
              {videos.map((video) => (
                <div key={video.id} className="video-card brutal-card">
                  <div className="video-wrapper brutal-border">
                    <video controls preload="metadata">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- CONTACT PAGE --- */}
        {activePage === 'contact' && (
          <section className="page-section contact-page fade-in">
            <div className="contact-card brutal-card">
              <h1 className="brutal-title-centered">Contact Information</h1>
              <div className="contact-details">
                <p><strong>Email:</strong> ahmednizam0024@gmail.com</p>
                <p><strong>Phone:</strong> +91-7900431535</p>
                <p><strong>Address:</strong> Graphic Era Hill University, Dehradun, Uttarakhand, India</p>
              </div>
              <div className="contact-actions">
                <a href="https://www.linkedin.com/in/ahmed-nizam-/" target="_blank" rel="noreferrer" className="brutal-btn dark-btn">
                  <span className="btn-text">LinkedIn</span>
                </a>
                <a href="mailto:ahmednizam0024@gmail.com" className="brutal-btn dark-btn">
                  <span className="btn-text">Email</span>
                </a>
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

export default App;
