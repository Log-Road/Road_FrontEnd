import { useState } from "react";
import styled from "styled-components";
import ManagementTitleWrap from "../../components/Admin/ManagementTitleWrap";
import TableButton from "../../components/Admin/TableButton";
import { ClubData } from "../../constants/Admin";
import { AddClub, DeleteClub, EditClub } from "../../components/Admin/Modal";

export default function ClubManagement() {

    const [addModalOpen, setAddModalOpen] = useState<boolean>(false)
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
    const [selectClubId, setSelectClubId] = useState<number>(0)

    const handleClickModify = (id: number) => {
        setSelectClubId(id)
        setEditModalOpen(true)
    }

    const handleClickDelete = (id: number) => {
        setSelectClubId(id)
        setDeleteModalOpen(true)
    }

    return (
        <Container>
            <Contents>
                <ManagementTitleWrap
                    id="club"
                    title="동아리 관리"
                    info="학교 동아리 정보를 편집하고 관리할 수 있어요"
                    onClick={() => setAddModalOpen(true)}
                />

                <TableContainer>
                    <TableHeader>
                        <UserDataWrap>
                            <Label>현상태</Label>
                            <Label>동아리명</Label>
                        </UserDataWrap>
                    </TableHeader>

                    <TableDataWrap>
                        {ClubData.map(({ club_id = 0, is_active, club_name }) => (
                            <Row key={club_id} >
                                <UserDataWrap>
                                    <State active={is_active}>
                                        {is_active ? "활성화" : "비활성화"}
                                    </State>
                                    <Text>{club_name}</Text>
                                </UserDataWrap>

                                <ButtonWrap>
                                    <TableButton
                                        text="수정하기"
                                        onClick={() => handleClickModify(club_id)}
                                    />
                                    <TableButton
                                        text="삭제하기"
                                        onClick={() => handleClickDelete(club_id)}
                                    />
                                </ButtonWrap>
                            </Row>
                        ))}
                    </TableDataWrap>
                </TableContainer>
            </Contents>

            {
                (addModalOpen || editModalOpen || deleteModalOpen) &&
                <ModalBackground>
                    {addModalOpen && <AddClub />}
                    {editModalOpen && <EditClub clubId={selectClubId} />}
                    {deleteModalOpen && <DeleteClub clubId={selectClubId} />}
                </ModalBackground>
            }
        </Container>
    )
}

const ModalBackground = styled.div`
position: absolute;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0, 0, 0, 0.2);
`

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


const TableContainer = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

const TableHeader = styled.div`
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
gap: 100px;
`

const ButtonWrap = styled.div`
display: flex;
gap: 12px;
`

const Label = styled.p`
width: 60px;
font-family: "Pretendard-Medium";
font-size: 16px;
color: #ffffff;
`

const Text = styled.p`
font-family: "Pretendard-regular";
font-size: 16px;
color: #474747;
`

const State = styled.p<{ active?: boolean }>`
width: 60px;
font-family: "Pretendard-regular";
font-size: 16px;
color: ${({ active }) => active ? "#1D5AD0" : "#474747"};
`