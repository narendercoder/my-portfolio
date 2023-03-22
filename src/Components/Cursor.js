import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Cursor = () => {
  const maincursor = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - maincursor.current.clientWidth / 2;
      const mouseY = clientY - maincursor.current.clientHeight / 2;
      maincursor.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    });
  }, []);

  useEffect(() => {
    let linkHover = [...document.querySelectorAll(".link")];
    const cursor = document.querySelector(".cursor");
    linkHover.map((child) => {
      child.addEventListener("mouseover", () => {
        cursor.classList.add("cursor-hover");
      });
      child.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-hover");
      });
      return child;
    });
  });
  return (
  <Wrapper>
    <div className="cursor" ref={maincursor}>
  </div>
  </Wrapper>
  );
}

export default Cursor;

const Wrapper = styled.div`
.cursor {
    position: fixed;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    left: 0;
    right: 0;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    transition: transform 250ms ease-out;
    z-index: 100;
    opacity: 0.3;
  }
.cursor.cursor-hover {
    opacity: 1;
    width: 70px;
    height: 70px;
    background-color: transparent;
    border: 1px solid black;
  }
@media (max-width: 1010px) {
    .cursor {
      display: none;
    }
  }
  
`
