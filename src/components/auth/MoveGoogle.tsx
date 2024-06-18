import React from "react";
import styled from "styled-components";
import { ReactComponent as Google } from "../../assets/auth/Google.svg";

/**
 * 
 * @returns 구글 로그인으로 이동하는 버튼 컴포넌트
 */

export default function MoveGoogle() {
  return (
    <>
      <Main>
        <Google />
        <GoogleText>Google</GoogleText>
      </Main>
    </>
  );
}

const Main = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 10.5vw;
  height: 5vh;
  border: 1px solid #BABABA;
  border-radius: 8px;
  margin: 8px 0 0 0;
`;

const GoogleText = styled.p`
  font-family:"Prentedard-Regular"
`
