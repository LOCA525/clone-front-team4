import React from 'react'
import { styled } from 'styled-components'
import { ReactComponent as Heart } from '../../assets/heart.svg'

function CommentList() {
    return (
        <>
            <CommentListItem>
                <CommentItem>
                    <CommentItemLeft>
                        <CommentUserImage>
                            <CommentUserImageSrc src="https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da4339e41ce89b663315d96faecd7cfd11b" />
                        </CommentUserImage>
                    </CommentItemLeft>
                    <CommentItemRight>
                        <CommentTop>
                            <CommentUserName>
                                이름
                            </CommentUserName>
                            <CommentNewSpan>
                                내 댓글
                            </CommentNewSpan>
                        </CommentTop>
                        <CommentContent>
                            내용
                        </CommentContent>
                        <CommentBottom>
                            <CommentBottomText>1초 전</CommentBottomText>
                            <CommentBottomItem>
                                <CommentBottomDot>・</CommentBottomDot>
                                <CommentLikeButton>
                                    <StHeart $yours={true}/>
                                    <CommentSpan>1</CommentSpan>
                                </CommentLikeButton>
                            </CommentBottomItem>
                            <CommentBottomItem>
                                <CommentBottomDot>・</CommentBottomDot>
                                <CommentButton>답글 달기</CommentButton>
                            </CommentBottomItem>
                            <CommentBottomItem>
                                <CommentBottomDot>・</CommentBottomDot>
                                <CommentButton>삭제</CommentButton>
                            </CommentBottomItem>
                        </CommentBottom>
                    </CommentItemRight>
                </CommentItem>
            </CommentListItem>
            <CommentListItem>
                <CommentItem>
                    <CommentItemLeft>
                        <CommentUserImage>
                            <CommentUserImageSrc src="https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da4339e41ce89b663315d96faecd7cfd11b" />
                        </CommentUserImage>
                    </CommentItemLeft>
                    <CommentItemRight>
                        <CommentTop>
                            <CommentUserName>
                                이름
                            </CommentUserName>
                            <CommentNewSpan>
                                내 댓글
                            </CommentNewSpan>
                        </CommentTop>
                        <CommentContent>
                            내용
                        </CommentContent>
                        <CommentBottom>
                            <CommentBottomText>1초 전</CommentBottomText>
                            <CommentBottomItem>
                                <CommentBottomDot>・</CommentBottomDot>
                                <CommentLikeButton>
                                    <StHeart />
                                    <CommentSpan></CommentSpan>
                                </CommentLikeButton>
                            </CommentBottomItem>
                            <CommentBottomItem>
                                <CommentBottomDot>・</CommentBottomDot>
                                <CommentButton>답글 달기</CommentButton>
                            </CommentBottomItem>
                            <CommentBottomItem>
                                <CommentBottomDot>・</CommentBottomDot>
                                <CommentButton>삭제</CommentButton>
                            </CommentBottomItem>
                        </CommentBottom>
                    </CommentItemRight>
                </CommentItem>
            </CommentListItem>
        </>
    )
}

export default CommentList

const CommentListItem = styled.div`
    margin: 30px 0px;
`

const CommentItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 16px 0;
`

const CommentItemLeft = styled.div`
    cursor: pointer;
`

const CommentUserImage = styled.figure`
    display: inline-block;
    background: url(https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da4339e41ce89b663315d96faecd7cfd11b);
    background-position-x: 50%;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 30px;
    margin-right: 12px;
`

const CommentUserImageSrc = styled.img`
    height: 0px;
    display: block;
    visibility: hidden;
    padding-top: 100%;
`

const CommentItemRight = styled.div`
    flex: 1 1 0;   
`

const CommentTop = styled.div`
    display: flex;
    align-items: center;
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: -0.3px;
`

const CommentUserName = styled.div`
    color: #212629;
    font-size: 16px;
    line-height: 20px;

    margin-right: 5px;
    cursor: pointer;
`

const CommentNewSpan = styled.div`
    display: inline-block;
   
    color: #FFFFFF;
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;

    background-color: #35C5F0;
    height: 16px;
    border-radius: 4px;
    padding: 1px 4px;
    margin-right: 5px;
`

const CommentContent = styled.div`
    color: #2F3438;
    font-size: 16px;
    line-height: 24px;

    margin: 8px 0px;
    align-items: center;
    word-break: break-word;
    white-space: pre-line;
`

const CommentBottom = styled.div`
    display: flex;
    align-items: center;

    color: #828C94;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;

    letter-spacing: -0.3px;
`

const CommentBottomText = styled.div`
    color: #828C94;
`

const CommentBottomDot = styled.div`
    color: #828C94;
    margin: 0px 4px;
`

const CommentBottomItem = styled.div`
    display: flex;
`

const CommentLikeButton = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0px;

    cursor: pointer;
    touch-action: manipulation;

    &:hover {
        text-decoration: underline;
    }
`
const StHeart = styled(Heart)`
    width: 16px;
    height: 16px;
    path {
        stroke: ${({ $yours }) => $yours ? "#35C5F0" : "#828C94"};
        fill: ${({ $yours }) => $yours ? "#35C5F0" : "transparent"};
    }
`

const CommentSpan = styled.span`
    color: #35C5F0;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;

    margin-left: 3px;
    &:empty::before{
        color: #828C94;
        content: "좋아요";
    }
`

const CommentButton = styled.div`
    background-color: transparent;
    border: none;
    padding: 0px;

    cursor: pointer;
    touch-action: manipulation;

    &:hover {
        text-decoration: underline;
    }
`