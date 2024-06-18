import styled from "styled-components";
import { ReactComponent as TextLogo } from "../assets/Header/Text_Logo.svg";
import { ReactComponent as SearchIcon } from "../assets/Header/Search_Icon.svg"
import { ReactComponent as AlertIcon } from "../assets/Header/Alert_Icon.svg"
import { ReactComponent as ProfileIcon } from "../assets/Header/Profile_Icon.svg"

export default function Header() {
   return (
      <>
         <Container>
            <LogoAndMenu>
               <TextLogo />
               <LeftItemWrap>
                  <HandleText>대회 관리</HandleText>
                  <HandleText>인원 관리</HandleText>
                  <HandleText>동아리 관리</HandleText>
                  <HandleText>글 관리</HandleText>
               </LeftItemWrap>
            </LogoAndMenu>

            <RightItemWrap>
               <SearchIcon />
               <AlertIcon />
               <ProfileIcon />
               <UserName>사용자 님</UserName>
            </RightItemWrap>




         </Container>
      </>
   );
}



const Container = styled.header`
   width: 100vw;
   height: 8vh;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2em 10em;
   white-space: nowrap;
   background-color: white;
   @media screen and (max-width:980px){
      justify-content: center;
   }


`

const HandleText = styled.p`
   font-size: 1.125rem;
   color: #757575;
   /* @media screen and (max-width:700px){
      font-size: 2.571vw;
   } */
   
`

const LeftItemWrap = styled.div`
   display: flex;
   gap: 20px;
`

const RightItemWrap = styled.div`
   display: flex;
   gap: 20px;
   @media screen and (max-width:980px){
      display: none;
   }
`

const UserName = styled.p`
   font-size: 1.125rem;
   color: #757575;
   
`

const LogoAndMenu = styled.div`
   display: flex;
   gap: 30px;
`