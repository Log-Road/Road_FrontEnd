import styled from "styled-components";
import { ThinArrow } from "../../../assets/Admin"
import Calendar from "./Calender";

interface PropsType {
  clicked?: boolean;
  onClick?: () => void;
}

const Input = ({ clicked, onClick }: PropsType) => {
  return (
    <>
      <Container onClick={onClick}>
        <DateInput placeholder="시작일을 입력해주세요" readOnly />
        <Icon>
          <ThinArrow />
        </Icon>
      </Container>
      {
        clicked && <Calendar />
      }
    </>
  )
}

export default Input

const Container = styled.div`
position: relative;
flex: 1;
`

const DateInput = styled.input`
width: 100%;
padding: 12px 16px;
border: none;
border-radius: 4px;
background-color: #F2F2F2;
`

const Icon = styled.div`
position: absolute;
top: 20%;
right: 5%;
`