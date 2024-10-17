import React from "react";
import styled from "styled-components";

interface ButtonProps {
    width?: string,
    text?: string,
    color?: string,
    textColor?: string
    hoverColor?: string
    onClick?: () => void
}

interface StyledProps {
    width?: string,
    color?: string,
    textColor?: string
    hoverColor?: string
}

const CheckButton: React.FC<ButtonProps> = ({ text, width, color, textColor, hoverColor, onClick }: ButtonProps) => {
    return (
        <Container
            width={width}
            color={color}
            textColor={textColor}
            hoverColor={hoverColor}
            onClick={onClick}>

            {text}
        </Container>
    )
}

const Container = styled.button<StyledProps>`
    width: ${({ width }) => width || "100px"};
    padding: 15px 20px;
    background-color: ${({ color }) => color || "#2B4CFC"};
    color: ${({ textColor }) => textColor || "#ffffff"};
    border: none;
    border-radius: 12px;
    font-family: "Pretendard-Medium";
    font-size: 14px;
    text-align: center;

    &:hover {
        background-color: ${({hoverColor}) => hoverColor || "#1f3ad2"};
    }
`

export default CheckButton