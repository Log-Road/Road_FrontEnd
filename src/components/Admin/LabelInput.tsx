import { title } from "process";
import React from "react";
import styled from "styled-components";

interface InputProps {
    title?: string,
    placeholder?: string
}

const LabelInput = ({title, placeholder} : InputProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Input placeholder={placeholder}/>
        </Container>
    )
}

export default LabelInput

const Container = styled.div`
display: flex;
justify-content: space-between;
`

const Title = styled.p`
font-family: "Pretendard-Medium";
font-size: 14px;
`

const Input = styled.input`
width: 85%;
padding: 12px 16px;
border: none;
border-radius: 4px;
background-color: #F2F2F2;
`