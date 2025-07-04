"use client"
import Lenis from 'lenis';
import React, { useEffect } from 'react'
import { Footer } from '../components/Footer';


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

      <Footer/>
    </>
  )
}

export default layout
