"use client"
import Lenis from 'lenis';
import React, { useEffect } from 'react'


const layout = ({children}) => {
     useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1, 
      smoothWheel: true,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>

      {children}
    </>
  )
}

export default layout
