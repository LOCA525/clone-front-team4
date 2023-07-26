import React from 'react'
import { styled } from 'styled-components'
import Comment from './Comment'
import DetailTop from './DetailTop'
import DetailProfile from './DetailProfile'
import DetailSide from './DetailSide'
import { getDetailPostApi } from '../../api/posts'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

function DetailMain() {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery(
        ["posts", id],
        async () => {
            const res = await getDetailPostApi(id);
            // console.log(res.data.data);
            console.log(res.data)
            return res.data.data
        }
    );

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>error...</h2>
    }

    return (
        <TestDiv>
            <DetailWrapper>
                <MainWrapper>
                    <MainContainer>
                        <DetailTop data={data} />
                        {
                            data.postDetails.map((item) => {
                                return (
                                    <MainArticle key={item.postImage}>
                                        <ArticleImage>
                                            <ArticleImageSrc src={`${item.postImage}`} alt="" />
                                        </ArticleImage>
                                        <ArticleContent>
                                            {item.content}
                                        </ArticleContent>
                                    </MainArticle>
                                )
                            })
                        }
                        <CountSection>
                            <CountDl>
                                <CountDt>조회</CountDt>
                                <CountDd>1</CountDd>
                                <CountDt>댓글</CountDt>
                                <CountDd>6</CountDd>
                            </CountDl>
                        </CountSection>
                        <StHr />
                        <DetailProfile data={data} />
                        <StHr />
                        <Comment />
                    </MainContainer>
                </MainWrapper >
                <DetailSide />
            </DetailWrapper>
        </TestDiv >
    )
}

export default DetailMain

const TestDiv = styled.div`
    position: relative;
    max-width: 1256px;
    margin: 0 auto;
    padding: 0 60px;
`

const DetailWrapper = styled.div`
    position: relative;
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
    margin-bottom: 40px;
`

const ArticleImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const ArticleImageSrc = styled.img`
    width: inherit;
`

const ArticleContent = styled.div`
    position: relative;

    color: #2F3438;
    font-size: 16px;
    line-height: 24px;
    white-space: pre-line;

    margin-top: 40px;
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
    vertical-align: middle;
`

const CountDd = styled.dd`
    display: inline-block;
    font-weight: 700;
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
