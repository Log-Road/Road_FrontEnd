import React from "react";
import styled from "styled-components";

/**
 * 
 * @returns 대회 아카이브
 */

export default function ArchiveComponent() {
  return (
    <>
      <Container>
        <Header>
          <Title>아카이브</Title>
          <MoreSee>더보기 +</MoreSee>
        </Header>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 40vw;
  height: 56vh;
  border: 1px solid #BABABA;
  border-radius: 20px;
  padding: 40px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
`

const MoreSee = styled.button`
  font-family: "Pretendard-Mideum";
  font-size: 1vw;
  width: 6vw;
  height: 4vh;
  color: white;
  border: none;
  border-radius: 20px;
  background-color: #1541B4;
`
