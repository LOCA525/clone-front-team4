import React from 'react'
import { styled } from 'styled-components'
import { ReactComponent as HeartIcon } from '../../assets/heart_outline.svg';
import userDefaultImage from "../../images/userDefault.png";

function LeftProfileBox({$correctId, $userData}) {
    const userImage = ($userData.userImage === "default" ? userDefaultImage : $userData.userImage)
    const nickName = $userData.nickname;
    const introduce = $userData?.introduce;

    const likeCount = ($userData?.likeList===undefined? 0 : $userData?.likeList.length);

  return (
    <StLPBLayout>
        <StLPBContainer>
            <StImgNameContainer>
                <StImgBox $imgSrc={userImage}/>
                <StNickNameBox>{nickName}</StNickNameBox>
            </StImgNameContainer>

            {/* 있으면 생기고, 없으면 사라져야함 */}
            <StOneLineBox>
                {introduce}
            </StOneLineBox>

            {$correctId && (
                <StIconContainer>
                <StLikeContainer>
                    <HeartIcon />
                    <StLikeNameBox>좋아요</StLikeNameBox>
                    <StLikeCountBox>{likeCount}</StLikeCountBox>
                </StLikeContainer>
            </StIconContainer>
            )}


        </StLPBContainer>
    </StLPBLayout>
  )
}

export default LeftProfileBox

//LPB: LeftProfileBox

const StLPBLayout = styled.div`
    box-sizing: border-box;

    width: 25%;

    padding: 30px 10px 0px 10px;
`
const StLPBContainer = styled.div`
    position: sticky;
    top: 80.75px;
    transition: top 0.1s ease 0s;

    font-size: 15px;
    color: #424242;

    padding: 30px 25px 18px;
    border-radius: 4px;
    border: 1px solid #dadce0;
    box-shadow: 0 2px 4px 0 rgba(63, 71, 77, .06);
`

// 이미지와 닉네임 부분~

const StImgNameContainer = styled.div`
    box-sizing: border-box;
    margin: 0 auto 20px auto;
`

const StImgBox = styled.div`
    width: 120px;
    height: 120px;

    display: block;

    margin: 0 auto 24px;

    border-radius: 100%;

    border: 1px solid rgba(0, 0, 0, .07);

    background-color: #ededed;

    background-image: ${({$imgSrc}) => ($imgSrc ? "url(" + $imgSrc + ")" : "")};

    background-size: cover;
    background-position: center;
`

const StNickNameBox = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #292929;

    text-align: center;

    overflow-wrap: break-word;
    word-break: break-all;
    line-height: 1.15;
`

// 한 줄 부분~

const StOneLineBox = styled.div`
    line-height: 1.4;
    font-weight: 400;
    word-break: break-word;

    text-align: center;

    margin: 24px 0px;
`

// 좋아요 부분~

const StIconContainer = styled.div`
    padding: 24px 0px 6px;
    border-top: 1px solid rgb(234, 235, 239);

    display: flex;
    align-items: center;
    justify-content: center;
`

const StLikeContainer = styled.div`
    flex: 0 0 auto;
    cursor: pointer;
    text-align: center;
    
    line-height: 21px;

    &:hover{
        opacity: 0.5;
        transition: opacity 0.1s ease 0s;
    }
`

const StLikeBox = styled.div`
    margin: 0px auto 4px;
    fill: #424242;
`

const StLikeNameBox = styled.div`
    font-size: 13px;
`

const StLikeCountBox = styled.div`
    font-size: 15px;
    font-weight: bold;
`