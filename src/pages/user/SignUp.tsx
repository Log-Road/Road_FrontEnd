import React, { useState } from "react";
import styled from "styled-components";
import UserInput from "../../components/User/Input";
import { ReactComponent as Road_Logo } from "../../assets/Road_Logo.svg";
import BackgroundImgFile from "../../assets/User/BackgroundImg";
import LoginBtn from "../../components/auth/Btn";
import { useNavigate } from "react-router-dom";

/**
 *
 * @returns 화원가입 메인화면
 */

export default function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [warning, setWarning] = useState("");

  const handleSignUp = () => {
    if (
      username !== "" &&
      userId !== "" &&
      password !== "" &&
      checkPassword !== ""
    ) {
      navigate("/signupemail");
    } else {
      setWarning("빈 곳이 없는지 다시 한 번 확인해주세요.");
    }
  };

  return (
    <>
      <Container>
        <AsideBox>
          <div>
            <LogoBox>
              <Road_Logo />
              <LogoSubTitle>기록을 남기는 길 로드</LogoSubTitle>
            </LogoBox>
          </div>
          <InputBox>
            <UserInput
              name="이름"
              placeholder="이름을 입력해주세요"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <UserInput
              name="아이디"
              placeholder="아이디를 입력해주세요"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <UserInput
              name="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <UserInput
              name="비밀번호 재확인"
              placeholder="비밀번호를 재확인 해주세요"
              type="password"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </InputBox>
          {warning && <WarningMessage>{warning}</WarningMessage>}
          <NextOrLogin>
            <LoginBtn text="다음" onClick={handleSignUp} />
            <LoginMovement href="/Login">로그인 하러가기</LoginMovement>
          </NextOrLogin>
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

const AsideBox = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 10px;
`;

const NextOrLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const LoginMovement = styled.a`
  font-family: "Pretendard";
  font-size: 14px;
  color: #bababa;
`;
