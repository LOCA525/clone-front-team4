import React from "react";
import logo from "../images/fullLogo.png";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <SignUpPageContainer>
      <LogoImage
        src={logo}
        onClick={() => {
          navigate("/");
        }}
      />
      <SignUpFormContainer>
        <TitleContainer>회원가입</TitleContainer>
        <InputContainer>
          <InputTitle>이메일</InputTitle>
          <EmailInputContainer>
            <Input placeholder="이메일" /> @
            <EmailSelect>
              <option value="" disabled="">
                선택해주세요
              </option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="daum.net">daum.net</option>
              <option value="gmail.com">gmail.com</option>
              <option value="nate.com">nate.com</option>
              <option value="hotmail.com">hotmail.com</option>
            </EmailSelect>
          </EmailInputContainer>
        </InputContainer>
        <InputContainer>
          <InputTitle>비밀번호</InputTitle>
          <InputInfo>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</InputInfo>
          <Input type="password" placeholder="비밀번호" />
        </InputContainer>
        <InputContainer>
          <InputTitle>비밀번호 확인</InputTitle>
          <Input type="password" placeholder="비밀번호 확인" />
        </InputContainer>
        <InputContainer>
          <InputTitle>닉네임</InputTitle>
          <InputInfo>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</InputInfo>
          <Input placeholder="별명 (2~15자)" />
        </InputContainer>
        <SubmitBtn>회원가입하기</SubmitBtn>
        <LinkInfo>
          <div>이미 아이디가 있으신가요?</div>
          <LogInLink
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </LogInLink>
        </LinkInfo>
      </SignUpFormContainer>
    </SignUpPageContainer>
  );
};

const SignUpPageContainer = styled.div`
  width: 100%;
  padding: 40px 15px 40px 14px;
  background-color: rgb(250, 250, 250);
`;

const LogoImage = styled.img`
  width: 88px;
  height: 31px;
  cursor: pointer;
`;

const SignUpFormContainer = styled.div`
  padding-top: 60px;
  width: 360px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid rgb(237, 237, 237);
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  margin-bottom: 30px;
`;

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #dbdbdb;
`;
const InputTitle = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #2f3438;
  letter-spacing: -0.3px;
`;

const InputInfo = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #828c94;
  letter-spacing: -0.3px;
`;

const EmailSelect = styled.select`
  font-size: 15px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #424242;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 0 15px;
  &:focus {
    outline: 3px solid #c8ffff;
  }
  &:hover {
    background-color: #f7f8fa;
  }
`;

const Input = styled.input`
  font-size: 15px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #424242;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 0 15px;
  &:focus {
    outline: 3px solid #c8ffff;
  }
  &:hover {
    background-color: #f7f8fa;
  }

  ::placeholder {
    color: #fafafa;
  }
`;

const SubmitBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #35c5f0;
  font-size: 17px;
  line-height: 26px;
  padding: 11px 10px;
  color: #fff;
  border-radius: 4px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: #09addb;
  }
`;

const LinkInfo = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #424242;
  font-size: 15px;
  text-align: center;
`;
const LogInLink = styled.div`
  padding-left: 10px;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
`;

export default SignUpPage;
