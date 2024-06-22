import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import DocumentButton from "../../components/Admin/DocumentButton";
import SelectBox from "../../components/Admin/SelectBox";
import StudentInfoSearch from "../../components/Admin/StudentInfoSearch";
import EditButton from "../../components/Admin/EditButton";
import { studentState } from "../../data/studentState";
import { studentInfo } from "../../data/studentInfo";
import { ReactComponent as Reset } from "../../assets/Reset.svg"

export default function PersonnelInformation() {

    const personnelInfoValue = ["학년", "반", "번호", "이름", "상태"]

    return (
        <Container>
            <Header />
            <Content>
                <TopWrap>
                    <TitleWrap>
                        <Title>인원 정보 관리</Title>
                        <SubTitle>학생 정보를 편집하고 관리할 수 있어요</SubTitle>
                    </TitleWrap>
                    <DocumentButtonWrap>
                        <DocumentButton active="추가"/>
                        <DocumentButton active="수정"/>
                    </DocumentButtonWrap>
                </TopWrap>

                <StudentSearchWrap>
                    <SearchContent>
                        {studentState.map((value, index) => (
                            <SelectBox key={index} label={value.label} option={value.option} />
                        ))}
                        <StudentInfoSearch />
                    </SearchContent>
                    <Reset />
                </StudentSearchWrap>

                <div>
                    <TableTitleWrap>
                        <TopWrapContent>
                            {personnelInfoValue.map((value) => (
                                <TopText>{value}</TopText>
                            ))}
                        </TopWrapContent>
                    </TableTitleWrap>

                    {studentInfo.map((value, index) => (
                        <InfoContents key={index}>
                            <InfoTextWrap>
                                {Object.entries(value).map(([key, info], index) => (
                                    <InfoText key={index} isStatus={key === "state" /*&& info === "재학중"*/}>
                                        {info}
                                    </InfoText>
                                ))}
                            </InfoTextWrap>
                            <EditButton />
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

const DocumentButtonWrap = styled.div`
display: flex;
gap: 10px;
`

const StudentSearchWrap = styled.div`
width: 100%;
border: 1px solid #D1D1D1;
padding: 2.5vh 3vw;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
`

const SearchContent = styled.div`
display: flex;
gap: 10px;
`

const InfoText = styled.p<{ isStatus?: boolean }>`
width: 50px;
text-align: center;
font-family: "Pretendard-Medium";
font-size: 90%;
color: ${(props) => (props.isStatus ? "#0047D2" : "#474747")};
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