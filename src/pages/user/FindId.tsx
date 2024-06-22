import React from "react";
import styled from "styled-components";
import BackgroundImgFile from "../../assets/User/BackgroundImg";
import UserInput from "../../components/User/Input";
import EmailAuthentication from "../../components/User/EmailAuthentication";
import UserBtn from "../../components/User/Btn";
import { ReactComponent as Road_Logo } from "../../assets/Road_Logo.svg";

export default function FindId() {
  return (
    <>
      <Container>
        <AsideBox>
          <LogoBox>
            <Road_Logo />
            <LogoSubTitle>기록을 남기는 길 로드</LogoSubTitle>
          </LogoBox>
          <EmailAuthentication
            name="이메일"
            placeholder="이메일을 입력해주세요"
          />
          <UserInput name="인증번호" placeholder="인증번호를 입력해주세요" />
          <AnotherFunction>
            <UserBtn text="아이디 찾기" />
            <MoveToAnotherPage href="/login">로그인 하러가기</MoveToAnotherPage>
            <MoveToAnotherPage href="/findpw">비밀번호 찾으러 가기</MoveToAnotherPage>
          </AnotherFunction>
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

const AnotherFunction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin: 70px 0 0 0;
`;

const MoveToAnotherPage = styled.a`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  color: #BABABA;
`