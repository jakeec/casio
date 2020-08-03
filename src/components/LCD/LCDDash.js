import React from "react";

const LCDDash = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <g transform="skewX(-2)">
        <rect x={0} y={height / 2.2} width={width} height={height / 10} />
      </g>
    </svg>
  );
};

export default LCDDash;
