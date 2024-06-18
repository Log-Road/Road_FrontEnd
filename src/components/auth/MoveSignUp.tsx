import React from "react";
import styled from "styled-components";

/**
 * 
 * @returns 회원가입 페이지로 이동하는 버튼 컴포넌트
 */

export default function MoveSignUp() {
  return (
    <>
      <Main href="/signupselectuser">회원가입</Main>
    </>
  )
}

const Main = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10.5vw;
  height: 5vh;
  font-family: "Pretendard-SemiBold";
  font-size: 18px;
  color: #2B4CFC;
  border: 1px solid #2B4CFC;
  border-radius: 8px;
  margin: 8px 0 0 0;
`