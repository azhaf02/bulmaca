import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/about.css';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'GSAP',
  'Tailwind',
  'Docker'
];

const About = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-copy', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.skill-card', {
        y: 24,
        opacity: 0,
        duration: 0.55,
        delay: 0.35,
        stagger: 0.06,
        ease: 'power2.out'
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="about-copy">
        <h3>About Me</h3>
        <p>
          I&apos;m a full stack developer with a passion for pixel-perfect interfaces and performant architectures.
          I blend visual storytelling with clean code to build scalable products for startups and enterprise teams.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill} className="skill-card glass-card">
            {skill}
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
