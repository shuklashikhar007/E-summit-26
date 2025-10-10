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
    { name: "Shivam", description: "Frontend Developer", post: "The summit was incredibly inspiring! The keynote sessions were thought-provoking, and the networking opportunities were top-notch. It gave me a fresh perspective on entrepreneurship." },
    { name: "Ramesh", description: "Graphic Designer", post: "I loved the mix of workshops and speaker sessions. The practical insights shared by industry experts were extremely helpful for my startup journey." },
    { name: "Swati", description: "UI/UX Designer", post: "The event was well-organized, and the energy throughout the summit was amazing. I especially enjoyed the pitch competition—it was both challenging and rewarding!" },
    { name: "Manoj", description: "College Fresher", post: "As a first-time attendee, I appreciated how approachable the speakers were. The panel discussions on funding and scaling startups were particularly useful." },
    { name: "Aryan", description: "Aspiring Product Manager", post: "The diversity of topics covered in the summit was impressive. From technology trends to leadership skills, every session added value to my entrepreneurial knowledge." }
  ];

  return (
        <CustomSlider
          heading="What our Participants speaks for us?"
          gradientText="Participants speaks"
          slidesData={slidesData}
          // uniqueClass="participants-slider"
           sliderType="participant"
        />
  );
};

export default ResponsiveComponent;
