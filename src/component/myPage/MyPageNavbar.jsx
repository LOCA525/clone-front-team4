import React from "react";
import { styled } from "styled-components";
import NavList from "../common/NavList";
import { useParams } from 'react-router-dom';

function MyPageNavbar() {
  // const userId = localStorage.get("123")
  const userId = "1";
  const { id } = useParams();
  const correctId = (userId === id)
  
  return (
    <>
      <StContainer style={{ height: "51px" }}>
        <StNavContainer>
          <StNav>
            <NavList path={`/userInfo/${id}`} $correctId={correctId}>프로필</NavList>
            {correctId && 
            (<NavList path={`/userInfo/${id}/Edit`}>회원정보수정</NavList>)}
          </StNav>
        </StNavContainer>
      </StContainer>
    </>
  );
}

export default MyPageNavbar;

const StContainer = styled.div`
  border-bottom: 1px solid #eaedef;
`;

const StNavContainer = styled.div`
  max-width: 1256px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 60px;
`;

const StNav = styled.nav`
  display: flex;
  align-items: stretch;
  height: 50px;
  font-weight: 500;
  > * {
    margin: 0 5px;
  }
`;
