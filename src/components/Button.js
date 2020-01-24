import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  height: 50px;
  width: 100px;
  color: white;
  background-color: royalblue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const Button = props => {
  return <StyledButton to={props.linkTo}>{props.children}</StyledButton>;
};

export default Button;
