import React from "react";
import styled from "styled-components";

/**
 * 
 * @returns 로그인 버튼
 */


interface Props {
  text: string;
  href?: string;
  onClick: () => void;
};


export default function LoginBtn({ text, href, onClick }: Props) {
  return (
    <>
        <Btn href={href} style={{ cursor: "pointer" }} onClick={onClick} >
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
