import React from "react";
import { styled } from "styled-components";
import userDefault from "../images/userDefault.png";

const Card = () => {
  return (
    <div>
      <CardContainer>
        <ImageContainer
          image={
            "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202305/12/e53dd2d7-5c8f-42c1-bc2a-2a12157191b1.jpg"
          }
        />
        <ContentContainer>
          콘ㄴ첸츠~~~~~~~~~@#!#!@#~!#@ㅇㅁㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁㄹㄴㅇ콘ㄴ첸츠~~~~~~~~~@#!#!@#~!#@ㅇㅁㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁㄹㄴㅇ콘ㄴ첸츠~~~~~~~~~@#!#!@#~!#@ㅇㅁㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁㄹㄴㅇ콘ㄴ첸츠~~~~~~~~~@#!#!@#~!#@ㅇㅁㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁㄹㄴㅇ
        </ContentContainer>
      </CardContainer>
      <UserContainer>
        <UserImage src={userDefault} />
        <UserName>유저닉네임</UserName>
      </UserContainer>
    </div>
  );
};

const CardContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  padding-bottom: 110%;

  @media screen and (max-width: 768px) {
    padding-bottom: 170%;
  }
`;

const ImageContainer = styled.div`
  border-radius: 6px;
  position: absolute;
  width: 100%;
  height: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
  @media screen and (max-width: 768px) {
    background-size: cover;
    height: 85%;
  }
`;

const ContentContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  padding: 5px 0 1px 0;
  position: absolute;
  top: 80%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  word-break: break-all;
  font-size: 13px;
  color: rgb(47, 52, 56);

  @media screen and (max-width: 768px) {
    top: 85%;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const UserImage = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  margin-right: 5px;
`;

const UserName = styled.div`
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  color: rgb(47, 52, 56);
`;
export default Card;
