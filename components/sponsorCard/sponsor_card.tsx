"use client";
import React from "react";
import Image from "next/image";
import styles from "./sponsor_card.module.css";
import SvgDefs from "./svg_defs";
import inflection from "../../public/carousel/Inflection-removebg-preview.png";
import hundred from "../../public/carousel/100x-removebg-preview.png";
import antler from "../../public/carousel/Antler-removebg-preview.png";
import axilor from "../../public/carousel/axilor-removebg-preview.png";
import faad from "../../public/carousel/faad-removebg-preview.png";
import fibonacci from "../../public/carousel/FibbonacciX-removebg-preview.png";
import fluid from "../../public/carousel/fluidventures-removebg-preview.png";
import forty from "../../public/carousel/FortyTwo.Vc-removebg-preview.png";
import kae from "../../public/carousel/kae-removebg-preview.png";
import launch from "../../public/carousel/LaunchX-removebg-preview.png";
import lets from "../../public/carousel/LetsVenture-removebg-preview.png";
import pedal from "../../public/carousel/PedalStart-removebg-preview.png";
import sooni from "../../public/carousel/Soonicorn-removebg-preview.png";
import west from "../../public/carousel/westbridge-removebg-preview.png";
import xscale from "../../public/carousel/Xscale-removebg-preview.png";
import yours from "../../public/carousel/Yournest.png";
import gs from "../../public/carousel/growth.png";
import aws from "../../public/carousel/aws-removebg-preview.png";
import amul from "../../public/carousel/amul-removebg-preview.png";
import digital from "../../public/carousel/digitalocean.png";
import zee from "../../public/carousel/zee-removebg-preview.png";
import unstop from "../../public/carousel/unstop-removebg-preview.png";
import jag from "../../public/carousel/jaguar.png";
import micro from "../../public/carousel/microsoft-removebg-preview.png";
import redbus from "../../public/carousel/redbus-removebg-preview.png";
import un from "../../public/carousel/unacademy.png";
import zoho from "../../public/carousel/zoho.png";
import fresh from "../../public/carousel/freshworks.png";
import icici from "../../public/carousel/icici-removebg-preview.png";
import bob from "../../public/carousel/bob.png";
import se from "../../public/carousel/safe.png";
import gfg from "../../public/carousel/gfg.png";
import go from "../../public/carousel/grabon.png";

import { X } from "lucide-react";

const MarqueeComponent: React.FC = () => {
  return (
    <div className={`${styles.root} dark`}>
      <div className="mb-12 text-center relative z-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 break-words">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Previous Sponsors
          </span>
        </h2>
      </div>

      <div className={styles.wrapper}>
        <SvgDefs />

        <div className={styles.marquee}>
          <div className={styles.marquee__group}>
            <Image src={inflection} alt="" height={200} width={200} />
            <Image src={hundred} alt="" height={200} width={200} />
            <Image src={antler} alt="" height={200} width={200} />
            <Image src={axilor} alt="" height={200} width={200} />
            <Image src={faad} alt="" height={200} width={200} />
            <Image src={forty} alt="" height={200} width={200} />
            <Image src={fibonacci} alt="" height={200} width={200} />
            <Image src={fluid} alt="" height={200} width={200} />
            <Image src={kae} alt="" className={styles.cardh} />
            <Image src={launch} alt="" height={200} width={200} />
            <Image src={lets} alt="" height={200} width={200} />
            <Image src={pedal} alt="" height={200} width={200} />
            <Image src={sooni} alt="" className={styles.cardh} />
            <Image src={west} alt="" height={200} width={200} />
            <Image src={xscale} alt="" height={200} width={200} />
            <Image src={yours} alt="" height={200} width={200} />
            <Image src={gs} alt="" height={200} width={200} />
            <Image src={aws} alt="" height={200} width={200} />
            <Image src={amul} alt="" className={styles.cardh} />
            <Image src={digital} alt="" className={styles.cardh} />
            <Image src={zee} alt="" className={styles.cardh} />
            <Image src={unstop} alt="" height={200} width={200} />
            <Image src={jag} alt="" height={200} width={200} />
            <Image src={micro} alt="" height={200} width={200} />
            <Image src={redbus} alt="" className={styles.cardh} />
            <Image src={un} alt="" height={200} width={200} />
            <Image src={zoho} alt="" height={200} width={200} />
            <Image src={fresh} alt="" height={200} width={200} />
            <Image src={icici} alt="" className={styles.cardh} />
            <Image src={bob} alt="" className={styles.cardh} />
            <Image src={se} alt="" height={200} width={200} />
            <Image src={gfg} alt="" className={styles.cardh} />
            <Image src={go} alt="" height={200} width={200} />
          </div>

          <div aria-hidden="true" className={styles.marquee__group}>
            <Image src={inflection} alt="" height={200} width={200} />
            <Image src={hundred} alt="" height={200} width={200} />
            <Image src={antler} alt="" height={200} width={200} />
            <Image src={axilor} alt="" height={200} width={200} />
            <Image src={faad} alt="" height={200} width={200} />
            <Image src={forty} alt="" height={200} width={200} />
            <Image src={fibonacci} alt="" height={200} width={200} />
            <Image src={fluid} alt="" height={200} width={200} />
            <Image src={kae} alt="" className={styles.cardh} />
            <Image src={launch} alt="" height={200} width={200} />
            <Image src={lets} alt="" height={200} width={200} />
            <Image src={pedal} alt="" height={200} width={200} />
            <Image src={sooni} alt="" className={styles.cardh} />
            <Image src={west} alt="" height={200} width={200} />
            <Image src={xscale} alt="" height={200} width={200} />
            <Image src={yours} alt="" height={200} width={200} />
            <Image src={gs} alt="" height={200} width={200} />
            <Image src={aws} alt="" height={200} width={200} />
            <Image src={amul} alt="" className={styles.cardh} />
            <Image src={digital} alt="" className={styles.cardh} />
            <Image src={zee} alt="" className={styles.cardh} />
            <Image src={unstop} alt="" height={200} width={200} />
            <Image src={jag} alt="" height={200} width={200} />
            <Image src={micro} alt="" height={200} width={200} />
            <Image src={redbus} alt="" className={styles.cardh} />
            <Image src={un} alt="" height={200} width={200} />
            <Image src={zoho} alt="" height={200} width={200} />
            <Image src={fresh} alt="" height={200} width={200} />
            <Image src={icici} alt="" className={styles.cardh} />
            <Image src={bob} alt="" className={styles.cardh} />
            <Image src={se} alt="" height={200} width={200} />
            <Image src={gfg} alt="" className={styles.cardh} />
            <Image src={go} alt="" height={200} width={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
