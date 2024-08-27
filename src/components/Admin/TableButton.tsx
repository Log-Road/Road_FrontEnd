import React from "react";
import styled from "styled-components";

interface PropsType {
    text?: string
}

export default function TableButton({text} : PropsType) {
    return (
        <Button>{text}</Button>
    )
}

const Button = styled.button`
padding: 4px 20px;
border: none;
border-radius: 12px;
font-family: "Pretendard-Medium";
font-size: 14px;
color: #474747;
`