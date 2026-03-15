import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="section-heading">
        <h3>Contact</h3>
        <p>Let&apos;s collaborate on your next digital product.</p>
      </div>
      <div className="contact-layout">
        <form className="contact-form glass-card">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required />

          <button type="submit">Send Message</button>
        </form>

        <aside className="social-links glass-card">
          <h4>Connect</h4>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <p>Available for freelance, full-time roles, and consulting.</p>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
