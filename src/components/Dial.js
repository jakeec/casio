import React from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import Display from "./Display";

const WhiteOutline = styled.div`
  padding: 7px;
  background: black;
  border: 2px solid white;
  border-radius: 15px;
`;

const BlackOutline = styled.div`
  padding: 7px;
  background: black;
  border-radius: 19px;
`;

const GreyOutline = styled.div`
  background: #333333;
  border-radius: 25px;
  width: 432px;
  height: 312px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainerSvgBackground = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 540 460">
      <path
        d="M 120 0 
           H 420 
           C 490 0, 540 60, 540 100 
           V 360 
           C 540 420, 480 460, 420 460 
           H 120
           C 50 460, 0 400, 0 360
           V 100
           C 0 60, 50 0, 120 0"
        fill="black"
        stroke="silver"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 460px;
  background: url("data:image/svg+xml;utf8,${({ svgBackground }) => svgBackground}") no-repeat;
`;

const Dial = () => {
  let svgString = ReactDOMServer.renderToStaticMarkup(<MainContainerSvgBackground />);
  svgString = svgString.replace(/"/g, "'");
  return (
    <MainContainer svgBackground={svgString}>
      <GreyOutline>
        <BlackOutline>
          <WhiteOutline>
            <Display />
          </WhiteOutline>
        </BlackOutline>
      </GreyOutline>
    </MainContainer>
  );
};

export default Dial;
