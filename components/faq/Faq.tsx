import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import Layout from "@/components/faq/components/Layout";
import data from "./faqdata.json";
const inter = Inter({ subsets: ["latin"] });

export default function Faqs() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <>
      <div className="grid bg-black place-items-center w-full rounded-t-3xl">
        <Layout
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={data}
          turn={active}
          setTurn={setActive}
        />
      </div>
    </>
  );
}
