import '../styles/navbar.css';

const navLinks = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' }
];

const Navbar = () => {
  const handleNavClick = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navbar">
      <button className="nav-logo" onClick={() => handleNavClick('home')}>
        Alex Carter
      </button>
      <nav>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button onClick={() => handleNavClick(link.target)}>{link.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
