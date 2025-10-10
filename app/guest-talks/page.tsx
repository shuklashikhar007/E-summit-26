import React, { FunctionComponent } from "react";

import Guestcard from "@/components/guestcard/Guestcard";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className={"mt-32 sm:mx-4"}>
        <Guestcard />
      </div>
    </section>
  );
};

export default page;
