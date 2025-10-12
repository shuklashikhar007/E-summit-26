"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type EventProps = {
  title: string;
  description: string;
  imageUrl: string;
  eventPage: string;
};

const EventsCard: (props: EventProps) => JSX.Element = (props: EventProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortDescription = `${props.description.substring(0, 100)}`;

  return (
    <div className="flex flex-wrap justify-center overflow-hidden m-2">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1 }}
        className="
          sm:w-72 py-6 m-2 rounded-xl 
          bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-[#000000]
          border border-yellow-500/30 shadow-lg hover:shadow-yellow-500/20 
          transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400
        "
      >
        <div className="flex justify-center">
          <Image
            unoptimized
            src={props.imageUrl}
            alt={props.title}
            width={250}
            height={200}
            className="rounded-md object-cover border border-yellow-400/20 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-center font-bold text-xl text-yellow-400 mt-3 tracking-wide">
          {props.title}
        </h1>

        <h2 className="text-sm text-gray-300 p-4 leading-relaxed">
          {isExpanded ? props.description : shortDescription}
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            {isExpanded ? " ...less" : " ...more"}
          </span>
        </h2>

        <div className="flex justify-center mt-2">
          <a href={props.eventPage} target="_blank" rel="noreferrer">
            <Button
              variant="secondary"
              className="
                bg-yellow-500 text-black font-semibold 
                hover:bg-yellow-400 hover:shadow-yellow-400/40 
                shadow-md transition-all duration-300
              "
            >
              Register
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default EventsCard;

// <article className="group relative flex flex-col space-y-2">
//   <Image
//     src={props.imageUrl}
//     alt={props.title}
//     width={404}
//     height={0}
//     className="rounded-md w-[400px] h-[200px] border bg-muted transition-colors bg-contain"
//   />
//   <h2 className="text-2xl font-extrabold">{props.title}</h2>
//   <p className="text-muted-foreground text-sm">{props.description}</p>
//
//   <p className="text-sm text-muted-foreground">123</p>
//
//   <Link href={props.eventPage} className="absolute inset-0">
//     <span className="sr-only">View Article</span>
//   </Link>
// </article>
