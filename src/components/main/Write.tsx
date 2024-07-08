import React from "react";
import styled from "styled-components";
import pencil from "../../assets/Main/pencil.svg"

/**
 * 
 * @returns 글 작성 이동 컴포넌트
 */

export default function WriteComponent() {
  return (
    <>
    <Container>
      <PencilBox>
        <img src={pencil} />
      </PencilBox>
      <Title>글 작성</Title>
      <Content>대덕SW마이스터고의<br /> 프로젝트를 업로드 하기</Content>
      <GotoWrite>글 작성 하러가기</GotoWrite>
    </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 11vw;
  height: 24vh;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.08);
`

const PencilBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 3vw;
  height: 3vw;
  background: linear-gradient(to right, #1E59CC, #003DB4); 
`

const Title = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
`

const Content = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 0.8vw;
`

const GotoWrite = styled.button`
  font-family: "Pretendard-SemiBold";
  font-size: 0.8vw;
  width: 8.5vw;
  height: 33px;
  color: white;
  background-color: #1E59CC;
  border: none;
  border-radius: 8px;
`