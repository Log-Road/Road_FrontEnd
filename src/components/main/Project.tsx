import React from "react";
import styled from "styled-components";
import Img from "../../assets/Main/maincomponentinimg.svg";

/**
 * 
 * @returns 프로젝트 예시
 */

export default function ProjectComponent() {
  return (
    <Container>
      <img src={Img} />
      <TextBox>
        <RoleBox>
          <Role>개인 </Role>
          <RoleName>이름이 들어갑니다.</RoleName>
        </RoleBox>
        <Title>제목입니다.</Title>
        <Content>
          아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓
          우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리
          나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래
          산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리 포도 바람꽃 별하
          가온해 사과 산들림 나래 컴퓨터 이플 바람꽃.
        </Content>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  height: 38vh;
  border-radius: 16px;
  gap: 10px;
  overflow-y: hidden;
  background-color: white;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 0 18px;
`;

const RoleBox = styled.div`
  display: flex;
  gap: 7px;
`;

const Role = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 14px;
  color: #757575;
`;

const RoleName = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #757575;
`;

const Title = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 18px;
`;

const Content = styled.p`
  font-family: "Pretendard-Regular";
  letter-spacing: 0.1rem;
`;
