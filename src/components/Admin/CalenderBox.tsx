import React from "react";
import styled from "styled-components";
import {ReactComponent as ArrowDownStroke} from "../../assets/ArrowDownStroke.svg"

export default function CalenderBox() {
    return (
        <Container>
            <Text>시작일을 입력해주세요</Text>
           <ArrowDownStroke/>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #F2F2F2;
border: none;
border-radius: 8px;
padding: 10px 25px;
`

const Text = styled.p`
font-family: "Pretendard-Regular";
font-size: 80%;
color: #8C8C8C;
`