import { useState } from 'react';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('About Me');

  const handleLinkClick = (event) => {
    const linkText = event.target.textContent;
    setActiveLink(linkText);
  };

  return (
    <nav>
    <ul>
      <li>
        <a href="#about-me" onClick={handleLinkClick} className={activeLink === 'About Me' ? 'active' : ''}>
          About Me
        </a>
      </li>
      <li>
        <a href="#skills" onClick={handleLinkClick} className={activeLink === 'Skills' ? 'active' : ''}>
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" onClick={handleLinkClick} className={activeLink === 'Projects' ? 'active' : ''}>
          Projects
        </a>
      </li>
      <li>
        <a href="http://www.linkedin.com/in/zachmoore223" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://github.com/zachmoore223" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
    </ul>
    </nav>
  );
}
