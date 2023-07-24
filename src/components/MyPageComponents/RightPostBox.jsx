import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';

function RightPostBox() {
    const navigate = useNavigate();
    const catImg = "https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp"
    const pictureCount = 1;

  return (
    <StRPBLayout>
        <StRPBTextContainer>
            <StRPBPictureNameBox>사진</StRPBPictureNameBox>
            <StRPBPictureCountBox>{pictureCount}</StRPBPictureCountBox>
        </StRPBTextContainer>

        <StRPBPictureContainer>
            <StRBPictureBox 
            $imgSrc={catImg}
            // onClick={() => {navigate('/articlePage/:id')};
            />
            <StRBPictureBox/>
            <StRBPictureBox/>
            <StRBPictureBox/>

        </StRPBPictureContainer>

    </StRPBLayout>
  )
}

export default RightPostBox

const StRPBLayout = styled.div`
    padding: 50px 35px;

    box-sizing: border-box;
`
// 사진 1 부분

const StRPBTextContainer = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 20px;
`

const StRPBPictureNameBox = styled.div`
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 18px;
`

const StRPBPictureCountBox = styled.div`
    margin-left: 0.4ch;

    font-weight: bold;
    font-size: 18px;
    line-height: 1;
    color: rgb(53, 197, 240);
`

// 사진들 부분

const StRPBPictureContainer = styled.div`
    margin: 0 -10px -20px;
    display: flex;
`

const StRBPictureBox = styled.div`
    width: 160px;
    height: 160px;
    box-sizing: border-box;
    margin: 0 10px 20px;

    flex: 0 0 auto;

    outline: none;
    border: none;
    border-radius: 4px;

    background-color: #f5f5f5;
    background-image: ${({$imgSrc}) => ($imgSrc ? "url(" + $imgSrc + ")" : "")}; 
    background-size: cover;
    background-position: center;
`