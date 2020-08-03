import React, { useState, useEffect } from "react";
import LCDNumber from "./LCDNumber";
import LCDDash from "./LCDDash";
import styled from "styled-components";

const DateContainer = styled.div`
  display: grid;
  grid-column-gap: 3%;
  grid-template-columns: auto auto auto auto auto auto auto;
  justify-content: center;
  align-items: baseline;
  height: 100%;
`;

const LCDDate = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  const hours = (time.getMonth() + 1).toString().padStart(2);
  const minutes = time.getDate().toString().padStart(2, "0");
  const width = 25;
  const height = 50;
  return (
    <DateContainer>
      <LCDNumber number={parseInt(hours.charAt(0))} width={width} height={height} />
      <LCDNumber number={parseInt(hours.charAt(1))} width={width} height={height} />
      <LCDDash width={width / 2} height={height} />
      <LCDNumber number={parseInt(minutes.charAt(0))} width={width} height={height} />
      <LCDNumber number={parseInt(minutes.charAt(1))} width={width} height={height} />
    </DateContainer>
  );
};

export default LCDDate;
