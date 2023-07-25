import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'
import CommentList from './CommentList';

function Comment() {
    const [content, setContent] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef(null);

    const handleTextareaFocus = () => {
        setIsFocused(true);
    }

    const handleTextareaBlur = () => {
        setIsFocused(false);
    }

    const handleChange = (event) => {
        handleResizeHeight();
        setContent(event.target.value);
    };

    const handleResizeHeight = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }

    const handleContentClick = () => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    return (
        <CommentContainer>
            <CommentH1>
                댓글
                <CommentSpan>7</CommentSpan>
            </CommentH1>
            <CommentInput>
                <CommentInputForm>
                    <CommentImage>
                        <CommentImageSrc url="https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da46fb33a4b4cf43b6605fc7a1e262f0845" />
                    </CommentImage>
                    <CommentContent $focused={isFocused} onClick={handleContentClick}>
                        <CommentContentInput
                            ref={textareaRef}
                            spellCheck="false"
                            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:)"
                            value={content}
                            onChange={handleChange}
                            onFocus={handleTextareaFocus}
                            onBlur={handleTextareaBlur}
                            rows="1"
                        />
                        <CommentButtonArea>
                            <CommentButton $isnull={!content}>
                                입력
                            </CommentButton>
                        </CommentButtonArea>
                    </CommentContent>
                </CommentInputForm>
            </CommentInput>
            <CommentList />
        </CommentContainer>
    )
}

export default Comment

const CommentContainer = styled.div`
    margin: 48px 0px 40px;
    padding: 0px;
`

const CommentH1 = styled.h1`
    color: #2F3438;
    font-size: 20px;
    line-height: 28px;
    font-family: "OhouseSans", sans-serif;
    font-weight: 700;

    margin: 20px 0px;
`

const CommentSpan = styled.span`
    color: #35C5F0;
    font-family: "OhouseSans", sans-serif;
    font-weight: 700;

    margin-left: 6px;
`

const CommentInput = styled.div`
    margin-bottom: 40px;
    margin-top: 8px;
`

const CommentInputForm = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const CommentImage = styled.figure`
    display: inline-block;
    background: url(https://item.kakaocdn.net/do/933cf6891eb4535f365751b55ba15da46fb33a4b4cf43b6605fc7a1e262f0845);
    background-position-x: 50%;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 30px;
    margin-right: 12px;
    flex-shrink: 0;
    border: ${({ $Self }) => $Self ? "" : "0.5px solid rgba(0, 0, 0, 0.08)"};
`

const CommentImageSrc = styled.img`
    display: block;
    visibility: hidden;
    height: 0px;
    padding-top: 100%;
`

const CommentContent = styled.div`
    display: inline-flex;
    width: 100%;
    align-items: flex-start;
    line-height: 0;
    box-sizing: border-box;
    border: 1px solid ${({ $focused }) => $focused ? "#35C5F0" : "#DADDE0"};
    border-radius: 4px;
    padding: 0 16px;
    cursor: text;

    &:hover {
        background-color: #EAEDEF;
    };
    &::clicked {
        border-color: "#35C5F0";
    }
`

const CommentContentInput = styled.textarea`
    display: inline-block;
    flex: 1 0 0;
    word-break: break-word;
    
    color: #2F3438;
    font-size: 16px;
    line-height: 24px;
    font-family: "OhouseSans", sans-serif;
    
    border: none;
    background: none;
    outline: none;
    overflow-y: auto;
    box-sizing: border-box;
    resize: none;

    height: auto;
    max-height: 72px;
    min-width: 100px;
    margin: 9px 0px;

    &::placeholder {
        color: #C2C8CC;
    }
`

const CommentButtonArea = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 42px;
    padding: 9px 0px;
    margin-left: 8px;
`

const CommentButton = styled.button`
    display: inline-block;
    border: none;
    background: none transparent;
    
    color: ${({ $isnull }) => $isnull ? "#C2C8CC" : "#35C5F0"};
    font-size: 16px;
    line-height: 20px;
    font-family: "OhouseSans", sans-serif;
    font-weight: 700;
    pointer-events: ${({ $isnull }) => $isnull ? "none" : "auto"};
    cursor: pointer;
    
    height: 24px;
    padding: 0px;
`