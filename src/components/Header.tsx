import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as TextLogoSVG } from "../assets/Header/Text_Logo.svg";
import { ReactComponent as SearchIcon } from "../assets/Header/Search_Icon.svg"
import { ReactComponent as AlertIcon } from "../assets/Header/Alert_Icon.svg"
import { ReactComponent as ProfileIcon } from "../assets/Header/Profile_Icon.svg"
import { useNavigate } from "react-router-dom";

// 리팩토링 중
export default function Header() {

   const navigate = useNavigate();

   const [userRole, setUserRole] = useState(); 

   const adminList = [
      { name: "대회 관리", path: "/대회관리(어드민)_다영" },
      { name: "인원 관리", path: "/인원관리(어드민)_다영" },
      { name: "동아리 관리", path: "/동아리관리(어드민)_다영" },
      { name: "글 관리", path: "/글관리(어드민)_다영" }
   ];

   const studentList = [
      { name: "아카이브", path: "/아카이브_다영" },
      { name: "랭킹", path: "/랭킹_아직디자인없음" },
      { name: "투표", path: "/vote" },
      { name: "글 작성", path: "/write" }
   ];

   const teacherList = [
      { name: "아카이브", path: "/아카이브_다영" },
      { name: "랭킹", path: "/랭킹_아직디자인없음" },
      { name: "투표", path: "/vote" }
   ];

   const guestList = [
      { name: "아카이브", path: "/아카이브_다영" },
      { name: "랭킹", path: "랭킹_아직디자인없음" },
   ];

   // 유저 역할에 따라 다른 메뉴 리스트를 선택
   const menuList = userRole === "admin" ? adminList : 
                    userRole === "student" ? studentList : 
                    userRole === "teacher" ? teacherList : 
                    guestList;


   return (
      <>
         <Container>
            <ContantWrap>
               <MenuList>
                  <TextLogo onClick={() => navigate('/')} />
                  {menuList.map((item, index) => (
                     <Li key={index} onClick={() => navigate(item.path)}>{item.name}</Li>
                  ))}
               </MenuList>

               <RightIconSet>
                  <SearchIcon onClick={() => navigate('/search')} />
                  {userRole !== "guest" && (
                     <>
                        <AlertIcon />
                        <ProfileIcon onClick={() => navigate('/profile')} />
                        <UserName>사용자 님</UserName>
                     </>
                  )}
               </RightIconSet>
            </ContantWrap>
         </Container>
      </>
   );
}

const ContantWrap = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   max-width: 1412px;
`

const Container = styled.header`
   font-family: "Pretendard-Regular";
   padding: 22px 50px;
   display: flex;
   justify-content: center;
   font-size: 1.13rem;

   @media screen and (min-width:1024px) {
      /* background-color: red; */
   }

   // 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)
   @media screen and (min-width:768px) and (max-width: 1023px){
      /* background-color: blue; */

   }
   /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
   @media screen and (max-width:767px) {
      padding: 16px 16px;
      font-size: 0.95rem;
      /* background-color: pink; */
   }
`

const Li = styled.li`
   color: #757575;
   margin-top: 1px;
`

const MenuList = styled.ul`
   display: flex;

   @media screen and (min-width:767px) {
      gap: 33px;
   }

   @media screen and (max-width:767px) {
      gap: 22px;
      white-space: nowrap;
   }
   @media screen and (max-width:366px) {
      & > *:not(:first-child) {
         display: none;
      }
   }

`

const RightIconSet = styled.div`
   display: flex;
   gap: 20px;
   margin-top: 1px;

   @media screen and (max-width:767px) {
      display: none;
   }
`

const UserName = styled.p`
   color: #757575;
`

const TextLogo = styled(TextLogoSVG)`
   @media screen and (max-width:767px) {
      width: 55px;
   }
`;