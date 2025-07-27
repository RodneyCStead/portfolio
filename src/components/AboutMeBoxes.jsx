// A component that displays a photo of me, a short bio, and links to my social media accounts.

const AboutMeBoxes = () => {
  return (
    <div className = "aboutMeBoxesContainer">
        <div className = "photoBox">
          <img src={`${process.env.PUBLIC_URL}/profilepic.jpg`} alt="A photo of me" />
        </div>
        <div className = "aboutMeSocial">
          <a href = "https://github.com/RodneyCStead">
            <img src={`${process.env.PUBLIC_URL}/github.svg`} alt="" />
          </a>
          <a href = "https://www.linkedin.com/in/rodney-c-stead-5b70672a9/">
            <img src={`${process.env.PUBLIC_URL}/linkedin.svg`} alt="" />
          </a>
        </div>
        <div className = "aboutMeTextContainer">
          <div className = "aboutMeTextBox">
            <h2>About Me</h2>
            <p>
              Hi! my name is Rodney Stead. I am a recent graduate of Keyin College's
              Software Development program. As a student, I learned
              python, html, css, javascript as well as postgresql and MySql database tools. I am currently looking to expand my knowledge
              and put use to what I know into practice with a company that is as passionate about technology as I am.
              Thanks for viewing my profile and I look forward to hearing from you!.
            </p>
          </div>
        </div>
      
    </div>
  )
}

export default AboutMeBoxes;
