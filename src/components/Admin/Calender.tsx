import React from "react";
import styled from "styled-components";
import { ThinArrow } from "../../assets/Admin";

const Calender = () => {
    return (
        <Container>
            <Input placeholder="시작일을 입력해주세요" readOnly/>
            <Icon>
                <ThinArrow />
            </Icon>
        </Container>
    )
}

export default Calender

const Container = styled.div`
position: relative;
flex: 1;
`

const Input = styled.input`
width: 100%;
padding: 12px 16px;
border: none;
border-radius: 4px;
background-color: #F2F2F2;
`

const Icon = styled.div`
position: absolute;
top: 20%;
right: 5%;
`