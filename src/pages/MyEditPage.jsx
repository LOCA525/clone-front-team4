import React from 'react'
import { styled } from 'styled-components'
import MyPageNavbar from '../component/myPage/MyPageNavbar'
import MyEdit from '../component/myPage/MyEdit'

function MyEditPage() {
  return (
    <>
      <StMyPageContainer>
        <MyEdit />
      </StMyPageContainer>
    </>
  )
}

export default MyEditPage

const StMyPageContainer = styled.div`
    max-width: 1256px;
    margin: 0 auto;

    padding: 0px 60px;
`