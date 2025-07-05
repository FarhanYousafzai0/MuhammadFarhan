"use client";
import Magnetic from "@/app/components/Magnetic";
import Nav2 from "@/app/components/Nav2";
import Link from "next/link";
import React, { useState } from "react";
import { SpinnerDotted } from "spinners-react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xyzjaegg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          services: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    
    
    
    <Nav2/>
    
    <div className="w-screen min-h-screen bg-white text-black">
      {/* Top Heading */}
      <div className="md:w-[80%] w-[90%] py-10 mx-auto">
        <span className="md:text-6xl text-4xl font-normal ">
          Let's build something <br /> great together.
        </span>

        {/* Form + Contact Info */}
        <div className="w-full pt-16 flex flex-col md:flex-row gap-20 text-lg">
          {/* LEFT: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 md:w-1/2 w-full"
          >
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 text-red-800 rounded-lg">
                Oops! Something went wrong. Please try again or contact me directly.
              </div>
            )}

            {/* Name */}
            <div>
              <p className="text-xs text-neutral-400 font-light">01</p>
              <label className="text-lg mb-1 block" htmlFor="name">
                What's your name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Email */}
            <div>
              <p className="text-xs text-neutral-400 font-light">02</p>
              <label className="text-lg mb-1 block" htmlFor="email">
                What's your email?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@doe.com"
                className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Organization */}
            <div>
              <p className="text-xs text-neutral-400 font-light">03</p>
              <label className="text-lg mb-1 block" htmlFor="organization">
                What's the name of your organization?
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="John & Doe"
                className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
                value={formData.organization}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Services */}
            <div>
              <p className="text-xs text-neutral-400 font-light">04</p>
              <label className="text-lg mb-1 block" htmlFor="services">
                What services are you looking for?
              </label>
              <input
                type="text"
                id="services"
                name="services"
                placeholder="Web Design, Web Development..."
                className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
                value={formData.services}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Message */}
            <div>
              <p className="text-xs text-neutral-400 font-light">05</p>
              <label className="text-lg mb-1 block" htmlFor="message">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Hello Farhan, can you help me with ..."
                className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600 resize-none"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <Magnetic>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative flex items-center justify-center cursor-pointer shadow-lg text-white w-[150px] h-[150px] rounded-full transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? (<SpinnerDotted size={50} thickness={100} speed={100} color="#ffffff" />) : "Send it!"}
              </button>
            </Magnetic>
          </form>

          {/* RIGHT: Contact Info */}
          <div className="flex flex-col gap-10 md:w-1/2 w-full">
            {/* Contact Details */}
            <div>
              <h5 className="text-neutral-400 uppercase text-xs mb-2">
                Contact Details
              </h5>
              <p className="mb-1 text-black">coderwithferry@gmail.com</p>
              <p className="text-black">+92 3197421574</p>
            </div>

            {/* Business Info */}
            <div>
              <h5 className="text-neutral-400 uppercase text-xs mb-2">
                Business Details
              </h5>
              <p className="text-black">FarhanYousfzai</p>
              <p className="text-black">Location: Pakistan</p>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-neutral-400 uppercase text-xs mb-2">Socials</h5>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="https://github.com/coderwithferry"
                    className="hover:underline text-black"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/"
                    className="hover:underline text-black"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/"
                    className="hover:underline text-black"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
    
  );
};

export default page;