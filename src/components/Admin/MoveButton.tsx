import React from "react";
import styled from "styled-components";

interface PropsType {
    text?: string,
    backgroundColor?: string,
    textColor?: string
}

export default function MoveButton({text, backgroundColor, textColor}: PropsType) {
    return (
        <Container backgroundColor={backgroundColor} textColor={textColor}>
            {text}
        </Container>
    )
}

const Container = styled.button<PropsType>`
width: 15vw;
padding: 3%;
background-color: ${({ backgroundColor }) => backgroundColor || "black"};
color: ${({ textColor }) => textColor || "black"};
font-family: "Pretendard-Medium";
font-size: 100%;
border: none;
border-radius: 12px;
`