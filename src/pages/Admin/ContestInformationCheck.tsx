import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BackGround from "../../assets/BackGround.png"
import AwardBox from "../../components/Admin/AwardBox";

export default function ContestInformationCheck() {

    const awardName = ["금상", "은상", "동상", "인기상", "윙가르디움레비오우상"]

    return (
        <>
            <Header />
            <Container>
                <BackgroundImage>
                    <Image src={BackGround} />
                </BackgroundImage>

                <TitleWrap>
                    <TitleText>대회 정보 확인하기</TitleText>
                    <SubTitleText>대회에 대한 설명을 확인할 수 있습니다<br />대회에 대한 자세한 정보를 확인해주세요</SubTitleText>
                </TitleWrap>

                <ContentBox>
                    <ContentWrap>
                        <InfoWrap>
                            <ContestNameAndDate>
                                <ContestName>이것은 프로젝트 이름</ContestName>
                                <Date>2024.04.05 ~ 2024.04.12</Date>
                            </ContestNameAndDate>

                            <TextWrap>
                                <TargetAndPlaceWrap>
                                    <AccentText>대상</AccentText>
                                    <Text>대덕소프트웨어마이스터고등학교 전체 학생</Text>
                                </TargetAndPlaceWrap>
                                <TargetAndPlaceWrap>
                                    <AccentText>장소</AccentText>
                                    <Text>대덕소프트웨어마이스터고등학교 우정관</Text>
                                </TargetAndPlaceWrap>
                            </TextWrap>

                            <TextWrap>
                                <PurposeWrap>
                                    <AccentText>대회 목적</AccentText>
                                    <Text>아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리</Text>
                                </PurposeWrap>
                            </TextWrap>
                        </InfoWrap>

                        <AwardWrap>
                            <AwardTitleText>시상할 상 목록</AwardTitleText>
                            <AwardBoxWrap>
                                {awardName.map((value) => (
                                    <AwardBox text={value} />
                                ))}
                            </AwardBoxWrap>
                        </AwardWrap>
                    </ContentWrap>

                    <Button>확인</Button>
                </ContentBox>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContentBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 100px;
`

const BackgroundImage = styled.div`
width: 100%;
position: relative;
z-index: -100;
`

const Image = styled.img`
width: 100%;
position: absolute;
`

const TitleWrap = styled.div`
height: 30vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
`

const TitleText = styled.p`
font-family: "Pretendard-Semibold";
font-size: 180%;
color: white;
`

const SubTitleText = styled.p`
font-family: "Pretendard-Regular";
font-size: 80%;
color: white;
`

const ContentWrap = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
padding: 40px;
gap: 45px;
background-color: white;
border-radius: 20px;
`

const InfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`

const ContestNameAndDate = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`

const TextWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const TargetAndPlaceWrap = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const PurposeWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const AwardWrap = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`

const AwardBoxWrap = styled.div`
display: flex;
gap: 10px;
`

const Button = styled.button`
width: 12vw;
background-color: #2B4CFC;
color: white;
border: none;
border-radius: 12px;
padding: 12px;
font-family: "Pretendard-Medium";
font-size: 100%;
`

const ContestName = styled.p`
font-family: "Pretendard-Semibold";
font-size: 150%;
`

const Date = styled.p`
font-family: "Pretendard-Regular";
font-size: 80%;
color: #757575;
`

const AccentText = styled.p`
font-family: "Pretendard-Semibold";
font-size: 90%;
color: #757575;
`

const Text = styled.p`
font-family: "Pretendard-Regular";
font-size: 80%;
color: #757575;
line-height: 160%;
`

const AwardTitleText = styled.p`
font-family: "Pretendard-Medium";
font-size: 100%;
`