import React from 'react'
import LeftProfileBox from './LeftProfileBox'
import { styled } from 'styled-components'
import RightPostBox from './RightPostBox'

function Profile({$correctId}) {
  return (
    <StProfileContainer>
      <LeftProfileBox $correctId={$correctId}/>
      <div>
        <RightPostBox $pictureName="사진"/>
        {$correctId && (<RightPostBox $pictureName="좋아요"/>) } 
      </div>
    </StProfileContainer>
  )
}

export default Profile

const StProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`