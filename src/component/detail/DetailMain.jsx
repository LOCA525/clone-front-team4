import React from 'react'
import { styled } from 'styled-components'
import Comment from './Comment'

import DetailMainTop from './DetailMainTop'

function DetailMain() {
    return (
        <TestDiv>
            <MainWrapper>
                <MainContainer>
                    <DetailMainTop />
                    <MainArticle>
                        <ArticleImage>
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169019346232271566.jpg?w=720" alt="" />
                        </ArticleImage>
                        <ArticleContent>
                            내용
                        </ArticleContent>
                    </MainArticle>
                    <MainArticle>
                        <ArticleImage>
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169019346232271566.jpg?w=720" alt="" />
                        </ArticleImage>
                        <ArticleContent>
                            내용
                        </ArticleContent>
                    </MainArticle>
                    <CountSection>
                        <CountDl>
                            <CountDt>조회</CountDt>
                            <CountDd>1</CountDd>
                            <CountDt>댓글</CountDt>
                            <CountDd>6</CountDd>
                        </CountDl>
                    </CountSection>
                    <StHr />
                    <ProfileSection>
                        <ProfileButton>
                            <ProfileImage>
                                <ProfileImageSrc src="https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da4339e41ce89b663315d96faecd7cfd11b" />
                            </ProfileImage>
                            <ProfileUser>
                                <ProfileUsername>
                                    작성자
                                </ProfileUsername>
                                <PostCreatedAt>
                                    작성시간
                                </PostCreatedAt>
                            </ProfileUser>
                        </ProfileButton>
                    </ProfileSection>
                    <ProfilePosts>
                        {/* 작성자의 게시물 영역 */}
                    </ProfilePosts>
                    <StHr />
                    <Comment />
                </MainContainer>
            </MainWrapper >
        </TestDiv >
    )
}

export default DetailMain

const TestDiv = styled.div`
    max-width: 1256px;
    margin: 0 auto;
    padding: 0 60px;
`

const MainWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
`

const MainContainer = styled.div`
    margin: 50px auto 10px;
    height: 100%;
`

const MainArticle = styled.div`
    
`

const ArticleImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const ArticleContent = styled.div`
    position: relative;

    color: #2F3438;
    font-size: 16px;
    line-height: 24px;
    font-family: "OhouseSans", sans-serif;
    white-space: pre-line;

    margin: 40px 0px;
`

const CountSection = styled.div`
    margin: 8px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const CountDl = styled.dl`
    color: #828C94;
    font-size: 14px;
    line-height: 18px;

    margin: 0px;
`

const CountDt = styled.dt`
    display: inline-block;
    font-weight: 500;
    font-family: "OhouseSans", sans-serif;
    vertical-align: middle;
`

const CountDd = styled.dd`
    display: inline-block;
    font-weight: 700;
    font-family: "OhouseSans", sans-serif;
    vertical-align: middle;
    margin: 0px 16px 0px 4px;
`

const StHr = styled.hr`
    margin: 0px;
    padding: 0px;
    height: 1px;
    border: none;
    background-color: #EAEDEF;
`

const ProfileSection = styled.div`
    padding: 0px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const ProfileButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0px;
    border: 0px;
    font-size: 0px;
    text-align: left;
    background: none;
    cursor: pointer;
`

const ProfileImage = styled.figure`
    display: inline-block;
    background: url(https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da4339e41ce89b663315d96faecd7cfd11b);
    background-position-x: 50%;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 50px;
    flex-shrink: 0;
    margin: 0px;
`

const ProfileImageSrc = styled.img`
    height: 0px;
    display: block;
    visibility: hidden;
    padding-top: 100%;
`

const ProfileUser = styled.div`
    margin-left: 12px;
`

const ProfileUsername = styled.span`
    display: flex;
    align-items: center;

    color: #2F3438;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    font-family: "OhouseSans", sans-serif;
`

const PostCreatedAt = styled.span`
    display: block;

    color: #828C94;
    font-size: 16px;
    line-height: 20px;
    font-family: "OhouseSans", sans-serif;

    letter-spacing: -0.3px;
    margin-top: 6px;
`

const ProfilePosts = styled.div`
    padding: 0px;
    margin-bottom: 40px;
`