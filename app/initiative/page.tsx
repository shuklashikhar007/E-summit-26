"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CardWithForm() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        {/* Cards Container */}
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 mt-20 lg:mt-28">
          
          {/* Card 1 with Link and Hover Effect */}
          {/* ✅ MOVED the responsive width classes from the Card to the Link component */}
          <Link 
            href="https://www.ecelliitbhu.com/" 
            className="block w-[90%] sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[35%]"
          >
            {/* ✅ ADDED w-full to the Card so it fills the Link container */}
            <Card className="w-full  bg-transparent border border-black bg-white rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <CardContent className="p-4">
                <div className="w-full h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-md">
                  <Image
                    unoptimized
                    src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern interior design"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card 2 with Link and Hover Effect */}
          {/* ✅ MOVED the responsive width classes from the Card to the Link component */}
          <Link 
            href="https://www.ecelliitbhu.com/" 
            className="block w-[90%] sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[35%]"
          >
            {/* ✅ ADDED w-full to the Card so it fills the Link container */}
            <Card className="w-full bg-transparent border border-black bg-white rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <CardContent className="p-4">
                <div className="w-full h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-md">
                  <Image
                    unoptimized
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
                    alt="Minimalist living room"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

        </div>
      </div>
    </>
  );
}