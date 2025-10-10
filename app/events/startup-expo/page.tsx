import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section className={"md:mt-14 p-4 "}>
      <div className="flex flex-col items-center justify-center w-full h-screen ">
        <iframe
          id="ts-iframe"
          src="https://www.townscript.com/v2/widget/copy-of-showcase-your-startup-at-esummit-2024-iit-bhu-221422/booking"
          height="600"
          width="80%"
        ></iframe>
        <link
          rel="stylesheet"
          href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css"
        />
      </div>
    </section>
  );
};

export default page;
