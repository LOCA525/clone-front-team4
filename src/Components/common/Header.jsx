import React from "react";
import { styled } from "styled-components";
import logo from "../../images/logo.png";
import userDefaultImage from "../../images/userDefault.png";
import chevronDownIcon from "../../images/downIcon.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <HeaderContainer>
        <LogoImage src={logo} />
        <ButtonContainer>
          <AccountBtn
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </AccountBtn>
          <AccountBtn
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </AccountBtn>
          <UserImage src={userDefaultImage} />
          <PostBtnContainer
            onClick={() => {
              navigate("/articlePost");
            }}
          >
            글쓰기
            <DownIconImage src={chevronDownIcon} />
          </PostBtnContainer>
        </ButtonContainer>
      </HeaderContainer>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  border-bottom: 1px solid #eaedef;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1256px;
  height: 81px;
  padding: 0 60px 0 60px;
  margin: 0 auto;
`;

const LogoImage = styled.img`
  cursor: pointer;
  width: 74px;
  height: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AccountBtn = styled.div`
  color: #2f3438;
  font-size: 14px;
  line-height: 18px;
  border-left: 1px solid #eaedef;
  padding: 0 10px 0 10px;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border: 2px solid #ffff;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    border: 2px solid #35c5f0;
  }
`;
const PostBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #35c5f0;
  width: 94.64px;
  height: 40px;
  padding: 0 16px 0 16px;
  margin-left: 13px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #1778ba;
  }
`;

const DownIconImage = styled.img`
  margin-left: 6px;
  width: 19px;
  height: 19px;
`;
export default Header;
