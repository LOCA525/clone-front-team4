import React from 'react'
import LeftProfileBox from './LeftProfileBox'
import { styled } from 'styled-components'
import RightPostBox from './RightPostBox'

function Profile() {
  return (
    <StProfileContainer>
      <LeftProfileBox/>
      <RightPostBox/>
    </StProfileContainer>
  )
}

export default Profile

const StProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`