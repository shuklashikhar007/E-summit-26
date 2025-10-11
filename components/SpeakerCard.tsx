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
    <div
      className="
        relative flex flex-col w-64 m-4 md:m-2 rounded-xl 
        bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-[#000000] 
        border border-yellow-500/30 shadow-lg hover:shadow-yellow-500/20 
        transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400
      "
    >
      <div
        className="
          relative mx-4 mt-4 overflow-hidden rounded-xl shadow-lg
          border border-yellow-400/20
        "
      >
        <Image
          unoptimized
          width={500}
          height={800}
          src={props.imgURL}
          alt={props.name}
          className="w-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 text-center">
        <h4 className="mb-2 font-semibold text-lg text-yellow-400 tracking-wide drop-shadow-md">
          {props.name}
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          {props.des}
        </p>
      </div>

      <div className="flex justify-center p-6 pt-2 gap-7">
        {props.instaURL && (
          <Link
            className="hover:scale-125 transition ease-in-out"
            href={props.instaURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-400 transition-colors duration-300" />
          </Link>
        )}

        <Link
          className="hover:scale-125 transition ease-in-out"
          href={props.linkedinURL}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-yellow-400 text-2xl hover:text-yellow-300 transition-colors duration-300" />
        </Link>

        {props.twitterURL && (
          <Link
            className="hover:scale-125 transition ease-in-out"
            href={props.twitterURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-sky-400 text-2xl hover:text-sky-300 transition-colors duration-300" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;

