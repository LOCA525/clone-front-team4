import React from 'react'
import LeftProfileBox from './LeftProfileBox'
import { styled } from 'styled-components'

function Profile() {
  return (
    <StProfileContainer>
      <LeftProfileBox/>
    </StProfileContainer>
  )
}

export default Profile

const StProfileContainer = styled.div`
  display: flex;
`