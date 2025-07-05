// components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen px-4 md:px-16 py-20 bg-[#1a1a1a] text-neutral-200 font-sans grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* LEFT FORM */}
      <div className="flex flex-col gap-10">
        {/* Name */}
        <div>
          <p className="text-xs text-neutral-500 font-light">01</p>
          <h4 className="text-sm mb-2">What's your name?</h4>
          <p className="text-neutral-400 text-sm">John Doe *</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-xs text-neutral-500 font-light">02</p>
          <h4 className="text-sm mb-2">What's your email?</h4>
          <p className="text-neutral-400 text-sm">john@doe.com *</p>
        </div>

        {/* Org Name */}
        <div>
          <p className="text-xs text-neutral-500 font-light">03</p>
          <h4 className="text-sm mb-2">What's the name of your organization?</h4>
          <p className="text-neutral-400 text-sm">John & Doe ©</p>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs text-neutral-500 font-light">04</p>
          <h4 className="text-sm mb-2">What services are you looking for?</h4>
          <p className="text-neutral-400 text-sm">Web Design, Web Development ...</p>
        </div>

        {/* Message */}
        <div>
          <p className="text-xs text-neutral-500 font-light">05</p>
          <h4 className="text-sm mb-2">Your message</h4>
          <p className="text-neutral-400 text-sm">Hello Dennis, can you help me with ... *</p>
        </div>
      </div>

      {/* RIGHT INFO */}
      <div className="flex flex-col gap-8 text-sm">
        <div>
          <h5 className="text-neutral-500 uppercase text-xs mb-2">Contact Details</h5>
          <p className="mb-1">info@dennissnellenberg.com</p>
          <p>+31 6 27 84 74 30</p>
        </div>

        <div>
          <h5 className="text-neutral-500 uppercase text-xs mb-2">Business Details</h5>
          <p>Dennis Snellenberg B.V.</p>
          <p>CoC: 92411711</p>
          <p>VAT: NL866034080B01</p>
          <p>Location: The Netherlands</p>
        </div>

        <div>
          <h5 className="text-neutral-500 uppercase text-xs mb-2">Socials</h5>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Awwwards</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
