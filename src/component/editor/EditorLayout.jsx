import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import EditorList from './EditorList';
import EditorHeader from './EditorHeader';
import EditorCategory from './EditorCategory';
import { getDetailPostApi, postPostsApi } from '../../api/posts';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function EditorLayout() {
    const [category, setCategory] = useState("");
    const { id } = useParams();
    const [ready, setReady] = useState(false);
    const navigate = useNavigate();
    const formData = new FormData();
    const [editorList, setEditorList] = useState([
        {
            id: Date.now(),
            image: "",
            content: ""
        }
    ]);

    useEffect(() => {
        if (editorList.length === 0) {
            setEditorList({
                id: Date.now(),
                image: "",
                content: ""
            })
        }
    }, [editorList])

    // 사진 추가 버튼 클릭시 새로운 Editor 추가
    const handleAddEditor = () => {
        const newEditor = {
            id: Date.now(),
            image: "",
            content: ""
        };
        setEditorList([...editorList, newEditor]);
    };

    // 이미지 업로드 시 editorList 업데이트
    const handleImageChange = (id, newImage) => {
        setEditorList(list => {
            return list.map(editor => {
                if (editor.id === id) {
                    return { ...editor, image: newImage };
                }
                return editor;
            });
        });
    };

    // 내용 입력 시 editorList 업데이트
    const handleContentChange = (id, newContent) => {
        setEditorList(list => {
            return list.map(editor => {
                if (editor.id === id) {
                    return { ...editor, content: newContent };
                }
                return editor;
            });
        });
    };

    // 카테고리 선택 시 category 업데이트
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    // 올리기 버튼
    const handleSubmitButton = async () => {
        formData.set("category", category);
        const content = [];
        editorList.forEach((editor) => {
            content.push({ content: editor.content });
        });
        formData.set("content", new Blob([JSON.stringify(content)], { type: "application/json" }));
        editorList.forEach((editor) => {
            formData.append("image", editor.image);
        });
        formData.set("imageCount", editorList.length);
        for(let pair of formData.keys()) {
            console.log(pair, formData.get(pair));
        }
        console.log(editorList);
        try {
            const res = await postPostsApi(formData);
            if (res.status <= 300) {
                console.log("성공", res);
                navigate(-1);
            };
        } catch (error) {
            console.log(error);
        };
    };

    // 카테고리 선택하고 모든 이미지가 업로드 됐을 때 올리기 버튼 활성화
    useEffect(() => {
        const editorUploaded = editorList.every(editor => editor.image);
        setReady(!!editorUploaded && !!category);
    }, [editorList, category]);

    const { data, isLoading, isError } = useQuery(
        ["posts", id],
        async () => {
            if (id) {
                const res = await getDetailPostApi(id);
                const temp = res.data.data;
                return res.data.data
            } else {
                return
            }
        }
    );

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>error...</h2>
    }

    return (
        <>
            <EditorHeader imgUp={ready} onClickSubmit={handleSubmitButton} />
            <EditorBody>
                <EditorCategory category={category} onCategoryChange={handleCategoryChange} />
                <StOrderedList>
                    {
                        editorList.map((item) => {
                            return (
                                <StListItem key={item.id}>
                                    <EditorList
                                        id={item.id}
                                        editorList={editorList}
                                        onImageChange={handleImageChange}
                                        onContentChange={handleContentChange}
                                        setEditorList={setEditorList}
                                    />
                                </StListItem>
                            )
                        })
                    }
                </StOrderedList>
                <StAddEditorButton $imgUp={true} type="button" onClick={handleAddEditor} aria-label='사진 추가'><StAddEditorButtonLine /></StAddEditorButton>
            </EditorBody>
        </>
    )
}

export default EditorLayout

const EditorBody = styled.div`
    max-width: 1003px;
    margin: 30px auto 0 auto;
    padding : 0 30px;
    overflow-y: auto;
`

const StOrderedList = styled.ol`
    position: relative;
    display: block;
    flex: 1 0 0px;
`

const StListItem = styled.li`
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
`

const StAddEditorButton = styled.button`
    display: ${({ $imgUp }) => $imgUp ? "block" : "none"};
    width: 100%;
    padding: 3px 0;
    margin-bottom: 10px;
    opacity: 0;
    transition: opacity 0.1s ease 0s;
    cursor: pointer;
    &:hover, :active {
        opacity: 1;
    }
`

const StAddEditorButtonLine = styled.div`
    height: 4px;
    background-color: #35C5F0;
    border-radius: 4px;
`