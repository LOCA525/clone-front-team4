import React, { useState } from 'react'
import { styled } from 'styled-components';

function EditorCategory({ onCategoryChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        onCategoryChange(item);
    };

    return (
        <StDropdown>
            <StDropdownToggle onClick={toggleDropdown}>
                {selectedItem || '카테고리 선택'}
            </StDropdownToggle>
            {isOpen && (
                <StDropdownMenu>
                    <StDropdownItem onClick={() => handleItemClick('집사진')}>
                        집사진
                    </StDropdownItem>
                    <StDropdownItem onClick={() => handleItemClick('취미일상')}>
                        취미일상
                    </StDropdownItem>
                </StDropdownMenu>
            )}
        </StDropdown>
    );
}

export default EditorCategory

const StDropdown = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 30%;
    border: 1px solid #DADDE0;
    border-radius: 4px;
    margin-left: -12px;
    margin-bottom: 30px;
`

const StDropdownToggle = styled.div`
    padding: 10px 15px;
    color: #2F3438;

    &:hover{
        background-color: #F7F9FA;
    }
`

const StDropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #FFFFFF;
    border: 1px solid #DADDE0;
    border-radius: 4px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const StDropdownItem = styled.div`
    cursor: pointer;
    padding: 10px 15px;
    height: 40px;
    color: #2F3438;

    &:hover {
        background-color: #f0f0f0;
    }
`