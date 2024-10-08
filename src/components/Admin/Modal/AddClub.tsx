import styled from "styled-components";
import { X, Writer } from "../../../assets/Admin/index"
import CheckButton from "../CheckButton";
import { useState } from "react";

export default function AddClub() {

  const [clubName, setClubName] = useState<string>("")

  const handleChangeInput = (text: string) => {
    setClubName(text)
  }

  return (
    <Container>
      <CancelWrap>
        <X />
      </CancelWrap>
      <Content>
        <WriterWrap>
          <Writer />
        </WriterWrap>
        <TextWrap>
          <Title>동아리를 추가해주세요</Title>
          <Info>새로운 동아리 이름을 작성해주세요</Info>
        </TextWrap>
        <InputWrap>
          <Label>동아리명</Label>
          <Input
            placeholder="동아리 이름을 작성해주세요"
            onChange={(e) => handleChangeInput(e.target.value)}
          />
        </InputWrap>
        <CheckButton
          text="추가하기"
          width="100%"
          onClick={() => { }}
        />
      </Content>
    </Container>
  )
}

const Container = styled.div`
width: 400px;
padding: 20px 30px 40px 30px;
border-radius: 20px;
background-color: #fff;
display: flex;
flex-direction: column;
gap: 12px;
`

const CancelWrap = styled.div`
display: flex;
justify-content: flex-end;
`

const Content = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

const WriterWrap = styled.div`
width: 70px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: #D5E3FF;
`

const TextWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const InputWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const Input = styled.input`
width: 100%;
padding: 12px 16px;
border: 1px solid #D1D1D1;
border-radius: 12px;

::placeholder {
  color: #BABABA;
}
`

const Title = styled.p`
font-family: "Pretendard-Semi";
font-size: 24px;
`

const Info = styled.p`
font-family: "Pretendard-Medium";
font-size: 16px;
color: #5E5E5E;
`

const Label = styled.p`
font-family: "Pretendard-Regular";
font-size: 14px;
color: #5E5E5E;
`