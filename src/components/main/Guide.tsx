import React from "react";
import styled from "styled-components";
import guide from "../../assets/Main/guide.svg"

/**
 * 
 * @returns 가이드라인 컴포넌트
 */

export default function GuideComponent() {
  return (
    <>
    <Container>
      <PencilBox>
        <img src={guide} />
      </PencilBox>
      <Title>가이드라인</Title>
      <Content>Road를 더욱 활용하는 방법<br />웹 문서로 알아보기</Content>
      <GotoWrite>확인 하러가기</GotoWrite>
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