import portfoloioPic from '../images/portfolioPic.jpg'

export default function AboutMe() {
return (
    <div className="about-me">
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
);
}