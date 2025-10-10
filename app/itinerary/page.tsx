
import React, { FunctionComponent } from "react";
import Image from "next/image";
import Guestcard from "@/components/guestcard/Guestcard";
import Itinerary from "@/components/Itinerary";
import table from "@/public/images/itineary.png";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section className="w-full pt-[100px]"> 
      <div className="relative w-full min-h-screen">
        <Image
          src={table}
          alt="schedule"
          width={1500} 
          height={800} 
          className="mx-auto" 
        />
      </div>
    </section>
  );
};

export default page;
