import styled from "styled-components";

interface StackTagProps {
   text: string;
}

export default function StackTag({text}: StackTagProps) {
   return (
      <>
      <Tag>{text}</Tag>
      </>
   );
};

const Tag = styled.button`
   padding: 6px 8px;
   border: 1px solid #BABABA;
   border-radius: 11px;
   color: #757575;
   background-color: white;
   font-size: 0.8rem;
   white-space: nowrap;
   font-family: "Pretendard-Regular";
   user-select : none;
`