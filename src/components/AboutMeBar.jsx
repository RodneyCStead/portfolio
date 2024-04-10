import { Link } from 'react-router-dom';

const AboutMeBar = () => {
  return (
    <div className="aboutMe">
      <Link to="/about">
        <h1>About Me</h1>
      </Link>
    </div>
  )
}

export default AboutMeBar;