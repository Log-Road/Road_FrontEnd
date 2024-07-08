import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import ContestSelectBox from "../../../components/Admin/ContestSelectBox"
import Banner from "../../../assets/Banner.png"
import ListSelectValue from "../../../components/ListSelectValue";

export default function AllWriteManagement() {

    const actionValue = ["전체", "대기", "승인", "반려", "수정", "삭제"]
    const contestName = ["2024 교내 해커톤", "아무튼 이건 대회", "대회명"]
    const [selectedValue, setSelectedValue] = useState(contestName[0])

    return (
        <>
            <Header />
            <Container>
                <Content>

                    <SideWrap>
                        <SelectContestWrap>
                            <SelectContestText>대회 선택</SelectContestText>
                            <ContestList>
                                {contestName.map((value) => (
                                    <ContestSelectBox contestName={value} selected={value === selectedValue} />
                                ))}
                            </ContestList>
                            <BannerImage src={Banner} />
                        </SelectContestWrap>
                    </SideWrap>

                    <ContentWrap>
                        <TopWrap>
                            <TitleWrap>
                                <TitleText>글 승인 및 반려</TitleText>
                                <SubTitleText>업로드된 프로젝트를 확인하고 승인 및 반려해주세요</SubTitleText>
                            </TitleWrap>
                            <ListSelectValue value={actionValue}/>
                        </TopWrap>
                        <ProjectWrap>

                        </ProjectWrap>
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
justify-content: space-between;
gap: 30px;
`

const SideWrap = styled.div`
width: 20vw;
`

const SelectContestWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const ContentWrap = styled.div`
width: 65vw;
`

const ContestList = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

const BannerImage = styled.img``

const TopWrap = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

const TitleWrap = styled.div`
display: flex;
align-items: flex-end;
gap: 10px;
`

const ProjectWrap = styled.div``

const SelectContestText = styled.p`
font-family: "Pretendard-Medium";
font-size: 0.85em;
color: #8C8C8C;
`

const TitleText = styled.p`
font-family: "Pretendard-Medium";
font-size: 1.5em;
`

const SubTitleText = styled.p`
font-family: "Pretendard-Medium";
font-size: 0.8em;
color: #8C8C8C;
`

