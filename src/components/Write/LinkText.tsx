import styled from "styled-components";
import { ReactComponent as LinkIcon } from "../../assets/Write/LinkIcon.svg";

export default function LinkText() {

   const link = 'https://www.youtube.com/watch?v=oGnPF2YigLI';
   return (
      <>
      <Box>
         <TextGap>
            <LinkIcon/>
            <Text>시연영상 링크</Text>
         </TextGap>
         <Link>{link}</Link>


      </Box>
      </>
   );
};

const Box = styled.div`
   font-family: "Pretendard-Medium";
   background-color: #F3F3F3;
   padding: 7px 17px;
   border-radius: 20px;
   display: flex;
   gap: 10px;
`

const Text = styled.div`
   color: #757575;
   font-size: 0.9rem;
`

const TextGap = styled.div`
   display: flex;
   align-items: center;
   gap: 2px;
   user-select : none;
`

const Link = styled.div`
   font-family: "Pretendard-Regular";
   color: #757575;
   font-size: 0.9rem;
   user-select : all;
`