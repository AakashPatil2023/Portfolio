import "./About.css";
const About = () => {
  return (
    <section className="about">
      {/* <h1>About Me</h1> */}
      <div className="about-container">
        <div className="about-content">
          <p className="intro">
            I'm a passionate software developer with 2+ years of experience creating digital solutions that make a difference. My journey started with curiosity about how things work and evolved into a deep love for crafting elegant code.
            I specialize in full-stack development, with expertise in React, Node.js, Python, and cloud technologies. Beyond technical skills, I believe in the power of collaboration and continuous learning to drive innovation.
            When I'm not coding, you'll find me exploring new frameworks, contributing to open source projects, or sharing knowledge with the developer community.
          </p>
        </div>
   
        <div className="values-container">
          <div className="value-card">
          <span className="icon">&lt;/&gt;</span>
            <h3>Clean Code</h3>
            <p>Writing maintainable, scalable solutions</p>
          </div>

          <div className="value-card">
          <span className="icon">💡</span>
            <h3>Innovation</h3>
            <p>Always exploring new technologies and approaches</p>
          </div>

          <div className="value-card">
          <span className="icon">🎯</span>
            <h3>Goal-Oriented</h3>
            <p>Focused on delivering results that matter</p>
          </div>

          <div className="value-card">
          <span className="icon">🤝</span>
            <h3>Collaboration</h3>
            <p>Thriving in team environments and mentoring others</p>
          </div>
        </div>
        </div>
     
    </section>
  );
};

export default About;
