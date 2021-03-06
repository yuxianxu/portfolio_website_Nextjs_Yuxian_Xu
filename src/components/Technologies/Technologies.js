import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitleTech,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech" style={{background: "#fff"}}>
    <SectionDivider />
    <br />
    <SectionTitleTech style={{color: "#666666"}}>
      Technologies
    </SectionTitleTech>

    <SectionText style={{color: "#888888"}}>
      I've worked with a range technologies and created 12+ web applications.
      From font-end to back-end.
    </SectionText>
    <List>
      <ListItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#80deea"
            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
          />
          <path
            fill="#80deea"
            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
          />
          <path
            fill="#80deea"
            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
          />
          <circle cx="24" cy="24" r="4" fill="#80deea" />
        </svg>
        <br />
        <ListContainer>
          <ListTitle style={{color: "#888888"}}>Front-End</ListTitle>
          <ListParagraph style={{color: "#888888"}}>
            Experience with React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="#80deea"
            d="M12.967 21.893c-.703.07-1.377.107-1.959.107-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.117 1.342 5.17 1.78 8.008 1.78.339 0 .681-.007 1.022-.021-.06-.644-.036-1.28.129-2.019-.408.026-.797.04-1.151.04-3.412 0-8.008-1.001-8.008-2.613v-2.364c2.116 1.341 5.17 1.78 8.008 1.78 1.021 0 2.068-.06 3.089-.196 1.91-1.766 4.603-2.193 6.903-1.231v-8.14c0-3.362-5.965-4.362-9.992-4.362-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362 1.081 0 2.359-.086 3.635-.281-.669-.495-1.239-1.115-1.676-1.826zm-1.959-19.893c3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.361-7.992 2.361-3.412.001-8.008-.905-8.008-2.361 0-1.584 4.812-2.361 8.008-2.361zm-8.008 4.943c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.372c0 1.753-5.131 2.614-7.992 2.614-3.426-.001-8.008-1.007-8.008-2.615v-2.371zm15.5 7.057c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm-.564 6.55l-1.839-1.778.735-.758 1.09 1.05 2.43-2.439.751.744-3.167 3.181z"
          />
        </svg>
        <br />

        <ListContainer style={{color: "#888888"}}>
          <ListTitle style={{color: "#888888"}}>Back-End</ListTitle>
          <ListParagraph style={{color: "#888888"}}>
            Experience with Node and Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
        >
          <path
            fill="#80deea"
            d="M 9.5 1 C 7.026562 1 5 3.026562 5 5.5 C 5 6.9426457 5.7334437 8.1748313 6.7988281 9 C 5.7334437 9.8251687 5 11.057354 5 12.5 C 5 13.942646 5.7334437 15.174831 6.7988281 16 C 5.7334437 16.825169 5 18.057354 5 19.5 C 5 21.973438 7.026562 24 9.5 24 C 11.973438 24 14 21.973438 14 19.5 L 14 16 L 14 10 L 16.5 10 C 18.973438 10 21 7.973438 21 5.5 C 21 3.026562 18.973438 1 16.5 1 L 13 1 L 9.5 1 z M 9.5 3 L 12 3 L 12 8 L 9.5 8 C 8.107438 8 7 6.892562 7 5.5 C 7 4.107438 8.107438 3 9.5 3 z M 14 3 L 16.5 3 C 17.892562 3 19 4.107438 19 5.5 C 19 6.892562 17.892562 8 16.5 8 L 14 8 L 14 3 z M 9.5 10 L 12 10 L 12 15 L 9.5 15 C 8.107438 15 7 13.892562 7 12.5 C 7 11.107438 8.107438 10 9.5 10 z M 17 10 A 3 3 0 0 0 17 16 A 3 3 0 0 0 17 10 z M 9.5 17 L 12 17 L 12 19.5 C 12 20.892562 10.892562 22 9.5 22 C 8.107438 22 7 20.892562 7 19.5 C 7 18.107438 8.107438 17 9.5 17 z"
          />
        </svg>
        <br />
        <ListContainer>
          <ListTitle style={{color: "#888888"}}>UI/UX</ListTitle>
          <ListParagraph style={{color: "#888888"}}>
            Experience with Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="#80deea"
            d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm3 9h-6v-1h6v1zm0 1h-6v1h6v-1zm0 2h-6v1h6v-1z"
          />
        </svg>

        <br />
        <ListContainer>
          <ListTitle style={{color: "#888888"}}>Cloud</ListTitle>
          <ListParagraph style={{color: "#888888"}}>
            Experience with AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <br />
  </Section>
);

export default Technologies;
