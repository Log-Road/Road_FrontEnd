import React, { useState } from "react";
import styled from "styled-components";
import SelectRole from "../../components/User/SelectRole";
import UserBtn from "../../components/User/Btn";
import { ReactComponent as Road_Logo } from "../../assets/Road_Logo.svg";
import BackgroundImgFile from "../../assets/User/BackgroundImg";
import { useNavigate } from "react-router-dom";

/**
 *
 * @returns 역할 선택 페이지
 */

export default function SignUpSelectRole() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleNextClick = () => {
    if (selectedRole === "Teacher") {
      navigate("/signup");
    } else {
      navigate("/SignUpSelectClass");
    }
  };

  return (
    <>
      <Container>
        <AsideBox>
          <LogoBox>
            <Road_Logo />
            <LogoSubTitle>기록을 남기는 길 로드</LogoSubTitle>
          </LogoBox>
          <RoleBox>
            <RoleSubTitle>본인의 현재 신분을 선택해주세요</RoleSubTitle>
            <SelectRole
              onClick={() => handleRoleSelect("Student")}
              id="Student"
              Role="학생"
              selected={selectedRole === "Student"}
            />
            <SelectRole
              onClick={() => handleRoleSelect("Teacher")}
              id="Teacher"
              Role="교사"
              selected={selectedRole === "Teacher"}
            />
          </RoleBox>
          <NextOrLogin>
            <UserBtn onClick={handleNextClick} text="다음" />
            <LoginMovement href="/login">로그인 하러가기</LoginMovement>
          </NextOrLogin>
        </AsideBox>
        <BackgroundImgFile />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
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
  gap: 8px;
`;

const LogoSubTitle = styled.p`
  font-family: "Pretendard";
  font-size: 14px;
  color: #d1d1d1;
`;

const RoleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
`;

const RoleSubTitle = styled.p`
  font-family: "Pretendard";
  font-size: 14px;
  color: #bababa;
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
