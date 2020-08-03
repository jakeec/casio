import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LCDLeftLetter from "./LCDLeftLetter";
import LCDRightLetter from "./LCDRightLetter";

const DayContainer = styled.div`
  display: grid;
  grid-column-gap: 3%;
  grid-template-columns: auto auto auto auto auto auto auto;
  justify-content: center;
  align-items: baseline;
  height: 100%;
`;

const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

const LCDDay = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000000);
  }, [time]);

  const day = days[time.getDay()];
  const width = 30;
  const height = 50;
  return (
    <DayContainer>
      <LCDLeftLetter letter={day.charAt(0)} width={width} height={height} />
      <LCDRightLetter letter={day.charAt(1)} width={width} height={height} />
    </DayContainer>
  );
};

export default LCDDay;
