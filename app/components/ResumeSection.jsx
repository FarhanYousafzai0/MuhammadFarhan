// ResumeSection.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ResumeSection() {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Scroll Animation
    gsap.fromTo(
      sectionRef.current.querySelector(".resume-text"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Magnetic Button Effect
    const btn = buttonRef.current;
    const strength = 30;

    const moveMagnet = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x / strength,
        y: y / strength,
        ease: "power2.out",
      });
    };

    const resetMagnet = () => {
      gsap.to(btn, { x: 0, y: 0, ease: "power2.out" });
    };

    btn.addEventListener("mousemove", moveMagnet);
    btn.addEventListener("mouseleave", resetMagnet);

    return () => {
      btn.removeEventListener("mousemove", moveMagnet);
      btn.removeEventListener("mouseleave", resetMagnet);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="resume-text space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Let's Build Something <span className="text-[#FF6620]">Remarkable</span> Together
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Download my comprehensive resume to explore my professional journey,
            technical expertise, and innovative projects in detail. I'm excited
            about potential collaborations!
          </p>

          {/* Magnetic Download Button */}
         <div className="pt-4">
  <btutton
   
    download
    ref={buttonRef}
    className="relative inline-flex items-center cursor-pointer gap-3 px-8 py-5 bg-[#FF6620] text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
  >
    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
    <span className="relative z-10 flex items-center gap-2">
      <Download className="w-5 h-5" />
      Download Resume
    </span>
  </btutton>
  <p className="mt-4 text-sm text-gray-600">
    PDF • Updated: August 2025
  </p>
</div>
        </div>

        {/* Right Preview */}
        <div className="resume-preview hidden md:block relative">
          <div className="relative w-full h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-200 opacity-10"></div>
            <div className="absolute top-4 left-4 right-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-5xl font-bold text-gray-800 mb-4">RESUME</div>
                <div className="text-xl text-gray-600">Muhammad Farhan</div>
                <div className="mt-2 text-gray-500">Full Stack Developer</div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-[#0F9E99] to-[#0C7E7A] opacity-20"></div>
        </div>
      </div>
    </section>
  );
}