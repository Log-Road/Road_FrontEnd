import React from "react";
import styled from "styled-components";

/**
 * 
 * @returns 회원가입 버튼
 */

interface Props  {
  text: string;
  href?: string;
  onClick?: () => void
};



export default function UserBtn({ text, href, onClick }: Props) {
  return (
    <>
        <Btn href={href} onClick={onClick} style={{ cursor: "pointer" }}>
          {text}
        </Btn>
    </>
  );
}

const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;

  width: 22vw;
  height: 5vh;

  color: #ffffff;
  background-color: #2b4cfc;

  border: none;
  border-radius: 8px;

  &:active {
    background-color: #0930fc;
  }
`;
