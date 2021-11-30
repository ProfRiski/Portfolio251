import styled from "styled-components";
import { AboutPara, MainH1 } from "../about-sec/About";

const ServicesSec = styled.section`
  background-color: black;
  padding-top: 10vh;
`;

const MainPara = styled.p`
  line-height: 4vh;
  font-weight: 300;
  color: #717173;
  padding: 0;

  font-family: "Poppins", sans-serif;
`;

export const Services = () => {
  return (
    <ServicesSec>
      <div className="container">
        <div className="row-md-2 align-items-center text-center">
          <MainH1>Services</MainH1>
          <MainPara className="mx-auto ">
            There are many variations of passages of Lorem Ipsum <br />{" "}
            available, but the majority have suffered alteration.
          </MainPara>
        </div>
      </div>
    </ServicesSec>
  );
};