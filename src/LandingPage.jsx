import React from 'react'
import './LandingPage.css'
import todoimg from './assets/To-Do List.png'
import pricingimg from './assets/Pricing Plans.png'
import cardsimg from './assets/footballers page.png'

function Navbar(){
	return( 
	<nav className='navbar'>
		<a href="#home">Home</a>
		<a href="#about">About</a>
		<a href="#skills">Skills</a>
		<a href="#projects">Projects</a>
		<a href="#contact">Contact Me</a>
	</nav>
	)
}
function LandingPage(){
	const skills = ["HTML", "CSS", "JavaScript", "React", "SQL", "PowerBI"]
	const user = 'elijahjesugbemi'
	const domain = 'gmail.com'

	const projects = [
		{
    title: "To-Do List App",
    description: "A task management app built with React that allows users to add, delete and track tasks.",
    image: todoimg
  },
  {
    title: "Pricing Plans Page",
    description: "A responsive pricing table built using HTML and CSS.",
    image: pricingimg
  },
  {
    title: "Football Cards Filter",
    description: "A JavaScript app that filters football players by position.",
    image: cardsimg
  }
	]

	return(
		<div className="container">
			<Navbar />
  			<section id="home" className="section">
  				<h1>Hi, I'm Fikayomi</h1>
  				<p>Frontend Developer and Data Analyst</p>
  			</section>
			<section id="about" className="section">
				<h2>About Me</h2>
				<p>I am a Computer Science Graduate skilled in Data Analysis, web development and Database Administration. I love building clean and responsive web applications using HTML, CSS, JavaScript and React. </p>
			</section>
			<section id="skills" className="section">
				<h2>My Skills</h2>
				<ul className="skills-list">
					{skills.map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</section>
			<section id="projects" className='section'>
				<h2>Projects</h2>
				<div className="projects-container">
                {projects.map((project, index) => (
                   <div className="project-card" key={index}>
                      <a href={project.image} target="_blank" rel="noopener noreferrer">
                        <img src={project.image} alt={project.title} />
                      </a>
                          <h3>{project.title}</h3>
                            <p>{project.description}</p>
                               </div>
                                ))}
                     </div>
			</section>
			<section id="contact" className="section">
				<h2>Contact Me</h2>
				<address className="contact-info">
					Email: <a href={`mailto:${user}@${domain}`} className="email">{user}@{domain}</a> <br />
					Phone: +234 9014041793
				</address>
			</section>
		</div>
	)
		
}

export default LandingPage