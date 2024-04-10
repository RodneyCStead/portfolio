import React from 'react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
  return (
    <div className="myProjects">
      <Link to="/">
        <h1>My Projects</h1>
      </Link>
    </div>
  )
}

export default MyProjects;