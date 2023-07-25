import React from 'react'
import { styled } from 'styled-components'
import Profile from "../component/myPage/Profile"
import MyPageNavbar from '../component/myPage/MyPageNavbar'

function MyPage() {
  return (
    <>
      <MyPageNavbar />
      <StMyPageContainer>
        <Profile />
        {/* 수정 */}
      </StMyPageContainer>
    </>
  )
}

export default MyPage

const StMyPageContainer = styled.div`
    max-width: 1256px;
    margin: 0 auto;

    padding: 0px 60px;
`