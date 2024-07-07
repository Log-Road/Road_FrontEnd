import React from "react";
import styled from "styled-components";

/**
 * 
 * @returns 랭킹 이동 컴포넌트
 */

export default function RankingComponent() {
  return (
    <>
      <Container>
        <div>
          <Title>최근 랭킹 바로가기</Title>
          <ContestName>2024년 아무이름 대회</ContestName>
        </div>
        <RewardName>금상 은상 동상 윙가르디움레비오우상</RewardName>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28vw;
  height: 24vh;
  padding: 40px 124px 40px 40px;
  color: white;
  background: linear-gradient(to right, #1541B4, #0B2771);
  border-radius: 20px;
`;

const Title = styled.h1`
  font-family: "Pretendard-SemiBold";
  font-size: 2vw;
`;

const ContestName = styled.p`
  font-family: "Pretendard-SemiBold";
  font-size: 1vw;
`;

const RewardName = styled.p`
  font-family: "Pretendard-Mideum";
  font-size: 0.8vw;
`;
