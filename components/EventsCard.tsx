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
    <div className="flex flex-wrap justify-center overflow-hidden bg-card rounded m-2">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1 }}
        className={"sm:w-72 py-6 m-2 rounded-xl card-bg"}
      >
        <div className={"flex justify-center"}>
          <Image
unoptimized
            src={props.imageUrl}
            alt={props.title}
            width={250}
            height={200}
            className={"rounded"}
          />
        </div>
        <h1 className={"text-center font-bold text-xl"}>{props.title}</h1>
        <h2 className={"text-sm text-gray-500 p-4"}>
          {isExpanded ? props.description : shortDescription}
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary cursor-pointer"
          >
            {isExpanded ? "...less" : "...more"}
          </span>
        </h2>
        <div className={"flex justify-center"}>
          <a href={props.eventPage} target="_blank">
            <Button variant={"secondary"}>Register</Button>
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
