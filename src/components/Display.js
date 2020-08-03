import React from "react";
import styled from "styled-components";
import { LCDClock, LCDDate, LCDDay } from "./LCD";

const Container = styled.div`
  width: 340px;
  height: 220px;
  background: #c7c6b2;
  display: grid;
  grid-template:
    "day date"
    "clock clock";
  grid-gap: 3%;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: inset -4px 4px 3px rgba(0, 0, 0, 0.2);
`;

const DateContainer = styled.div`
  height: 60px;
  border: 2px solid black;
  border-radius: 5px;
  grid-area: date;
`;

const DayContainer = styled.div`
  height: 100%;
  grid-area: day;
`;

const DateSizing = styled.div`
  height: 100px;
  // transform: scale(0.25) translate(-60%, -130%);
`;

const Display = () => {
  return (
    <Container>
      <DayContainer>
        <LCDDay />
      </DayContainer>
      <DateContainer>
        <DateSizing>
          <LCDDate />
        </DateSizing>
      </DateContainer>
      <LCDClock />
    </Container>
  );
};

export default Display;
