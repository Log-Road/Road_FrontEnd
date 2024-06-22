import React from "react";
import styled from "styled-components";
import UserBtn from "../../components/User/Btn";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Road_Logo } from "../../assets/Road_Logo.svg";
import BackgroundImgFile from "../../assets/User/BackgroundImg";
import SelectClass from "../../components/User/SelectClass";

/**
 *
 * @returns 회원가입 학년, 반, 번호 선택
 */

export default function SignUpSelectClass() {
  return (
    <>
      <Container>
        <AsideBox>
          <LogoBox>
            <Road_Logo />
            <LogoSubTitle>기록을 남기는 길 로드</LogoSubTitle>
          </LogoBox>
          <Class>
            <SelectClass name="학년" />
            <SelectClass name="반" />
            <SelectClass name="번호" />
          </Class>
          <NextOrLogin>
            <UserBtn text="다음" />
            <LoginMovement>로그인 하러가기</LoginMovement>
          </NextOrLogin>
        </AsideBox>
        <BackgroundImgFile />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const AsideBox = styled.main`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoSubTitle = styled.p`
  font-family: "Pretendard";
  font-size: 14px;
  color: #d1d1d1;
`;

const Class = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22vw;
  height: 7vh;
`;

const NextOrLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const LoginMovement = styled.p`
  font-family: "Pretendard";
  font-size: 14px;
  color: #bababa;
`;
