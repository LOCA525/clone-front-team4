import React from "react";
import { styled } from "styled-components";
import Card from "../component/Card";

const MainPage = () => {
  return (
    <MainPageContainer>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  max-width: 1256px;
  padding: 50px 60px;
  margin: 0 auto;
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 13px 10px;
  grid-template-columns: repeat(auto-fill, 300px);
`;

export default MainPage;
