import React from 'react'
import { styled } from 'styled-components'

function LeftProfileBox({$correctId}) {
    const catImg = "https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp"
    const nickName = "예린 이름인데 긴 텍스트 예시입니다~"
    const heartImg = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>

    const likeCount = 3;

  return (
    <StLPBLayout>
        <StLPBContainer>

            <StImgNameContainer>
                <StImgBox $imgSrc={catImg}/>
                <StNickNameBox>{nickName}</StNickNameBox>
            </StImgNameContainer>

            {/* 있으면 생기고, 없으면 사라져야함 */}
            <StOneLineBox>
                한 줄 입니다~
            </StOneLineBox>

            {$correctId && (
                <StIconContainer>
                <StLikeContainer>
                    <StLikeBox>{heartImg}</StLikeBox>
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