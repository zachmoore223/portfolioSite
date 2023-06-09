import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <body>
      <br /><br /><br /><br />
      <AboutMe />
          <br />
      <Skills />
        <br />
      <h2 className='projects'>Projects</h2>
      <Projects />  
      <br></br>
      <ResumeDownload />
      <div className='resume'> <h3><a href='https://www.zacharymooreportfolio.com/zachMooreResume.pdf' target="_blank" download>Download Resume</a></h3> </div>    
      </body>
    </div>
  );
}

export default App;