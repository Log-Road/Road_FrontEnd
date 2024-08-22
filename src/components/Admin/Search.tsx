import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../assets/Admin"

export default function Search() {
    return (
        <Container>
            <Label>정보 검색</Label>
            <SearchBox>
                <Input placeholder="학생 정보 검색하기 EX) 홍길동" />
                <Icon>
                    <SearchIcon />
                </Icon>
            </SearchBox>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
flex-grow: 1;
`

const SearchBox = styled.div`
position: relative;
`

const Input = styled.input`
width: 100%;
border: none;
padding: 8px;
border-radius: 4px;
background-color: #F5F5F5;
font-family: "Pretendard-Semibold";
font-size: 14px;
color: #5E5E5E;
`

const Icon = styled.div`
position: absolute;
top: 50%;
right: 0px;
transform: translate(-50%, -40%);
`

const Label = styled.p`
font-family: "Pretendard-Medium";
font-size: 14px;
color: #474747;
`