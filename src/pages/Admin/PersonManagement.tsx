import styled from "styled-components";
import ManagementTitleWrap from "../../components/Admin/ManagementTitleWrap";
import SelectBox from "../../components/Admin/SearchSelectBox";
import Search from "../../components/Admin/Search";
import TableButton from "../../components/Admin/TableButton";
import { SelectValue, UserData } from "../../constants/Admin";
import { Reset } from "../../assets/Admin";

const status = {
    ENROLL: "재학중",
    GRADUATE: "졸업",
    WITHDRAWAL: "전학",
    ABSENCE: "휴재",
    UNKNOWN: "등록되지 않은 사용자입니다. 등록을 해주세요"
} as const

const handleChangeUserStatus = (studentStatus: keyof typeof status) => {
    return status[studentStatus] || status.UNKNOWN;
};

const handleAddPerson = () => {}

export default function PersonManagement() {
    const LabelValue = ["학년", "반", "번호", "이름", "상태"];

    return (
        <Container>
            <Contents>
                <ManagementTitleWrap
                    id="person"
                    title="인원 정보 관리"
                    info="학생 정보를 편집하고 관리할 수 있어요"
                    onClick={handleAddPerson}
                />

                <FilterWrap>
                    {SelectValue.map((value) => (
                        <SelectBox
                            key={value.id}
                            name={value.name}
                            id={value.id}
                            text={value.text}
                            placeholder={value.placeholder}
                            options={value.options}
                        />
                    ))}
                    <Search />
                    <Reset />
                </FilterWrap>

                <TableContainer>
                    <TableHeader>
                        <UserDataWrap>
                            {LabelValue.map((value, index) => (
                                <Label key={index}>{value}</Label>
                            ))}
                        </UserDataWrap>
                    </TableHeader>

                    <TableDataWrap>
                        {UserData.map(({ person_id, grade, class: className, number, name, status = "UNKNOWN" }) => (
                            <Row key={person_id}>
                                <UserDataWrap>
                                    <Text>{grade}</Text>
                                    <Text>{className}</Text>
                                    <Text>{number}</Text>
                                    <Text>{name}</Text>
                                    <Text>{handleChangeUserStatus(status)}</Text>
                                </UserDataWrap>
                                <TableButton text="수정하기" />
                            </Row>
                        ))}
                    </TableDataWrap>
                </TableContainer>
            </Contents>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Contents = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const FilterWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 28px 36px;
    border: 1px solid #D1D1D1;
    border-radius: 4px;

    @media screen and (max-width: 1220px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
        gap: 12px;
    }
`;

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TableHeader = styled.div`
    background-color: #0047D2;
    padding: 12px 48px;
    border-radius: 8px;
`;

const TableDataWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 48px;
    border-bottom: 1px solid #D1D1D1;
`;

const UserDataWrap = styled.div`
    width: 70%;
    display: flex;
`;

const Label = styled.p`
    flex: 1;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #ffffff;
`;

const Text = styled.p`
    flex: 1;
    font-family: "Pretendard-regular";
    font-size: 16px;
    color: #474747;
`;
