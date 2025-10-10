import React from "react";
import { svgData } from "./svgData";

const SvgDefs: React.FC = () => (
  <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      {svgData.map(({ id, viewBox, path }) => (
        <symbol key={id} id={id} viewBox={viewBox}>
          <path d={path} />
        </symbol>
      ))}
    </defs>
  </svg>
);

export default SvgDefs;
