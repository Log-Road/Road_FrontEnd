import styled from "styled-components";
import ManagementTitleWrap from "../../components/Admin/ManagementTitleWrap";
import { ContestData } from "../../constants/Admin"
import TableButton from "../../components/Admin/TableButton"

export default function ContestManagement() {

    const LabelValue = ["대회명", "진행상황", "대회일정"]

    const handleAddContest = () => {}

    return (
        <Container>
            <Contents>
                <ManagementTitleWrap
                    id="contest"
                    title="대회 관리"
                    info="대회를 개최하고 진행 및 관리할 수 있어요"
                    onClick={handleAddContest}
                />

                <RecentContestWrap>
                    <TextRecentView>최근 대회 바로보기 (시상 대기)</TextRecentView>
                    <RecentBox>
                        <ContestInfo>
                            <ContestName>2024 교내 해커톤</ContestName>
                            <Date>2024.01.01 ~ 2024.01.03</Date>
                        </ContestInfo>
                        <TableButton text="시상하기" color="#1F62E4" />
                    </RecentBox>
                </RecentContestWrap>

                <TableContainer>
                    <TableHeader>
                        <UserDataWrap>
                            {LabelValue.map((value, index) => (
                                <Label>{value}</Label>
                            ))}
                        </UserDataWrap>
                    </TableHeader>

                    <TableDataWrap>
                        {ContestData.map((value, index) => (
                            <Row key={index} >

                                <UserDataWrap>
                                    <Text>{value.name}</Text>
                                    <State>{value.status}</State>
                                    <Text>{value.date}</Text>
                                </UserDataWrap>

                                <TableButton text="수정하기" />
                            </Row>
                        ))}
                    </TableDataWrap>
                </TableContainer>

            </Contents>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const Contents = styled.div`
width: 70vw;
display: flex;
flex-direction: column;
gap: 40px;
`

const RecentContestWrap = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const RecentBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #D1D1D1;
border-radius: 8px;
padding: 12px 30px;
`

const ContestInfo = styled.div`
display: flex;
align-items: flex-end;
gap: 8px;
`

const TableContainer = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

const TableHeader = styled.div`
display: flex;
flex: 2 1 1;
background-color: #0047D2;
padding: 12px 48px;
border-radius: 8px;
`

const TableDataWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Row = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 48px;
border-bottom: 1px solid #D1D1D1;
`

const UserDataWrap = styled.div`
width: 70%;
display: flex;
`

const TextRecentView = styled.p`
font-family: "Pretendard-Medium";
font-size: 16px;
color: #474747;
`

const ContestName = styled.p`
font-family: "Pretendard-Medium";
font-size: 16px;
`

const Date = styled.p`
font-family: "Pretendard-regular";
font-size: 14px;
color: #474747;
`

const Label = styled.p`
font-family: "Pretendard-Medium";
font-size: 16px;
color: #ffffff;
flex: 1;
text-align: center;
`

const Text = styled.p`
font-family: "Pretendard-regular";
font-size: 16px;
color: #474747;
flex: 1;
text-align: center;
overflow: hidden;
text-overflow: ellipsis; 
white-space: nowrap;
`

const State = styled.p`
font-family: "Pretendard-regular";
font-size: 16px;
color: #1D5AD0;
flex: 1;
text-align: center;
`