
export default function Projects() {
return (
<div className="projects">
  <ol className="projectsList">
    
        <li className="projectsLI">
        
            <h4>HydroHomie</h4>
            Designed and implemented a single page web design using React
            Enabled users to create a collection of plants from a self created plant API and then
            use that collection to create a watering schedule for their plants
            <br/><br/>
            <strong>Tech:</strong> Java, React, Spring Boot, JSON, Javascript, HTML, CSS, REST API
            <br/><br/>
            <a className='viewCodeLink' href="https://github.com/zachmoore223/PlantCalendar.git" target="_blank">
            <button className="viewCodeButton"> View Code</button>
            </a>
        </li>

        <li className="projectsLI">
            <h4>Virtual Pet API</h4>         
            Designed and implemented  a virtual pet application in a 3-person team over 2 weeks.
            Enabled users to create multiple virtual pet shelters which could hold multiple virtual pets and then perform actions such as “feed” on the pets.
            <br/><br/>
            <strong>Tech:</strong> Java, Spring Boot, JSON, Javascript, Thymeleaf, HTML, CSS, REST API
            <br/><br/>
            <a href="https://github.com/zachmoore223/VirtualPetAPI.git" target="_blank">
            <button className="viewCodeButton"> View Code</button>
            </a>
        </li>
        <li className="projectsLI">       
            <h4>Jac Enterprises </h4>    
            Designed and implemented a single page web design using React
            Enabled users to interact with two external APIs interact with our own API server
            <br/><br/>
            <strong>Tech:</strong> Java, React, Spring Boot, JSON, Javascript, HTML, CSS, REST API
            <br/><br/>
            <a href="https://github.com/zachmoore223/JacEnterprises.git" target="_blank">
            <button className="viewCodeButton"> View Code</button>
            </a>	
        </li> 
        <li className="projectsLI">         
            <h4>Auto Format CSS</h4>
            Designed and implemented  a CSS Formatter  over 2 weeks.
            Enabled users to select their own colors for various HTML tags and display the choices to the user
            <br/><br/>
            <strong>Tech:</strong> Java, Spring Boot, JSON, Javascript, Thymeleaf, HTML, CSS, REST API
            <br/><br/>
            <a href="https://github.com/zachmoore223/FormatCSS.git" target="_blank">
            <button className="viewCodeButton"> View Code</button>
            </a>
          </li>   
        </ol>
      </div>
);
}