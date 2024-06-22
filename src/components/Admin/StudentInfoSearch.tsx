import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/Search.svg"

export default function StudentInfoSearch() {
    return (
        <Container>
            <Label>정보 검색</Label>
            <SearchWrap>
                <Input placeholder="학생 정보 검색하기 EX) 홍길동" />
                <StyledSearchIcon />
            </SearchWrap>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
width: 300px;

@media (min-width: 1000px) and (max-width: 1450px) {
        width: 350px;
    }
@media (min-width: 1450px) and (max-width: 1700px) {
        width: 400px;
}
@media (min-width: 1700px) {
        width: 500px;
}
`

const SearchWrap = styled.div`
position: relative;
`

const Input = styled.input`
width: 100%;
height: 34px;
background-color: #F5F5F5;
border: none;
padding: 5px 15px;
border-radius: 8px;
font-family: "Pretnedard-Semibold";
font-size: 14px;
color: #5E5E5E;
`

const Label = styled.p`
font-family: "Pretnedard-Medium";
font-size: 14px;
color: #474747;
`

const StyledSearchIcon = styled(Search)`
position: absolute;
top: 50%; 
transform: translateY(-50%);
right: 10px;
`;