import React from 'react'
import { styled } from 'styled-components'

function MyPageEdit() {
  return (
    <StMPELayout>
        <StMPETitleBox>회원정보수정</StMPETitleBox>
    </StMPELayout>
  )
}

export default MyPageEdit

const StMPELayout = styled.div`
    margin: 50px auto;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
    padding: 50px;
    color: #292929;
`

//회원정보수정

const StMPETitleBox = styled.div`
    align-items: center;
    margin-bottom: 60px;
    font-size: 24px;
    font-weight: 700;
`

//input container