"use client";

import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import Preloader from '../components/PreLoader';

const Layout = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {showLoader ? (
        <Preloader onFinish={() => setShowLoader(false)} />
      ) : (
        <>
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
