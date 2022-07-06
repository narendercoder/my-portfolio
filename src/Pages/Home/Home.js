import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./Home.scss";
import { Link, Outlet } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="card-section home-card">
        <div className="profile">
          <div className="slide"></div>
          <div className="image">
            <img src="profile(1).jpg" alt="" />
          </div>
          <div className="title">Narender Singh Bisht</div>
          <div className="subtitle subtitle-typed">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#78cc6d",
                fontWeight: 500,
                fontSize: "16px",
              }}
              startDelay={2000}
              cursorColor="#78cc6d"
              multiText={[
                "Developer",
                "Designer",
                "Digital Artist",
                "Student",
                "Learner",
              ]}
              multiTextDelay={1000}
              typeSpeed={50}
              multiTextLoop
            />
          </div>
          <div className="social">
            <a
              className="link"
              href="https://www.facebook.com/narender.singhbisht.3538"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="link"
              href="https://www.instagram.com/artist_narender/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/narender-singh-bisht-4529051b7/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="link"
              href="https://twitter.com/Narender343872"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="link"
              href="https://github.com/narendercoder"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
          <div className="links">
            <a href="Resume.pdf" className="link" rel="noreferrer" target="_blank">
              <span className="text">download cv</span>
              <FaCloudDownloadAlt className="icon d-icon" />
            </a>
            <Link to="/contact" className="link">
              <span className="text">Contact me</span>
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default Home;
