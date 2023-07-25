import React from 'react'
import { styled } from 'styled-components'

function DetailProfile() {
    const displayedAt = (createdAt) => {
        const milliSeconds = new Date() - createdAt
        const seconds = milliSeconds / 1000
        if (seconds < 60) return `방금 전`
        const minutes = seconds / 60
        if (minutes < 60) return `${Math.floor(minutes)}분 전`
        const hours = minutes / 60
        if (hours < 24) return `${Math.floor(hours)}시간 전`
        const days = hours / 24
        if (days < 7) return `${Math.floor(days)}일 전`
        const weeks = days / 7
        if (weeks < 5) return `${Math.floor(weeks)}주 전`
        const months = days / 30
        if (months < 12) return `${Math.floor(months)}개월 전`
        const years = days / 365
        return `${Math.floor(years)}년 전`
    }

    return (
        <>
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
        </>
    )
}

export default DetailProfile

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