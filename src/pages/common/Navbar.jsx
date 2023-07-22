import React from 'react'
import { styled } from 'styled-components'
import NavList from './NavList';

function Navbar() {
    return (
        <>
            {/* 테스트용 헤더 */}
            <StContainer style={{ height: "81px" }}>
                <StNavContainer>
                    헤더
                </StNavContainer>
            </StContainer>
            <StContainer style={{ height: "51px" }}>
                <StNavContainer>
                    <StNav>
                        {/* 테스트 리스트*/}
                        <NavList path={"/mypage"}>전체</NavList>
                        <NavList path={"/mainpage"}>집사진</NavList>
                        <NavList path={"/userinfo/1"}>취미일상</NavList>
                    </StNav>
                </StNavContainer>
            </StContainer>
        </>
    )
}

export default Navbar

const StContainer = styled.div`
    border-bottom: 1px solid #EAEDEF;
`
const StNavContainer = styled.div`
    max-width: 1256px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`
const StNav = styled.nav`
    display: flex;
    align-items: stretch;
    height: 50px;

    > * {
        margin: 0 5px
    }
`