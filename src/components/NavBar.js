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
       <h3 className='name'>Zach Moore</h3> 
      </li>
      <li className='phone'>
       <p>419-612-7542</p> 
      </li>
      <li className='email'>
      <a href="mailto:zachmoore223@gmail.com">zachmoore223@gmail.com</a>
      </li>
      <li className='social-links'>
      <a href="http://www.linkedin.com/in/zachmoore223" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
        <a href="http://www.linkedin.com/in/zachmoore223" target="_blank" rel="noopener noreferrer">
        <img id='github' src={linkedIn} alt="linkedIn logo" height="35px" width="35px"></img>
        </a>
      </li>
      <li className='social-links'>
      <a href="https://github.com/zachmoore223" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a>
        <a href="https://github.com/zachmoore223" target="_blank" rel="noopener noreferrer">
          <img id='github' src={github} alt="github logo" height="35px" width="35px"></img>
        </a>
      </li>

    </ul>
    </nav>
  );
}
