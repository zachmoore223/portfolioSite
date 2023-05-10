import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import portfoloioPic from './images/portfolioPic.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <body>
      <br /><br />
      <div id="about-me">
        <h2>About Me</h2>
        <img className='portfolioPic' src={portfoloioPic} alt="portfolioPic" />
        <p>
          I am a Bodily Injury Claims Adjuster transitioning into a Software Development role. I graduated from an intensive coding bootcamp with a Certificate of Software Development. 
          I have built front-end and back-end web applications using Java, Spring Boot, HTML, CSS, JavaScript, Github, and other frameworks. In my free time I practice jiu jitsu and play board games.
          </p>
       </div>
          <br />

      <div id="skills">
        <h2 id="skills">Skills</h2>
        <p>dalgjla</p>
      </div>
        <br />

      <div id="projects">
        <h2>Projects</h2>
        <p>dalgjla</p>
      </div>
      </body>
    </div>
  );
}

export default App;