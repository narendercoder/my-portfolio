import React, { useEffect, useRef } from "react";
import "./Cursor.scss"
function Cursor() {
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
  <div className="cursor" ref={maincursor}>
  </div>
  );
}

export default Cursor;
