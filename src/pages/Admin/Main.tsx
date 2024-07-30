import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdminMainIcon from "../../assets/AdminMainIcon.png"
import ContestBoxImage from "../../assets/ContestBoxImage.png"
import { ReactComponent as ArrowRight } from "../../assets/ArrowRight.svg"
import SectionContentBox from "../../components/Admin/SectionContentBox";

export default function Main() {

    const contestLink = [
        { text: "현재 진행중인 대회", link: "" },
        { text: "진행중인 대회 시상 하러가기", link: "" },
    ]

    const SectionData = [
        { icon: "folder", text: "대회 관리" },
        { icon: "personnel", text: "인원 관리" },
        { icon: "school", text: "동아리 관리" },
    ]

    return (
        <>
            <Header />
            <Container>
                <ContentWrap>
                    <ContentBox>
                        <Title><p style={{ color: "#1D5AD0", display: "inline" }}>DSM 프로젝트</p>를<br />관리하고 저장하는 공간</Title>
                        <RowContentBoxWrap>
                            <ColumnContentBoxWrap>

                                <ProjectWatchBox>
                                    <ProjectContentWrap>
                                        <WriteManagementText>글 관리하기</WriteManagementText>
                                        <ApproveAndRejectText>프로젝트 승인 및 반려하기</ApproveAndRejectText>
                                    </ProjectContentWrap>
                                    <ProjectHandleButton>프로젝트 보러가기</ProjectHandleButton>
                                </ProjectWatchBox>

                                <ContestManagementBox>
                                    <ContestContentWrap>
                                        <PresentProgressText>현재 진행중인 대회</PresentProgressText>
                                        <ContestLinkWrap>
                                            {contestLink.map((value) => (
                                                <ContestLink>
                                                    <ContestLinkText>{value.text}</ContestLinkText>
                                                    <ArrowRight />
                                                </ContestLink>
                                            ))}
                                        </ContestLinkWrap>
                                    </ContestContentWrap>
                                    <ContestImg src={ContestBoxImage} />
                                </ContestManagementBox>

                            </ColumnContentBoxWrap>
                            <SectionWrap>
                                {SectionData.map((value) => (
                                    <SectionContentBox imageType={value.icon} text={value.text}/>
                                ))}
                            </SectionWrap>
                        </RowContentBoxWrap>
                    </ContentBox>
                    <MainIcon src={AdminMainIcon} />
                </ContentWrap>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
`

const ContentWrap = styled.div`
display: flex;
width: 70vw;
height: 70vh;
justify-content: space-between;
align-items: center;
`

const ContentBox = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`

const RowContentBoxWrap = styled.div`
display: flex;
gap: 10px;
`

const ColumnContentBoxWrap = styled.div`
width: 35vw;
display: flex;
flex-direction: column;
gap: 10px;
`

const ProjectWatchBox = styled.div`
padding: 6% 8%;
background-color: #173FB0;
border-radius: 8px;
display: flex;
justify-content: space-between;
`

const ContestManagementBox = styled.div`
position: relative;
width: 100%;
height: 22vh;
padding: 30px 35px;
background-color: #A3C3FF;
border-radius: 8px;
display: flex;
justify-content: space-between;
`

const SectionWrap = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const Title = styled.p`
font-family: "Pretendard-Semibold";
font-size: 2rem;
`

const MainIcon = styled.img`
height: 80%;
`

const ProjectContentWrap = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const WriteManagementText = styled.p`
font-family: "Pretendard-Medium";
font-size: 1.5rem;
color: white;
`

const ApproveAndRejectText = styled.p`
font-family: "Pretendard-Medium";
font-size: 1rem;
color: white;
`

const ProjectHandleButton = styled.button`
padding: 15px 30px;
background-color:transparent;
font-family: "Pretendard-Medium";
font-size: 1rem;
color: white;
border: 1px solid white;
border-radius: 50px;
`

const ContestContentWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const PresentProgressText = styled.p`
font-family: "Pretendard-Seminbold";
font-size: 1.5rem;
color: #0D37A3;
`

const ContestLinkWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const ContestLink = styled.div`
display: flex;
gap: 5px;
`

const ContestLinkText = styled.p`
font-family: "Pretendard-Seminbold";
font-size: 0.8rem;
color: #0D37A3;
`

const ContestImg = styled.img`
position: absolute;
top: 0;
right: 0;
height: 100%;
`