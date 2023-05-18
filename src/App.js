import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import zachResume from './zach-moore-resume-2023.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <body>
      <br /><br /><br /><br />
      <div className='resume'> <h3><a href={zachResume} download="zach-moore-resume-2023.pdf">Download Resume</a></h3> </div>
      <AboutMe />
          <br />
      <Skills />
        <br />
      <h2 className='projects'>Projects</h2>
      <Projects />      
      </body>
    </div>
  );
}

export default App;