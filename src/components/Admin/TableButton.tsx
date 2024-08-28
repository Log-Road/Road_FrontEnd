import React from "react";
import styled from "styled-components";

interface PropsType {
    text?: string
    color?: string
}

interface ButtonProps {
    color?: string
}

export default function TableButton({text, color} : PropsType) {
    return (
        <Button color={color}>{text}</Button>
    )
}

const Button = styled.button<ButtonProps>`
padding: 4px 20px;
border: none;
border-radius: 12px;
font-family: "Pretendard-Medium";
font-size: 14px;
color: ${(props) => (props.color? "#ffffff" : "#474747")};
background-color: ${(props) => props.color || "#F2F2F2"};
`