import '../styles/projects.css';

const projectData = [
  {
    title: 'Nebula Commerce',
    description: 'An AI-assisted commerce platform with personalized funnels, analytics, and modular storefronts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Pulse Dashboard',
    description: 'Real-time operations dashboard with custom charts, role-based insights, and workflow automations.',
    image: 'https://images.unsplash.com/photo-1551281044-8d8d7f7f44d8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Studio Sync',
    description: 'Collaboration suite for distributed creative teams with media review, comments, and version history.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <h3>Projects</h3>
        <p>Featured work showcasing modern architecture, design systems, and delightful user interactions.</p>
      </div>
      <div className="project-grid">
        {projectData.map((project) => (
          <article key={project.title} className="project-card glass-card">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-actions">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://example.com" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
