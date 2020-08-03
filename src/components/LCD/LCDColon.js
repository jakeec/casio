import React from "react";

const LCDColon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <g transform="skewX(-2)">
        <circle cx={width / 2} cy={height / 4} r={height / 15} fill="black" />
        <circle cx={width / 2} cy={(height / 4) * 3} r={height / 15} fill="black" />
      </g>
    </svg>
  );
};

export default LCDColon;
