import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Layout = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>;
};

export default Layout;
