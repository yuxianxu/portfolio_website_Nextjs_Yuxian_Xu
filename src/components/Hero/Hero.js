import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      Hello, <br />I am a web developer.
    </SectionText>
    <Button onClick={() => (window.location = "#projects")}>
      My projects
    </Button>
  </LeftSection>
);

export default Hero;
