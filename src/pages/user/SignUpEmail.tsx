import React, { useState } from "react";
import styled from "styled-components";
import UserInput from "../../components/User/Input";
import { ReactComponent as Road_Logo } from "../../assets/Road_Logo.svg";
import BackgroundImgFile from "../../assets/User/BackgroundImg";
import LoginBtn from "../../components/auth/Btn";
import { useNavigate } from "react-router-dom";
import EmailAuthentication from "../../components/User/EmailAuthentication";

/**
 *
 * @returns 회원가입 이메일 인증
 */

export default function SignUp() {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");
  const [warning, setWarning] = useState("");

  const CheckCertificationNumber = () => {
    if (isEmail !== "" && certificationNumber !== "") {
      navigate("/login");
    } else setWarning("인증번호가 일치하지 않습니다.");
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
            <EmailAuthentication
              name="이메일"
              placeholder="이메일을 입력해주세요"
              type="text"
              value={isEmail}
              onChange={(e) => setIsEmail(e.target.value)}
            />
            <UserInput
              name="인증번호"
              placeholder="인증번호를 입력해주세요"
              type="text"
              value={certificationNumber}
              onChange={(e) => setCertificationNumber(e.target.value)}
            />
          </InputBox>
          {warning && <WarningMessage>{warning}</WarningMessage>}
          <NextOrLogin>
            <LoginBtn onClick={CheckCertificationNumber} text="가입하기" />
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
  margin-bottom: 10px
`

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
