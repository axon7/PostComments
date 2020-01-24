import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
`;
const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
