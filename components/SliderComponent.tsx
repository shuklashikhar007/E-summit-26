'use client';
import React, { useState, useEffect } from "react";
import CustomSlider from "./CustomSlider"; // Import your CustomSlider component
import AlternativeComponent from "./AltComp";

const ResponsiveComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Update screen size on resize
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set the breakpoint (md)
    };

    updateScreenSize(); // Check initial screen size
    window.addEventListener("resize", updateScreenSize); // Listen for window resize

    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup listener
  }, []);

  const slidesData = [
    {
      name: "Shivam",
      description: "Frontend Developer",
      post: "The summit was incredibly inspiring! The keynote sessions were thought-provoking, and the networking opportunities were top-notch. It gave me a fresh perspective on entrepreneurship.",
    },
    {
      name: "Ramesh",
      description: "Graphic Designer",
      post: "I loved the mix of workshops and speaker sessions. The practical insights shared by industry experts were extremely helpful for my startup journey.",
    },
    {
      name: "Swati",
      description: "UI/UX Designer",
      post: "The event was well-organized, and the energy throughout the summit was amazing. I especially enjoyed the pitch competition—it was both challenging and rewarding!",
    },
    {
      name: "Manoj",
      description: "College Fresher",
      post: "As a first-time attendee, I appreciated how approachable the speakers were. The panel discussions on funding and scaling startups were particularly useful.",
    },
    {
      name: "Aryan",
      description: "Aspiring Product Manager",
      post: "The diversity of topics covered in the summit was impressive. From technology trends to leadership skills, every session added value to my entrepreneurial knowledge.",
    },
  ];

  return (
    <section
      className="
        relative py-16 md:py-20 
        bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a]
        text-yellow-400
        overflow-hidden
      "
    >
      <div className="text-center mb-8 px-4">
        <h2
          className="
            text-3xl md:text-5xl font-extrabold uppercase tracking-wide
            text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
            drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]
          "
        >
          What Our Participants Say
        </h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base">
          Hear directly from the attendees about their experiences at the summit.
        </p>
      </div>

      {/* Custom Slider */}
      <div className="mx-auto max-w-6xl px-4">
        <CustomSlider
          heading="What our Participants speak for us?"
          gradientText="Participants speak"
          slidesData={slidesData}
          sliderType="participant"
        />
      </div>
    </section>
  );
};

export default ResponsiveComponent;

