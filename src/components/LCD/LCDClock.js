import React, { useState, useEffect } from "react";
import LCDNumber from "./LCDNumber";
import LCDColon from "./LCDColon";
import styled from "styled-components";

const ClockContainer = styled.div`
  display: grid;
  grid-column-gap: 3%;
  grid-template-columns: auto auto auto auto auto auto auto;
  justify-content: center;
  align-items: baseline;
  height: 100%;
  grid-area: clock;
`;

const LCDClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const width = 45;
  const height = 90;
  return (
    <ClockContainer>
      <LCDNumber number={parseInt(hours.charAt(0))} width={width} height={height} />
      <LCDNumber number={parseInt(hours.charAt(1))} width={width} height={height} />
      <LCDColon width={width / 2} height={height} />
      <LCDNumber number={parseInt(minutes.charAt(0))} width={width} height={height} />
      <LCDNumber number={parseInt(minutes.charAt(1))} width={width} height={height} />
      <LCDNumber number={parseInt(seconds.charAt(0))} width={width} height={height} small />
      <LCDNumber number={parseInt(seconds.charAt(1))} width={width} height={height} small />
    </ClockContainer>
  );
};

export default LCDClock;
