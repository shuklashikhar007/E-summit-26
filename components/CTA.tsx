"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Ticket from "@/components/Ticket";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className=" flex justify-center relative  pb-12 md:pb-24 lg:pb-32"
    >
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className=" text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
          Get Your{" "}
          <span
          style={{
          background: "linear-gradient(90deg, #6A23A6, #E91045)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          }}
          >
          Passes
          </span>{" "}
          for the Most Exciting Event of the Year!
          </h2>
          <p className="w-full text-xs sm:text-sm text-center md:text-xl/relaxed text-primary-foreground lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Don&apos;t miss out on this unique opportunity to connect with
            industry
            <br />
            leaders and like-minded individuals.
          </p>
        </div>
        <div className={"flex justify-center items-top lg:h-96"}>
          <div className="lg:relative lg:right-80">
            <Ticket />
          </div>
        </div>
        <div className="flex justify-center flex-col  min-[400px]:flex-row">
          <Link
            href={"/payment?type=esummit"}
            className={"flex justify-center items-center"}
          >
            <Button>Purchase Pass</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
