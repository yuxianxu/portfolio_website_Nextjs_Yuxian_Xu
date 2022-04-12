import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
width: 40%;
height: 40%;
margin-right: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-right: 0;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 50%;
  display: flex;
  margin: 0 1rem;
}
`;
