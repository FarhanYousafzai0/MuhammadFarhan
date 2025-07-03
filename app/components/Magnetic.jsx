import React, { useRef } from "react";
import { gsap } from "gsap";

const Magnetic = ({ children, strength = 0.3, scale = 1.03 }) => {
  const magneticRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = magneticRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;

    gsap.to(magneticRef.current, {
      x,
      y,
      scale,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(magneticRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={magneticRef}
      className="inline-block will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Magnetic;
