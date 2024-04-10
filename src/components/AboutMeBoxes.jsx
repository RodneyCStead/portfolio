// A component that displays a photo of me, a short bio, and links to my social media accounts.

const AboutMeBoxes = () => {
  return (
    <div className = "aboutMeBoxesContainer">
        <div className = "photoBox">
          <img src="profilepic.jpg" alt="A photo of me" />
        </div>
        <div className = "aboutMeSocial">
          <a href = "https://github.com/RodneyCStead">
            <img src = "github.svg" alt="" />
          </a>
          <a href = "https://www.linkedin.com/in/rodney-c-stead-5b70672a9/">
            <img src = "linkedin.svg" alt="" />
          </a>
        </div>
        <div className = "aboutMeTextContainer">
          <div className = "aboutMeTextBox">
            <h2>About Me</h2>
            <p>
              Hi! my name is Rodney Stead. I am currently a student with Keyin College 
              enrolled in their Software Development program. As a student, I have learned 
              python, html, css, javascript. I am currently learning React and this is my first solo project.
            </p>
          </div>
        </div>
      
    </div>
  )
}

export default AboutMeBoxes;
