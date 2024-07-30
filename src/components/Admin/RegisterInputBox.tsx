import React from "react";
import styled from "styled-components";

interface PropsType {
    label?: string,
    placeholder?: string
}

export default function RegisterInputBox({label, placeholder} : PropsType) {
    return (
        <Container>
            <LabelText>{label}</LabelText>
            <InputBox placeholder={placeholder}/>
        </Container>
    )
}

const Container = styled.div`
width: 50vw;
display: flex;
justify-content: space-between;
`

const LabelText = styled.p`
font-family: "Pretendard-Medium";
font-size: 100%;
`

const InputBox = styled.input`
width: 40vw;
background-color: #F2F2F2;
border: none;
border-radius: 8px;
padding: 10px 25px;
font-family: "Pretendard-Regular";
font-size: 80%;
`