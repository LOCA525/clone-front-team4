import React from 'react'
import LeftProfileBox from './LeftProfileBox'
import { styled } from 'styled-components'
import RightPostBox from './RightPostBox'

function Profile() {
  return (
    <StProfileContainer>
      <LeftProfileBox/>
      <div>
        <RightPostBox $pictureName="사진"/>
        <RightPostBox $pictureName="좋아요"/>
      </div>
    </StProfileContainer>
  )
}

export default Profile

const StProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`