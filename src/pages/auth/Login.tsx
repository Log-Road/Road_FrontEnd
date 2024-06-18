import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginInput from "../../components/auth/Input";
import LoginBtn from "../../components/auth/Btn";
import BackgroundImgFile from "../../assets/User/BackgroundImg";
import { ReactComponent as Road_Logo } from "../../assets/Road_Logo.svg";
import MoveSignUp from "../../components/auth/MoveSignUp";
import MoveGoogle from "../../components/auth/MoveGoogle";

/**
 *
 * @returns 로그인 페이지
 */

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setWarning("아이디와 비밀번호를 입력해주세요");
    } else {
      setWarning("");
      console.log("Logging in with", username, password);
      
    }
  }

  return (
    <>
      <Container>
        <AsideBox>
          <LogoBox>
            <Road_Logo />
            <LogoSubTitle>기록을 남기는 길 로드</LogoSubTitle>
          </LogoBox>
          <InputBox>
            <LoginInput
              name="아이디"
              type="text"
              placeholder="아이디를 입력해주세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <LoginInput
              name="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          {warning && <WarningMessage>{warning}</WarningMessage>}
          <AnotherFunction>
            <LoginBtn text="로그인" onClick={handleLogin} />
            <Move>
              <MoveSignUp />
              <MoveGoogle />
            </Move>
          </AnotherFunction>
          <FindBox>
            <FindID href="">아이디 찾기 |</FindID>
            <FindPW href=""> 비밀번호 찾기</FindPW>
          </FindBox>
        </AsideBox>
        <BackgroundImgFile />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const AsideBox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 0 20px 0;
`;

const LogoSubTitle = styled.p`
  font-family: "Pretendard";
  font-size: 14px;
  color: #d1d1d1;
`;

const InputBox = styled.div`
  gap: 8px;
  margin: 0 0 50px 0;
`;

const WarningMessage = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  color: red;
  margin-bottom: 10px
`

const AnotherFunction = styled.div`
  gap: 8px;
`;

const Move = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FindBox = styled.div`
  margin-top: 16px;
`;

const FindID = styled.a`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  color: #bababa;
`;

const FindPW = styled.a`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  color: #bababa;
`;
