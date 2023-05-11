import { useState } from 'react';
import github from '../images/github.png'
import linkedIn from '../images/linkedIn.png'

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
        <img id='github' src={linkedIn} alt="linkedIn logo" height="35px" width="35px"></img>
        </a>
      </li>
      <li>
        <a href="https://github.com/zachmoore223" target="_blank" rel="noopener noreferrer">
          <img id='github' src={github} alt="github logo" height="35px" width="35px"></img>
        </a>
      </li>
      <li className='phone'>
       <p>419-612-7542</p> 
      </li>
      <li className='email'>
      <a href="mailto:zachmoore223@gmail.com">zachmoore223@gmail.com</a>
      </li>
    </ul>
    </nav>
  );
}
