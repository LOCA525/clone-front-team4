import React from 'react'
import { styled } from 'styled-components'

function CommentList() {
    return (
        <CommentListItem>
            <CommentItem>
                <CommentItemLeft>
                    <CommentUserImage>
                        <CommentUserImageSrc src="https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da4339e41ce89b663315d96faecd7cfd11b" />
                    </CommentUserImage>
                </CommentItemLeft>
                <CommentItemRight>
                    <CommentUserName>

                    </CommentUserName>
                    <CommentContent>

                    </CommentContent>
                </CommentItemRight>
            </CommentItem>
        </CommentListItem>
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

const CommentUserName = styled.div`
    
`

const CommentContent = styled.div`
    
`