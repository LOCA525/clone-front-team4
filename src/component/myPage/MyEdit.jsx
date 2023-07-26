import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import userDefaultImage from "../../images/userDefault.png";
import { putUserUpdate } from "../../api/auth";
import { useMutation } from 'react-query';

function MyEdit() {
  const userDataString = localStorage.getItem('logInUser');
  const userData = JSON.parse(userDataString);
  const [nicknameContent, setNicknameContent] = useState(userData.nickname);
  const [oneLineContent, setOneLineContent] = useState(userData?.introduce);
  const [selectedFile, setSelectedFile] = useState(null);
  const profileImg = (userData.userImage === "default" ? userDefaultImage : userData.userImage);
  const inputRef = useRef(null);

  // 입력한 값이 없을 때 에러 메시지 표시 여부를 결정하는 함수
  const isNicknameContentEmpty = nicknameContent.trim().length === 0;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleImgClick = () => {
    inputRef.current.click();
  };

  //api 연결..
  const mutation = useMutation(putUserUpdate, {
    onSuccess: (data) => {
      console.log('요청 성공 - 응답 데이터:', data);
    },
    onError: (error) => {
      console.error('요청 실패:', error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (isNicknameContentEmpty){
      // 스크롤 올라가기
      const inputWrapper = document.getElementById("nicknameInputWrapper");
      const { top } = inputWrapper.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + top - 400,
        behavior: "smooth"
      });

      // focus
      inputRef.current.focus();
    }else{
      const updatedData = {
          "introduce" : oneLineContent,
          "nickname" : nicknameContent,
          "image" : selectedFile
      };
      mutation.mutate(updatedData);
    }
  };

  return (
      <StMPELayout onSubmit={handleSubmit}>
        <StMPETitleBox>회원정보수정</StMPETitleBox>

        <StMPEInputContainer>
          <StMPEInputLabelBox id="nicknameInputWrapper">
            별명
            <StMPEInputLabelRequireBox>* 필수항목</StMPEInputLabelRequireBox>
          </StMPEInputLabelBox>

          <StMPEInputWrapper>
            <StMPEInputBox
              value={nicknameContent}
              onChange={(e) => setNicknameContent(e.target.value)}
              hasError={isNicknameContentEmpty} // 에러 메시지 표시 여부에 따라 스타일 변경
              ref={inputRef}
            />
            {isNicknameContentEmpty && (
              <StMPEInputErrorBox>필수 입력 항목입니다.</StMPEInputErrorBox>
            )}
          </StMPEInputWrapper>
        </StMPEInputContainer>

        <StMPEInputContainer>
          <StMPEInputLabelBox>
            프로필 이미지
          </StMPEInputLabelBox>

          <StMPEImgWrapper>
            <StMPEImgInputBox
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={inputRef}
            />
            <StMPEImgLabelBox onClick={handleImgClick}>
              {selectedFile ? (
                <StMPEImgBox src={URL.createObjectURL(selectedFile)} alt="프로필 이미지" />
              ) : (
                <StMPEImgBox src={profileImg} alt="프로필 이미지" />
              )}
            </StMPEImgLabelBox>
          </StMPEImgWrapper>
        </StMPEInputContainer>

        <StMPEInputContainer>
          <StMPEInputLabelBox>
            한줄 소개
          </StMPEInputLabelBox>

          <StMPEInputWrapper>
            <StMPEInputBox
              value={oneLineContent}
              onChange={(e) => setOneLineContent(e.target.value)}
            />
          </StMPEInputWrapper>
        </StMPEInputContainer>

        <StMPEBtn type="submit">회원정보 수정</StMPEBtn>
      </StMPELayout>
  );
}

export default MyEdit;

const StMPELayout = styled.form`
  margin: 50px auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 50px;
  color: #292929;
`;

//회원정보수정

const StMPETitleBox = styled.div`
  align-items: center;
  margin-bottom: 60px;
  font-size: 24px;
  font-weight: 700;
`;

//input container

const StMPEInputContainer = styled.div`
  font-size: 15px;
  display: flex;
`;

const StMPEInputLabelBox = styled.div`
  padding-top: 30px;
  width: 100px;
`;

const StMPEInputLabelRequireBox = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: #757575;
`;

const StMPEInputWrapper = styled.div`
  max-width: 400px;
  -webkit-box-flex: 1;
  padding: 20px 0;
`;

const StMPEInputBox = styled.input`
  height: 40px;
  width: 400px;
  padding: 0 15px;
  line-height: 40px;

  border-radius: 6px;
  text-align: left;
  box-sizing: border-box;

  border: 1px solid ${({ hasError }) => (hasError ? "#f77" : "#dbdbdb")};
  background-color: #fff;

  font-size: inherit;
  color: inherit;

  &:focus {
    background-color: #f7f8fa;
    outline: ${({ hasError }) => (hasError ? "1px solid #f77" : "3px solid #c8ffff")};
  }
  &:hover {
    background-color: #f7f8fa;
  }
`

const StMPEInputErrorBox = styled.div`
  margin: 15px 0;
  color: #f77;
`;

//이미지

const StMPEImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 0 10px;
  padding: 20px 0;
`;

const StMPEImgInputBox = styled.input`
  display: none;
`;

const StMPEImgLabelBox = styled.label`
  width: inherit;
  height: inherit;

  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  background-color: #d8d8d8;
  font-size: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.1s;
  }
`;

const StMPEImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

//버튼

const StMPEBtn = styled.button`
  margin: 50px 0 0 100px;
  width: 290px;

  padding: 11px 10px;
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;

  background-color: #35c5f0;
  border: none;
  color: #fff;

  text-align: center;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #09addb;
  }
`