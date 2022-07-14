import React, { useEffect, useState } from "react";
import { Services } from "../../Config/Config";
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
                    <b>I'm</b>{" "} {new Date().getFullYear() <=2024 ? ` a ${new Date().getFullYear() - 2020}nd year B.tech student pursuing ` : "graduated"}
                    Electrical and Electronics Engineering from Maharaja Agrasen Institute of Technology. By Profession, I'm a full-stack web developer. 
                    I love the simple and minimalistic design and learning new things and technologies. 
                    I'm also a digital artist by passion.
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
  
          <div className="content services">
            <div className="title">
              <span className="first-word">My{" "}</span>Services
            </div>
            <div className="row service-items border-line-v" >
            {Services.map((val,ind)=>(
                    <div key={ind} className="col col-6 border-line-h">
                      <div className="service-item">
                        <div className="icon">
                          <span>
                            {val.icon}
                          </span>
                        </div>
                        <div className="name"><span>{val.name}</span></div>
                        <div className="desc">
                        <div>
                        <p>{val.desc}</p>
                        </div>
                        </div>
                      </div>
                    </div>
            ))}
            </div>
          </div>
          <div className="content hobby">
            <div className="title">
              <span>Hobbies</span>
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
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
