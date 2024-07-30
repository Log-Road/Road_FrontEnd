import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import ContestComponent from "../../components/main/Contest";
import RankingComponent from "../../components/main/Ranking";
import GuideComponent from "../../components/main/Guide";
import ArchiveComponent from "../../components/main/Archive";
import ProjectComponent from "../../components/main/Project";
import Footer from "../../components/Footer";

/**
 * 
 * @returns 교사 메인 페이지
 */

interface Project {
  id: number;
  // Add other project properties here if needed
}

const projects: Project[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export default function MainTeacher() {
  return (
    <>
      <Container>
        <Header />
        <Top>
          <TopLeft>
            <Title>
              <ImpactTitle>DSM의 프로젝트</ImpactTitle>를<br />
              전시하고 볼 수 있는 공간
            </Title>
            <ContestComponent />
            <ComponentBox>
              <RankingComponent />
              <GuideComponent />
            </ComponentBox>
          </TopLeft>
          <ArchiveComponent />
        </Top>
        <Bottom>
          <ContestListHeader>
            <ContestListTitle>대회 프로젝트 목록</ContestListTitle>
            <GotoContestList>대회 전체 보러가기 {">"} </GotoContestList>
          </ContestListHeader>
          <ProjectBox>
            {projects.map((project) => (
              <ProjectComponent key={project.id} />
            ))}
          </ProjectBox>
        </Bottom>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Top = styled.div`
  display: flex;
  padding: 0 10em;
  gap: 40px;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const Title = styled.h1`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  padding: 20px 0 0 0;
`;

const ImpactTitle = styled.span`
  color: #1d5ad0;
`;

const ComponentBox = styled.div`
  display: flex;
  gap: 15px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: 100vh;
  padding: 8em 10em;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background-color: #0a1635;
`;

const ContestListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContestListTitle = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 36px;
  color: white;
`;

const GotoContestList = styled.button`
  font-family: "Pretendard-Medium";
  font-size: 24px;
  background-color: white;
  width: 12vw;
  height: 6vh;
  border: none;
  border-radius: 20px;
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
