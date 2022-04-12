import React from "react";
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Img } from "./HeroStyles";

const Hero = (props) => (
  <LeftSection>
    <SectionTitle main center>
      Welcome To My Portfolio
    </SectionTitle>
    <SectionText>
      Hello, <br />I have just over a year of experience as a software engineer.<br />In my short time there, I've already built a dozen both front end and back end projects.
    </SectionText>
    {/* <Img src="/images/hero.png" alt="avatar" /> */}
    {/* <BgAnimation /> */}
    <Button onClick={() => (window.location = "#projects")}>
      My projects
    </Button>
  </LeftSection>
);

export default Hero;
