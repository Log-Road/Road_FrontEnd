import React from "react";
import styled from "styled-components";

interface PropsType {
    value?: Array<string>
}

export default function ListSelectValue({value} : PropsType) {
    return (
        <Container>
            {value && value.map((value) => (
                <Content>{value}</Content>
            ))}
        </Container>
    )
}

const Container = styled.div`
display: flex;
gap: 10px;
`

const Content = styled.div`
border: 1px solid #BABABA;
border-radius: 20px;
padding: 8px 2%;
font-family: "Pretendard-Regular";
font-size: 0.9rem;
color: #8C8C8C;
`