"use client";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import "@/app/globals.css";
import { Tilt } from "react-tilt";

interface Stat {
  value: string;
  label: string;
}

const statsData: Stat[] = [
  { value: "250+", label: "Startups" },
  { value: "8000+", label: "Attendees" },
  { value: "20+", label: "Guest Speakers" },
  { value: "15+", label: "Investors" },
  { value: "10+", label: "Events" },
  { value: "50+", label: "Partners" },
];

const StatItem: FunctionComponent<Stat & { isFirstItem: boolean }> = ({ value, label, isFirstItem }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(count, numericValue, {
            duration: 2,
            ease: "easeOut",
          });
          return controls.stop;
        }
      },
      {
        root: null,
        rootMargin: "1px",
        threshold: 0.1,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Tilt>
      <div
       
        ref={ref}
        className={`
          mt-4 text-center flex flex-col justify-center items-center p-4
          ${isFirstItem ? '' : 'md:border-l-2 border-white border-t-2 md:border-t-0 '} 
        
        `}
      >
        <div className="flex justify-center items-center gap-1">
          <motion.h2 className=" text-3xl sm:text-5xl font-bold text-primary-foreground">
            {rounded}
          </motion.h2>
          <span className="text-3xl sm:text-4xl font-semibold">+</span>
        </div>
        <p className="text-primary mt-2 capitalize">{label.toUpperCase()}</p>
      </div>
    </Tilt>
  );
};
const Stats: FunctionComponent = () => {
  return (
    <section className="px-0 md:px-20 py-10 overflow-hidden relative pb-16 mt-28 ">
    <h1 className="text-3xl md:text-4xl text-primary-foreground font-bold text-center mb-6">
      Key Event Statistics
    </h1>
    <div className="md:w-full w-1/3 mx-auto bg-white/10 px-8 py-6 rounded-xl shadow-lg backdrop-blur-sm flex flex-col md:flex-row justify-around items-center">
      {statsData.map((stat, index) => (
        // Passing `isFirstItem` as a prop to StatItem to apply different border styles
        <StatItem 
          key={index} 
          value={stat.value} 
          label={stat.label} 
          isFirstItem={index === 0}  // `isFirstItem` is true for the first item
        />
      ))}
    </div>
  </section>
  );
};

export default Stats;
