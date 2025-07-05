"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Preloader({ onFinish }) {
  const textRef = useRef(null);
  const dotRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const phrases = [
        "Hello",       // English
        "ہیلو",         // Urdu
        "你好",          // Chinese (Mandarin)
        "Hallo",       // German
        "Hola",        // Spanish
        "नमस्ते",        // Hindi
      ];

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate the text phrases
    phrases.forEach((word) => {
      tl.to(textRef.current, {
        text: word,
        duration: 0.7,
        ease: "none",
      });
    });

    // Fade out text
    tl.to(textRef.current, {
      opacity: 0,
      duration: 0.3,
    });

    // Shrink & hide the dot
    tl.to(dotRef.current, {
      opacity: 0,
      width: 0,
      height: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });

    // Collapse the container
    tl.to(containerRef.current, {
      height: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: onFinish,
    });
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#1C1D20] z-[9999] flex items-center justify-center overflow-hidden"
    >
      <div className="flex items-center gap-4">
        <span
          ref={dotRef}
          className="bg-white w-[10px] h-[10px] rounded-full transition-all duration-300"
        ></span>
        <p
          ref={textRef}
          className="text-5xl font-light tracking-wide text-white"
        ></p>
      </div>
    </div>
  );
}
