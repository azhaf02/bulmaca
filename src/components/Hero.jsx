import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-title', { y: 55, opacity: 0, duration: 1, delay: 0.15, ease: 'power4.out' });
      gsap.from('.hero-subtitle', { y: 35, opacity: 0, duration: 0.9, delay: 0.35, ease: 'power3.out' });
      gsap.from('.hero-description', { y: 35, opacity: 0, duration: 0.9, delay: 0.45, ease: 'power3.out' });
      gsap.from('.hero-actions button', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content glass-card">
        <span className="hero-badge">Premium Portfolio</span>
        <h1 className="hero-title">Hi, I&apos;m Alex Carter</h1>
        <h2 className="hero-subtitle">Creative Full Stack Developer</h2>
        <p className="hero-description">
          I craft immersive digital products with modern front-end engineering, resilient back-end systems,
          and thoughtful user experiences that turn ideas into premium web applications.
        </p>
        <div className="hero-actions">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <button
            className="secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
