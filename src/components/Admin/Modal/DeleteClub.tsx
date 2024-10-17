import styled from "styled-components";
import { X, Error } from "../../../assets/Admin"
import CheckButton from "../CheckButton";

interface PropsType {
  clubId?: number
}

export default function DeleteClub({ clubId }: PropsType) {
  return (
    <Container>
      <CancelWrap>
        <X />
      </CancelWrap>
      <Content>
        <MessageWrap>
          <ErrorWrap>
            <Error />
          </ErrorWrap>
          <TextWrap>
            <Title>동아리를 삭제하시겠습니까?</Title>
            <Info>삭제 시 동아리의 모든 데이터가 사라집니다</Info>
          </TextWrap>
        </MessageWrap>
        <CheckButton
          text="확인"
          width="100%"
          color="#C1473F"
          hoverColor="#BC372F"
        />
      </Content>
    </Container>
  )
}

const Container = styled.div`
width: 500px;
padding: 20px 25px 40px;
border-radius: 20px;
`

const CancelWrap = styled.div`
display: flex;
justify-content: flex-end;
`

const Content = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`

const MessageWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

const ErrorWrap = styled.div`
width: 70px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFDBDB;
border-radius: 100px;
`

const TextWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.p`
font-family: "Pretendard-Semi";
font-size: 24px;
color: #C1473F;
`

export const Info = styled.p`
font-family: "Pretendard-Medium";
font-size: 16px;
color: #5E5E5E;
`