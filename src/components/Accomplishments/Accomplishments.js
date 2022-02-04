import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
  { number: 5, text: "Open Source Projects" },
  { number: 1500, text: "Group Members" },
  { number: 1900, text: "Answered Frequent Asked Questions" },
  { number: 5000, text: "One on one Consultation" },
];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map(({ number, text, index }) => (
        <Box key={index}>
          <BoxNum>{number}+</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
