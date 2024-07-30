import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import ListSelectValue from "../../components/ListSelectValue";
import ProjectSelectBox from "../../components/ProjectSelectBox";

export default function AwardsProject() {

    const ListValue = ["개인", "팀", "동아리"]

    return (
        <>
            <Header />
            <Container>

                <Content>
                    <SelectWrap>
                        <ListSelectValue value={ListValue} />
                        <ProjectSelectBox />
                        <AwardCompleteButton>시상 완료하기</AwardCompleteButton>
                    </SelectWrap>

                    <ContentWrap>
                        <LabelText>프로젝트 시상하기</LabelText>
                        <ContestInfoWrap>
                            <InfoLeftWrap>
                                <ContestInfo>
                                    <ContestAndDateWrap>
                                        <ContestName>2024 해커톤 대회</ContestName>
                                        <Date>2024.04.27 ~ 2024.04.30</Date>
                                    </ContestAndDateWrap>
                                    <ContestPurpose>
                                        (간단한 대회 목적) 이 대회는 실시함으로써  학생들의 실력을 향상시키고 자신의 실력을 되돌아 볼 기회를 주어지게 된다 여기에 대회 정보가 입력되어 있으면 좋지 않을까 하는 생각으로 써봅니다
                                    </ContestPurpose>
                                </ContestInfo>
                                <VotePersonnelListButton>투표 미참여 인원 리스트 확인하기</VotePersonnelListButton>
                            </InfoLeftWrap>
                            <GraphWrap>
                                <Graph></Graph>
                                <Graph></Graph>
                            </GraphWrap>
                        </ContestInfoWrap>
                    </ContentWrap>
                </Content>

            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
`

const Content = styled.div`
display: flex;
gap: 30px;
`

const SelectWrap = styled.div`
width: 20vw;
display: flex;
flex-direction: column;
gap: 30px;
`

const AwardCompleteButton = styled.button`
padding: 8px;
border: none;
border-radius: 8px;
background-color: #1F62E4;
font-family: "Pretendard-Medium";
font-size: 1em;
color: white;
`

const ContentWrap = styled.div`
width: 65vw;
`

const ContestInfoWrap = styled.div`
border: 1px solid #BABABA;
padding: 30px 50px;
display: flex;
justify-content: space-between;
gap: 50px;
`

const InfoLeftWrap = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`

const ContestInfo = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const ContestAndDateWrap = styled.div`
display: flex;
align-items: flex-end;
gap: 10px;
`

const GraphWrap = styled.div`
display: flex;
gap: 15px;
`

const Graph = styled.div`
width: 150px;
height: 150px;
background-color: #EDEDED;
border-radius: 100%;
`

const VotePersonnelListButton = styled.button`
width: 250px;
border: none;
border-radius: 8px;
padding: 8px;
font-family: "Pretendard-Regular";
font-size: 0.9em;
color: #5E5E5E;
`

const LabelText = styled.p`
font-family: "Pretendard-Medium";
font-size: 1.5em;
`

const ContestName = styled.p`
font-family: "Pretendard-Medium";
font-size: 1.2em;
color: #1F62E4;
`

const Date = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.7em;
color: #686868;
`

const ContestPurpose = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.9em;
color: #8C8C8C;
`