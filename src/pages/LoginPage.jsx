import React from "react";
import { styled } from "styled-components";
import logo from "../images/fullLogo.png";
const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LogoImage src={logo} />
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  padding: 60px 0 60px 0;
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 147px;
  height: 50px;
`;
export default LoginPage;
