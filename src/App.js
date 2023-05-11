import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NavBar from './components/NavBar';


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
      <Projects />      
      </body>
    </div>
  );
}

export default App;