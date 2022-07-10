import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import "./About.scss";

function About() {
  const [age, setAge] = useState("");
  const yearOfBirth = "2001";
  const getAge = () => {
    setAge(new Date().getFullYear() - yearOfBirth);
  };
  useEffect(() => {
    getAge();
  });
  return (
    <>
      <Home />
      <div className="card-inner">
        <div className="card-wrap">
          <div className="content about">
            <div className="title">
              <span className="first-word">About </span>
              Me
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="text-box">
                  <p>
                    <b>Hello! I'm Narender Singh Bisht</b>, Full Stack developer
                    from delhi, India. I am currently pursuing Engineering in
                    Electrical and Electronics from Maharaja Agrasen Institute
                    of Technology. My hobby is digital art and learning new things and technologies. I love the simple and minimalistic design as you can see in my
                    projects.
                  </p>
                </div>
              </div>
              <div className="col col-6 border-line-v">
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Age: </strong>
                      {age}
                    </li>
                    <li>
                      <strong>Birthday: </strong>22 April 2001
                    </li>
                    <li>
                      <strong>Hometown: </strong>Pithoragarh, Uttarakhand
                    </li>
                    <li>
                      <strong>Gmail: </strong>narendersinghbisht382@gmail.com
                    </li>
                    <li>
                      <strong>Residence: </strong>Delhi, India
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content about">
            <div className="title">
              <span>Hobbies</span>
            </div>
            <div className="row">
              <div className="col col-6 col-t-6 col-m-12 border-line-v">
                <div className="hobby-list">
                  <ul>
                    <li>
                      <strong>Digital Art</strong>
                    </li>
                    <li>
                      <strong>Coding</strong>
                    </li>
                    <li>
                      <strong>Travelling</strong>
                    </li>
                    <li>
                      <strong>Reading</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
