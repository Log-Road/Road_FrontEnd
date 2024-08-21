import React from "react";
import styled from "styled-components";

interface ButtonProps {
    icon?: React.ElementType,
    text?: string
}

export default function DocumentButton({icon: Icon, text}: ButtonProps) {

    return (
        <Container>
            {Icon && <Icon/>}
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
display: flex;
align-items: center;
padding: 4px 12px;
gap: 5px;
border: #0047D2 1px solid;
border-radius: 8px;
`

const Text = styled.p`
font-family: "Pretendard-Semibold";
font-size: 14px;
color: #0047D2;
`