import React from "react";
import { styled } from "styled-components";
import logo from "../images/fullLogo.png";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <div>
          <LogoContainer>
            <LogoImage
              src={logo}
              onClick={() => {
                navigate("/");
              }}
            />
          </LogoContainer>
          <EmailInput placeholder="이메일" required />
          <PwInput placeholder="비밀번호" required />
          <LoginBtn type="submit">로그인</LoginBtn>
          <SignUpLink
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </SignUpLink>
        </div>

        <CopyRight>© bucketplace, Co., Ltd.. All Rights Reserved</CopyRight>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  width: 100%;
  background-color: rgb(250, 250, 250);
`;

const LoginFormContainer = styled.form`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0 60px 0;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const LogoImage = styled.img`
  width: 147px;
  height: 50px;
  cursor: pointer;
`;

const EmailInput = styled.input`
  font-size: 15px;
  width: 100%;
  height: 50px;
  line-height: 40px;
  color: #424242;
  border-top: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-radius: 4px 4px 0 0;
  padding: 15px;
  &:focus {
    outline: 3px solid #c8ffff;
  }
  &:hover {
    background-color: #f7f8fa;
  }
`;

const PwInput = styled.input`
  font-size: 15px;
  width: 100%;
  height: 50px;
  line-height: 40px;
  color: #424242;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 4px 4px;
  padding: 15px;
  &:focus {
    outline-style: ridge;
    outline: 3px solid #c8ffff;
  }
  &:hover {
    background-color: #f7f8fa;
  }
`;

const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  background-color: #35c5f0;
  margin: 20px 0;
  line-height: 20px;
  font-size: 17px;
  color: #ffff;
  font-weight: 900;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #09addb;
  }
`;

const SignUpLink = styled.div`
  text-align: center;
  color: #424242;
  cursor: pointer;
`;

const CopyRight = styled.div`
  color: #757575;
  font-size: 10px;
  text-align: center;
`;
export default LoginPage;
