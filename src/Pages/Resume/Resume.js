import React from "react";
import Home from "../Home/Home";
import { SkillSet } from "../../Config/Config";
import { Experience, Education } from "../../Config/Config";
import { FaUniversity, FaBriefcase } from "react-icons/fa";
import Card from "./Card";
import "./Resume.scss";

function Resume() {
  const SkillCard = (val, ind) => {
    return <Card key={ind} name={val.name} imgsrc={val.imgsrc} />;
  };

  return (
    <>
      <Home />
      <div className="card-inner">
        <div className="card-wrap">
        <div className="content resume">
            <div className="title">
              <span>Resume</span>
            </div>
            <div className="row">
              <div className="col col-6  border-line-v">
                <div className="resume-title border-line-h">
                  <div className="icon">
                    <FaBriefcase />
                  </div>
                  <div className="name">Experience</div>
                </div>
                <div className="resume-items">
                  {Experience &&
                    Experience.map((val, ind) => (
                      <div key={ind} className={val.date.includes("Present") ? `${'resume'}-${'item'} ${'active'} ${'border'}-${'line'}-${'h'}` : `${'resume'}-${'item'} ${'border'}-${'line'}-${'h'}`}>
                        <div className="date">{val.date}</div>
                        <div className="name">{val.name}</div>
                        <div className="company">{val.company}</div>
                        <p className="experience-desc">
                        <ul>
                        {val.desc.map((val)=>(
                          <li>{val}</li>
                        ))}
                        </ul>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col col-6  border-line-v">
                <div className="resume-title border-line-h">
                  <div className="icon">
                    <FaUniversity />
                  </div>
                  <div className="name">Education</div>
                </div>
                <div className="resume-items">
                  {Education && 
                  Education.map((val, ind) => (
                    <div key={ind} 
                    className={val.date.includes("Present") ? `${'resume'}-${'item'} ${'active'} ${'border'}-${'line'}-${'h'}` : `${'resume'}-${'item'} ${'border'}-${'line'}-${'h'}`}>
                      <div className="date">{val.date}</div>
                      <div className="name">{val.name}</div>
                      <div className="company">{val.company}</div>
                      <p>{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="content skills">
            <div className="title">
              <span className="first-word">My </span>
              Skills
            </div>
            <div className="row grid-items border-line-v">
              <div className="grid-item">{SkillSet && SkillSet.map(SkillCard)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
