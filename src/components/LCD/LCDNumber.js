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
        [0.3, 0.14],
        [0.3, 0.435],
        [0.09, 0.49],
        [0, 0.45],
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
        [0.7, 0.14],
        [0.7, 0.435],
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
        [0.3, 0.86],
        [0.3, 0.565],
        [0.09, 0.51],
        [0, 0.55],
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
        [0.7, 0.86],
        [0.7, 0.565],
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

const LCDNumber = ({ number, small, width, height }) => {
  if (small) {
    width = width * 0.65;
    height = height * 0.65;
  }
  return (
    <svg width={width} height={height}>
      <g>
        <TopCell width={width} height={width} on={[0, 2, 3, 5, 6, 7, 8, 9].includes(number)} />
        <TopLeftCell width={width} height={height} on={[0, 4, 5, 6, 8, 9].includes(number)} />
        <TopRightCell width={width} height={height} on={[0, 1, 2, 3, 4, 7, 8, 9].includes(number)} />
        <MiddleCell width={width} height={height} on={[2, 3, 4, 5, 6, 8, 9].includes(number)} />
        <BottomLeftCell width={width} height={height} on={[0, 2, 6, 8].includes(number)} />
        <BottomRightCell width={width} height={height} on={[0, 1, 3, 4, 5, 6, 7, 8, 9].includes(number)} />
        <BottomCell width={width} height={height} on={[0, 2, 3, 5, 6, 8, 9].includes(number)} />
      </g>
    </svg>
  );
};

export default LCDNumber;
