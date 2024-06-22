import React from "react";
import styled from "styled-components";

interface PropsType {
    text?: string
}

export default function Button({text} : PropsType) {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
background-color: #F2F2F2;
display: flex;
justify-content: center;
align-items: center;
padding: 6px 25px;
border-radius: 20px;
`

const Text = styled.p`
font-family: "Pretendard-Medium";
font-size: 80%;
color: #474747;
`