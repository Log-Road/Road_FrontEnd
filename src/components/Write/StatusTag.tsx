import styled from "styled-components";

export default function StatusTag() {
   return (
      <>
         <Tag>승인 완료</Tag>
      </>
   );
}


const Tag = styled.button`
   padding: 0.8vh 1.2vw;
   border: none;
   border-radius: 8px;
   color: #2B4CFC;
   background-color: #D5E3FF;
   font-size: 0.8rem;
   white-space: nowrap;
   font-family: "Pretendard-Medium";
   user-select : none;
   margin-top: 13px;
`