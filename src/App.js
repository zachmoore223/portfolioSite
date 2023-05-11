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
      <br /><br /><br /><br />
      <div id="about-me">
        <h2>About Me</h2>
        <img id='portfolioPic' src={portfoloioPic} alt="portfolioPic" height="500px" width="500px"/>
        <p>
          I am a Bodily Injury Claims Adjuster transitioning into a Software Development role. I graduated from an intensive coding bootcamp with a Certificate of Software Development. 
          I have built front-end and back-end web applications using Java, Spring Boot, HTML, CSS, JavaScript, Github, and other frameworks. My favorite languages to program in are Java and React.js.
        </p>
        <p>
          I also have experience working with the Adobe Suite. My strengths are in Adobe inDesign, Photoshop, and Illustrator.
        </p>
        <p>
          In my free time, I enjoy practicing jiu jitsu at Gracie Ohio Jiu Jitsu Academy and both playing and designing board games. Some of my favorite board and card games are Magic the Gathering, Cosmic Encounter, Condottiere, and Time's Up! I am also a published game designer. My first published game is <a href="https://boardgamegeek.com/boardgame/287732/solar-draft"> Solar Draft.</a>
        </p>
       </div>
          <br />

      <div id="skills">
        <h2 id="skills">Skills</h2>
        <p>Java • Spring Boot • React • Hibernate • Spring JPA • JavaScript • Spring MVC • HTML • CSS (Flexbox and Grid) • TDD • Agile (Scrum) • Object Oriented Programming (OOP) •  JSON • REST APIs • Responsive Design / Mobile • Source Control / Git • Teamwork with Agile Principles under Scrum Framework</p>
      </div>
        <br />

      <div id="projects">
        <h2>Projects</h2>
        <p>
            <h4>HydroHomie</h4>
            Technologies used: Java, React, Spring Boot, JSON, Javascript, HTML, CSS, REST API
            Designed and implemented a single page web design using React
            Enabled users to create a collection of plants from a self created plant API and then
            use that collection to create a watering schedule for their plants

            <h4>Virtual Pet API</h4>
            Technologies used: Java, Spring Boot, JSON, Javascript, Thymeleaf, HTML, CSS, REST API
            Designed and implemented  a virtual pet application in a 3-person team over 2 weeks.
            Enabled users to create multiple virtual pet shelters which could hold multiple virtual pets and then perform actions such as “feed” on the pets.

            <h4>Jac Enterprises </h4>
            Technologies used: Java, React, Spring Boot, JSON, Javascript, HTML, CSS, REST API
            Designed and implemented a single page web design using React
            Enabled users to interact with two external APIs interact with our own API server			

            <h4>Auto Format CSS</h4>
            Technologies used: Java, Spring Boot, JSON, Javascript, Thymeleaf, HTML, CSS, REST API
            Designed and implemented  a CSS Formatter  over 2 weeks.
            Enabled users to select their own colors for various HTML tags and display the choices to the user
            </p>
      </div>
      </body>
    </div>
  );
}

export default App;