import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import Button from "../../../components/Admin/Button";
import { clubInfo } from "../../../data/clubInfo";

export default function ClubManagement() {

    const clubInfoValue = ["현상태", "동아리명"]

    return (
        <Container>
            <Header />
            <Content>
                <TitleWrap>
                    <Title>동아리 관리</Title>
                    <SubTitle>학교 동아리 정보를 편집하고 관리할 수 있어요</SubTitle>
                </TitleWrap>

                <div>
                    <TableTitleWrap>
                        <TopWrapContent>
                            {clubInfoValue.map((value) => (
                                <TopText>{value}</TopText>
                            ))}
                        </TopWrapContent>
                    </TableTitleWrap>

                    {clubInfo.map((value, index) => (
                        <InfoContents key={index}>
                            <InfoTextWrap>
                                <State isStatus={value.state}>{value.state ? "활성화" : "비활성화"}</State>
                                <ClubName>{value.clubName}</ClubName>
                            </InfoTextWrap>
                            
                            <ButtonWrap>
                                <Button text="수정하기"/>
                                <Button text="삭제하기" />
                            </ButtonWrap>
                        </InfoContents>
                    ))}
                </div>

            </Content>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`

const Content = styled.div`
width: 70vw;
display: flex;
flex-direction: column;
gap: 3vh;
`

const TopWrap = styled.div`
display: flex;
justify-content: space-between;
`

const TitleWrap = styled.div`
display: flex;
align-items: flex-end;
gap: 10px;
`


const TableTitleWrap = styled.div`
width: 100%;
background-color: #0047D2;
padding: 10px 50px;
border-radius: 8px;
`

const TopWrapContent = styled.div`
display: flex;
gap: 100px;
`

const InfoContents = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px 50px;
border-bottom: 1px solid #D1D1D1;
`

const InfoTextWrap = styled.div`
display: flex;
gap: 100px;
`

const ButtonWrap = styled.div`
display: flex;
gap: 10px;
`

const State = styled.p<{ isStatus?: boolean }>`
width: 50px;
text-align: center;
font-family: "Pretendard-Regular";
font-size: 90%;
color: ${({ isStatus }) => (isStatus ? "#0047D2" : "#797979")}
`

const ClubName = styled.p`
font-family: "Pretendard-Medium";
font-size: 90%;
color: #474747;
`

const TopText = styled.p`
width: 50px;
text-align: center;
font-family: "Pretendard-Medium";
font-size: 90%;
color: #fff;
`

const Title = styled.p`
font-family: "Pretendard-Semibold";
font-size: 160%;
`

const SubTitle = styled.p`
font-family: "Pretendard-Medium";
font-size: 80%;
color: #8C8C8C;
`