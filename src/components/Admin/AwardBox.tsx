import React from "react";
import styled from "styled-components";

interface PropsType {
    text?: string
}

export default function AwardBox({text} : PropsType) {
    return (
        <Container>
            {text}
        </Container>
    )
}

const Container = styled.div`
padding: 8px 12px;
border: 1px solid #BABABA;
border-radius: 12px;
font-family: "Pretendard-Medium";
font-size: 80%;
color: #757575;
`