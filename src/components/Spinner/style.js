import styled from "styled-components";

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-basis: 100%;
  width: 100%;
  height: 100vh;

  > svg {
    width: 200px;
    height: 250px;
    z-index: 999;
  }
`;

export const Instruction = styled.span`
  padding: 10px 0;
  flex-basis: 100%;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
  text-align: center;
`;
