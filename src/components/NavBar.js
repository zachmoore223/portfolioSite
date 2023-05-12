import { useState } from 'react';
import github from '../images/github.png'
import linkedIn from '../images/linkedIn.png'
import email from '../images/email.png'

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
       <h3 className='name'>- Zach Moore -</h3> 
      </li>
      <li className='phone'>
       <p className='socialsTextPhone'>419-612-7542</p> 
      </li>
      <li className='social-links'>
      <a href="mailto:zachmoore223@gmail.com" target="_blank" rel="noopener noreferrer"><p className='socialsText'>E-mail</p></a>
        <a href="mailto:zachmoore223@gmail.com" target="_blank" rel="noopener noreferrer">
        <img id='email' src={email} alt="linkedIn logo" height="35px" width="35px"></img>
        </a>
      </li>
      <li className='social-links'>
      <a href="http://www.linkedin.com/in/zachmoore223" target="_blank" rel="noopener noreferrer"><p className='socialsText'>LinkedIn</p></a>
        <a href="http://www.linkedin.com/in/zachmoore223" target="_blank" rel="noopener noreferrer">
        <img id='linkedin' src={linkedIn} alt="linkedIn logo" height="35px" width="35px"></img>
        </a>
      </li>
      <li className='social-links'>
      <a href="https://github.com/zachmoore223" target="_blank" rel="noopener noreferrer"><p className='socialsText'>GitHub</p></a>
        <a href="https://github.com/zachmoore223" target="_blank" rel="noopener noreferrer">
          <img id='github' src={github} alt="github logo" height="35px" width="35px"></img>
        </a>
      </li>

    </ul>
    </nav>
  );
}
