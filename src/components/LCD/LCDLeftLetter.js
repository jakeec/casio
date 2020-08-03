import React from "react";

const coordsToPoints = (coords, width, height) => {
  let points = [];
  coords.forEach((coord) => {
    points.push([coord[0] * width, coord[1] * height].join(","));
  });
  return points.join(" ");
};

const Cell = (props) => <polygon opacity={props.on ? "1" : "0.02"} points={props.points} />;

const TopCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [0.03, 0],
        [0.3, 0.25],
        [0.7, 0.25],
        [0.88, 0],
      ],
      width,
      height
    )}
    on={on}
  />
);

const TopLeftCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [0, 0.05],
        [0.03, 0.015],
        [0.2, 0.14],
        [0.2, 0.435],
        [0.09, 0.49],
        [0, 0.45],
      ],
      width,
      height
    )}
    on={on}
  />
);

const TopMiddleCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [0.4, 0.05],
        [0.43, 0.015],
        [0.6, 0.14],
        [0.6, 0.435],
        [0.49, 0.49],
        [0.4, 0.45],
      ],
      width,
      height
    )}
    on={on}
  />
);

const TopRightCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [1, 0.025],
        [0.9, 0],
        [0.8, 0.14],
        [0.8, 0.435],
        [0.91, 0.49],
        [1, 0.45],
      ],
      width,
      height
    )}
    on={on}
  />
);

const MiddleCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [0.1, 0.5],
        [0.3, 0.45],
        [0.7, 0.45],
        [0.9, 0.5],
        [0.7, 0.55],
        [0.3, 0.55],
      ],
      width,
      height
    )}
    on={on}
  />
);

const BottomLeftCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [0, 0.95],
        [0.03, 0.985],
        [0.2, 0.86],
        [0.2, 0.565],
        [0.09, 0.51],
        [0, 0.55],
      ],
      width,
      height
    )}
    on={on}
  />
);

const BottomMiddleCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [0.4, 0.95],
        [0.43, 0.985],
        [0.6, 0.86],
        [0.6, 0.565],
        [0.49, 0.51],
        [0.4, 0.55],
      ],
      width,
      height
    )}
    on={on}
  />
);

const BottomRightCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [1, 0.975],
        [0.9, 1],
        [0.8, 0.86],
        [0.8, 0.565],
        [0.91, 0.51],
        [1, 0.55],
      ],
      width,
      height
    )}
    on={on}
  />
);

const BottomCell = ({ on, width, height }) => (
  <Cell
    points={coordsToPoints(
      [
        [0.03, 1],
        [0.3, 0.875],
        [0.7, 0.875],
        [0.88, 1],
      ],
      width,
      height
    )}
    on={on}
  />
);

const LCDLeftLetter = ({ letter, small, width, height }) => {
  if (small) {
    width = width * 0.65;
    height = height * 0.65;
  }
  return (
    <svg width={width} height={height}>
      <g>
        <TopCell width={width} height={width} on={["M", "T", "F", "S"].includes(letter)} />
        <TopLeftCell width={width} height={height} on={["M", "W", "F", "S"].includes(letter)} />
        <TopMiddleCell width={width} height={height} on={["M", "T"].includes(letter)} />
        <TopRightCell width={width} height={height} on={["M", "W"].includes(letter)} />
        <MiddleCell width={width} height={height} on={["F", "S"].includes(letter)} />
        <BottomLeftCell width={width} height={height} on={["M", "W", "F"].includes(letter)} />
        <BottomMiddleCell width={width} height={height} on={["T", "W"].includes(letter)} />
        <BottomRightCell width={width} height={height} on={["M", "W", "S"].includes(letter)} />
        <BottomCell width={width} height={height} on={["W", "S"].includes(letter)} />
      </g>
    </svg>
  );
};

export default LCDLeftLetter;
