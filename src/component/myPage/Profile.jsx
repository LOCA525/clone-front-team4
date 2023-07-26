import React, {useState, useEffect} from "react";
import LeftProfileBox from './LeftProfileBox'
import { styled } from 'styled-components'
import RightPostBox from './RightPostBox'
import { useParams } from 'react-router-dom';

function Profile({$correctId}) {
  const { id } = useParams();
  const [correctId, setCorrectId] = useState(false);

  useEffect(() => {
    const logInUserString = localStorage.getItem('logInUser');
    const logInUser = JSON.parse(logInUserString);
    const logInNickName = logInUser?.nickname;
    setCorrectId(logInNickName === id);
  }, [id]);

  return (
    <StProfileContainer>
      <LeftProfileBox $correctId={ correctId }/>
      <div>
        <RightPostBox $pictureName="사진"/>
        {correctId && (<RightPostBox $pictureName="좋아요"/>) } 
      </div>
    </StProfileContainer>
  )
}

export default Profile

const StProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`