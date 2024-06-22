import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import DocumentButton from "../../components/Admin/DocumentButton";
import Button from "../../components/Admin/Button";
import { contestInfo } from "../../data/contestInfo"

export default function ContestManagement() {

    const classInfoValue = ["진행상황", "일정", "대회명"]
    const buttonConfig: { [key: string]: string[] } = {
        "시상대기": ["수정하기", "시상하기"],
        "진행중": ["수정하기"],
        "시상완료": ["수정하기", "결과보기"]
    };

    return (
        <Container>
            <Header />
            <Content>
                <TopWrap>
                    <TitleWrap>
                        <Title>대회 관리</Title>
                        <SubTitle>대회를 개최하고 진행  및 관리 할 수 있어요</SubTitle>
                    </TitleWrap>
                    <DocumentButton text="대회 추가하기" icon="plus" />
                </TopWrap>


                <div>
                    <TableTitleWrap>
                        <TopWrapContent>
                            {classInfoValue.map((value) => (
                                <TopText>{value}</TopText>
                            ))}
                        </TopWrapContent>
                    </TableTitleWrap>

                    {contestInfo.map((value, index) => (
                        <InfoContents key={index}>
                            <InfoTextWrap>
                                <State>{value.state}</State>
                                <Date>{value.schedule}</Date>
                                <ContestName>{value.contestName}</ContestName>
                            </InfoTextWrap>

                            <ButtonWrap>
                                {(buttonConfig[value.state || ""]).map((text: string, i: number) => (
                                    <Button key={i} text={text} />
                                ))}
                            </ButtonWrap>
                        </InfoContents>
                    ))}
            </div>

        </Content>
        </Container >
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
gap: 110px;
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
gap: 50px;
`

const ButtonWrap = styled.div`
display: flex;
gap: 10px;
`

const State = styled.p`
width: 50px;
font-family: "Pretendard-Regular";
font-size: 90%;
color: #1D5AD0;
`

const Date = styled.p`
width: 170px;
text-align: center;
font-family: "Pretendard-Regular";
font-size: 90%;
color: #a1a1a1;
`

const ContestName = styled.p`
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