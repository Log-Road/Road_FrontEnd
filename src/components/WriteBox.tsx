import React from "react";
import styled from "styled-components";
import {ReactComponent as Heart} from "../assets/Heart.svg"

export default function WriteBox() {
    return (
        <Container>
            <TopWrap>
                    <Image src="https://i.namu.wiki/i/Z9pdDs1mR4CPzQftituDEceiBFHmTmtWp_sYWr7tvvh3GweZjOoXrE6poZEjCp7BKDmZK0DCcu_F7jxHft2vAg.webp"/>
                    <ContestInfoWrap>
                        <ContestNameWrap>
                            <EventName>2024년 교내 해커톤</EventName>
                            <ContestName>이것은 프로젝트 이름</ContestName>
                        </ContestNameWrap>
                        <RowWrap>
                            <Heart/>
                            <LikeCount>100</LikeCount>
                        </RowWrap>
                        <RowWrap>
                            <ProjectScale>동아리(Log)</ProjectScale>
                            <ProjectPersonnelWrap>
                                <MediumText>홍길동</MediumText>
                            </ProjectPersonnelWrap>
                        </RowWrap>
                        <MediumText>
                        아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리
                        </MediumText>
                    </ContestInfoWrap>
                </TopWrap>
        </Container>
    )
}

const Container = styled.div`
width: 60vw;
background-color: red;
padding: 40px 40px 80px;
border-radius: 20px;
`

const TopWrap = styled.div`
display: flex;
gap: 30px;

`

const Image = styled.img`
width: 60%;
`

const ContestInfoWrap = styled.div`
width: 30%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px 0;
`

const ContestNameWrap = styled.div``

const RowWrap = styled.div``

const ProjectPersonnelWrap = styled.div``

const EventName = styled.p`
font-family: "Pretendard-Medium";
font-size: 100%;
`

const ContestName = styled.p`
font-family: "Pretendard-Semibold";
font-size: 140%;
`

const LikeCount = styled.p`

color: #A3A3A3;
`

const ProjectScale = styled.p``

const MediumText = styled.p``