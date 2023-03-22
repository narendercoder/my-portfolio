import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
// import "./Home.scss";
import { Link, Outlet } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <section className="card-section home-card">
        <div className="profile">
          <div className="slide"></div>
          <div className="image">
            <img
              src="/assets/profile(1).jpg"
              width="936"
              height="936"
              alt="profile"
              loading="lazy"
            />
          </div>
          <div className="title" data-aos="fade-up">Narender Singh Bisht</div>
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
              multiText={["Developer", "Digital Artist", "Student", "Learner"]}
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
              aria-label="facebook"
             
            >
              <FaFacebook data-aos="fade-up"
              data-aos-delay="100"/>
            </a>
            <a
              className="link"
              href="https://www.instagram.com/artist_narender/"
              rel="noreferrer"
              target="_blank"
              aria-label="instagram"
            
            >
              <FaInstagram   data-aos="fade-up"
              data-aos-delay="200" />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/narender-singh-bisht-4529051b7/"
              rel="noreferrer"
              target="_blank"
              aria-label="linkedin"
              
            >
              <FaLinkedin data-aos="fade-up"
              data-aos-delay="300" />
            </a>
            <a
              className="link"
              href="https://twitter.com/Narender343872"
              rel="noreferrer"
              target="_blank"
              aria-label="twitter"
              
            >
              <FaTwitter data-aos="fade-up"
              data-aos-delay="400" />
            </a>
            <a
              className="link"
              href="https://github.com/narendercoder"
              rel="noreferrer"
              target="_blank"
              aria-label="github"
             
            >
              <FaGithub  data-aos="fade-up"
              data-aos-delay="500" />
            </a>
          </div>
          <div className="links">
            <a
              href="/assets/Resume.pdf"
              className="link"
              rel="noreferrer"
              target="_blank"

              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="text">download CV</span>
              <FaCloudDownloadAlt className="icon d-icon"  />
            </a>
            <Link to="/contact" className="link" data-aos="fade-up"
              data-aos-delay="100">
              <span className="text">Contact me</span>
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  .card-section {
    position: relative;
    float: left;
    z-index: 11;
    border-radius: 4px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
      border-radius: 0 0 4px 0;
    }
    &:after {
      content: "";
      position: absolute;
      left: -15px;
      top: -15px;
      width: 100%;
      height: 100%;
      background: var(--gradient1);
      border-radius: 4px;
    }
    .profile {
      padding: 50px;
      background-color: var(--bg-color-primary);
      position: relative;
      left: 0%;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 10;
      border-radius: 4px;
      padding-top: 50px;

      .slide {
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
        width: 100%;
        height: 52%;
        background-image: url("/assets/mountain.jpg");
        background-color: var(--white);
        background-repeat: no-repeat;
        background-position: 50% 0%;
        background-size: cover;
        border-radius: 4px 4px 0 0;
        &::before {
          content: "";
          position: absolute;
          background-color: var(--white);
          transform: rotate(12deg);
          left: -25%;
          bottom: -63%;
          width: 100%;
          height: 70%;
        }
        &::after {
          content: "";
          position: absolute;
          background-color: var(--white);
          transform: rotate(-8deg);
          left: auto;
          right: -25%;
          bottom: -63%;
          width: 100%;
          height: 70%;
        }
      }
      .image {
        position: relative;
        display: inline-block;
        margin: 80px 0 20px 0;
        width: 146px;
        img {
          position: relative;
          display: block;
          width: 100%;
          height: auto;
          border: 3px solid var(--white);
          border-radius: 50%;
        }
        &:before {
          content: "";
          position: absolute;
          top: 10px;
          left: -10px;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          background-color: var(--highlight-primary);
        }
      }

      .title {
        margin: 0 0 10px 0;
        font-size: 2.1rem;
        color: var(--title-clr-secondary);
        line-height: 32px;
        font-weight: 400;
      }
      .social {
        position: relative;
        margin: 16px 0 0 0;

        a {
          position: relative;
          display: block;
          line-height: normal;
          height: auto;
          width: auto;
          margin: 0 6px;
          font-size: 1.1rem;
          display: inline-block;
          transition: all 0.2s linear;
          &:before {
            content: none;
          }
        }
      }
      .subtitle-typed {
        position: relative;
        margin: 0;
        display: inline-block;
        color: var(--mantis);
        font-size: 1rem;
        line-height: 20px;
        height: 20px;
        font-weight: 400;
      }
      .links {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 70px;
        z-index: 10;
        &:before {
          background: var(--gradient2);
        }
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 1px;
        }
        .link {
          &::before {
            content: normal;
          }

          &:hover {
            color: var(--highlight-primary);
          }
        }
      }
    }
  }
  .card-section .profile .social a:hover {
    transform: translateY(-3px);
  }
  .card-section .profile .social a:nth-child(2):hover {
    color: var(--fandango);
  }
  .card-section .profile .social a:nth-child(1):hover,
  .card-section .profile .social a:nth-child(3):hover {
    color: var(--chambreyblue);
  }
  .card-section .profile .social a:nth-child(4):hover {
    color: var(--deepskyblue);
  }
  .card-section .profile .social a:nth-child(5):hover {
    color: var(--black);
  }
  .links .d-icon {
    font-size: large;
    margin: 0 6px;
    display: none;
  }
  .links a:hover .d-icon {
    display: inline;
  }
  @media (min-width: 1197px) {
    .card-section {
      width: 480px;
      height: 100%;
    }
  }
`;
