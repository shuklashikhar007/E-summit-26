import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface OwnProps {
  name: string;
  des: string;
  instaURL: string;
  linkedinURL: string;
  twitterURL?: string;
  imgURL: string;
}

type Props = OwnProps;

const SpeakerCard: FunctionComponent<Props> = (props: OwnProps) => {
  return (
    <div className="relative flex flex-col  hover:bg-accent  bg-card shadow-md bg-clip-border rounded-xl w-64 m-4 md:m-2">
      <div className="relative mx-4 mt-4 overflow-hidden  shadow-lg bg-clip-border rounded-xl">
        <Image
unoptimized
          width={500}
          height={800}
          // fill={true}
          src={props.imgURL}
          alt={props.name}
          className={"w-full"}
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="mb-2 antialiased font-semibold leading-snug tracking-normal">
          {props.name}
        </h4>
        <p className="antialiased text-sm leading-relaxed bg-clip-text">
          {props.des}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7">
        {/* <Link
          className="hover:scale-125 transition ease-in-out"
          href={props.instaURL}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-pink-600 text-2xl hover:text-pink-600/75 cursor-pointer transition ease-in-out" />
        </Link> */}
        <Link
          className="text-blue-600 hover:text-blue-600/75 hover:scale-125 transition ease-in-out"
          href={props.linkedinURL}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
        </Link>
        {/* <Link
          className="hover:scale-125 transition ease-in-out"
          href={props.instaURL}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="text-blue-600 text-2xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
        </Link> */}
      </div>
    </div>
  );
};

export default SpeakerCard;
