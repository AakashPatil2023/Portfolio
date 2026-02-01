import "./Home.css";
import profileImg from "../../src/assets/images/Profile.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">

        {/* LEFT SIDE – INTRO */}
        <div className="home-content">
          <h1>
            Hi, I'm <span>Aakash</span> 👋
          </h1>
          <p className="subtitle">
            Software Engineer | Full Stack Developer
          </p>

          <p className="intro">
            I build modern, scalable web applications using React, Laravel,
            Node.js, and MySQL. Passionate about clean UI and efficient backend
            systems.
          </p>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="home-image">
          <img src={profileImg} alt="Aakash Profile" />
        </div>

      </div>
    </section>
  );
};

export default Home;
