import React from "react";
import styled from "styled-components";

/**
 * 
 * @returns 대회 일정
 */

export default function ContestComponent() {
  return (
    <Container>
      <div>
        <Title>2024 해커톤 대회</Title>
        <Date>2024.04.27 ~ 2024.04.30</Date>
      </div>
      <GotoVoteBtn>투표하러가기</GotoVoteBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
  height: 15vh;
  border-radius: 20px;
  padding: 24px 50px;
  background-color: #1f62e4;
`;

const Title = styled.h1`
  font-family: "Pretendard-SemiBold";
  font-size: 2vw;
  color: white;
`;

const Date = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 1vw;
  color: white;
`;

const GotoVoteBtn = styled.button`
  font-family: "Pretendard-SemiBold";
  font-size: 1.2vw;
  width: 10vw;
  height: 6vh;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 50px;
`;
