// A comoponent that displays my github and 3 of my recent projects. Each project is a link to the project page.
import { Link } from 'react-router-dom';

function ProjectLinkBoxs() {
  const projects = [
    { title: 'Digital Clock', image: '/clock.webp', link: '/clock' },
    { title: 'Memory Card Game', image: '/memory-game-image.png', link: '/memory-card-game' },
    { title: 'Official NL Quiz', image: '/NL.jpg', link: '/NLQuiz' },
    { title: 'My Github', image: '/GitHub-logo.png', link: 'https://github.com/RodneyCStead' },
  ];

  return (
    <div className="projectsContainer">
      {projects.map((project) => (
        <Link key={project.title} to={project.link} className="projectBox">
          <div className="projectTitle">{project.title}</div>
          <img src={project.image} alt={project.title} />
        </Link>
      ))}
    </div>
  );
}


export default ProjectLinkBoxs;
