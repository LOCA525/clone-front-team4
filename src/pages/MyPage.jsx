import React from 'react'
import { styled } from 'styled-components'
import Profile from '../components/myPage/Profile'

function MyPage() {
  return (
    //네비게이션바 필요(프로필/수정) , 선택됨에 따라 profile, 수정 선택돼서 랜더링
    <StMyPageContainer>
        <Profile/>
        {/* 수정 */}
    </StMyPageContainer>
  )
}

export default MyPage

const StMyPageContainer = styled.div`
    max-width: 1256px;
    margin: 0 auto;

    padding: 0px 60px;
`