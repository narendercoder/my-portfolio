import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import styled from "styled-components";
// import "./Portfolio.scss";
import { ProjImg } from "../Config/Config";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  const [items, setitems] = useState(ProjImg);

  const filterItem = (categItem) => {
    if (categItem === "all") {
      document.querySelector(".p-btn").classList.add("active");
      setitems(ProjImg);
    } else {
      document.querySelector(".p-btn").classList.remove("active");
      const updatedItems = ProjImg.filter((curElem) => {
        return curElem.category === categItem;
      });
      const result = updatedItems.sort(function(a, b){
        const nameA = a.name.toUpperCase();
        const nameB= b.name.toUpperCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      })
      setitems(result);
    }
  };
  return (
    <Wrapper>
      <div className="card-inner p-section">
        <div className="card-wrap">
          <div className="content work">
            <div className="title" data-aos="fade-up">
              <span className="first-word">Recent </span>
              Works
            </div>
          </div>
          <div className="p-btns">
            <button
              className="btn p-btn active"
              data-aos="fade-up"
              data-btn-num="2"
              onClick={() => filterItem("all")}
            >
              All
            </button>
            <button
              className="btn p-btn"
              data-aos="fade-up"
              data-btn-num="2"
              onClick={() => filterItem("react")}
            >
              React
            </button>
            <button
              className="btn p-btn"
              data-aos="fade-up"
              data-btn-num="3"
              onClick={() => filterItem("js")}
            >
              Javascript
            </button>
          </div>
          <motion.div layout className="grid-items border-line-v">
            <AnimatePresence>
              {items &&
                items.map((val, ind) => (
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    layout
                    key={ind}
                    className="grid-item photo"
                  >
                    <div className="box-item">
                      <div className="image">
                        <a href={val.href} aria-label={val.name}>
                          <div className="icon-box">
                            <MdOutlineRemoveRedEye
                              className="p-icon"
                              aria-label="eye outline"
                            />
                          </div>
                        </a>
                        <a href={val.href} className="link">
                          <img
                            src={val.imgsrc}
                            width="100"
                            height="100"
                            alt="img"
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <div className="desc title">
                        <a href={val.href} className="link name">
                          {val.name}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.section`
   .card-wrap{
      overflow: hidden;
      padding-bottom: 30px;
   }
   .content{
    margin: 0px 0px 10px;
   }
  .box-item .image .info:before { background: linear-gradient(135deg,rgba(120, 204, 109, 0.5) 0%,  rgba(120, 204, 109, 0.01) 100%);
  }

  .box-item .image .info:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
  }

  .p-section .grid-items {
    position: relative;
    max-width: 100vh;
    max-height: 400px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    margin: 0 -30px;
    overflow-y: scroll;

    .grid-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 0;
      padding-bottom: 20px;
      flex: 1 0 0%;
    }
    .grid-item {
      padding: 20px;
      .box-item {
        position: relative;
        text-align: center;
        width: 180px;
        overflow: hidden;
        &:hover {
          img {
            transform: scale(1.2);
          }
          .icon-box {
            display: inline;
          }
        }
        .icon-box {
          position: absolute;
          z-index: 2;
          display: none;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.3);
          .p-icon {
            position: relative;
            top: 40%;
            z-index: 2;
            font-size: 1.2rem;
            filter: brightness(130%);
            color: ${({ theme }) => theme.highlight.primary};
            cursor: pointer;
          }
        }

        .image {
          position: relative;
          overflow: hidden;
          border-radius: 4px;

          a {
            display: initial;

            img {
              position: relative;
              width: 100%;
              height: auto;
              transition: all 0.5s;
            }
          }
        }

        .desc {
          position: relative;
          padding: 10px 0 0 0;

          a {
            font-size: 0.7rem;
            &::before {
              right: auto;
              left: 0;
              bottom: 0;
              top: auto;
              width: 100%;
              height: 1px;
            }
          }
        }
      }
    }
  }
  .p-btns{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p-btn.active {
    text-decoration: underline;
  }
  .p-btn {
    width: auto;
    border: none;
    color: rgb(${({ theme }) => theme.title.primary});
  }
  .p-btn:hover,
  .p-btn:focus {
    text-decoration: underline;
    box-shadow: none !important;
  }
`;
