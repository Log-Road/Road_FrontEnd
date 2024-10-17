import styled from "styled-components"
import { Cancel, Writer, ThinArrow, ArrowDown } from "../../../assets/Admin"
import CheckButton from "../CheckButton"
import { useState } from "react"

const studentState = ["재학중", "졸업", "자퇴", "휴학"]

export default function EditPerson() {

  const [inputs, setInputs] = useState({
    grade: 2,
    class: 2,
    number: 16
  })

  const dummy = [
    { text: "학년", key: "grade", value: inputs.grade },
    { text: "반", key: "class", value: inputs.class },
    { text: "번호", key: "number", value: inputs.number },
  ];

  const [openOptions, setOpenOptions] = useState(false)
  const [selectedOptions, setSelectedOption] = useState("재학중")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setInputs({
      ...inputs,
      [key]: e.target.value
    })
  }

  const clickOptions = (value: string) => {
    setSelectedOption(value)
    setOpenOptions(false)
  }

  return (
    <Container>
      <CancelWrap>
        <Cancel />
      </CancelWrap>

      <Content>
        <StudentInfo>
          <IconWrap>
            <Writer />
          </IconWrap>
          <WriteWrap>
            <Title>학생 정보를 수정해주세요</Title>
            <Info><UserName>홍길동</UserName> 정보 수정중...</Info>
          </WriteWrap>
        </StudentInfo>

        <SelectContent>
          <InputWrap>
            {
              dummy.map((value) => (
                <UserInfoWrap key={value.key}>
                  <StudentIdInnerText>{value.text}</StudentIdInnerText>
                  <Input
                    type="number"
                    value={value.value}
                    onChange={(e) => handleInputChange(e, value.key)}
                  />
                </UserInfoWrap>
              ))
            }
          </InputWrap>

          <SelectBoxContainer>
            <SelectWrap onClick={() => setOpenOptions(!openOptions)}>
              <SelectText>{selectedOptions}</SelectText>
              <ThinArrow />
            </SelectWrap>

            {
              openOptions &&
              <OptionWrap>
                {studentState.map((value, index) => (
                  <OptionBox key={index} onClick={() => clickOptions(value)}>
                    <InnerText>{value}</InnerText>
                  </OptionBox>
                ))}
              </OptionWrap>
            }

          </SelectBoxContainer>
        </SelectContent>

        <CheckButton text="수정하기" width="100%" />
      </Content>
    </Container>
  )
}
const Container = styled.div`
width: 500px;
display: flex;
flex-direction: column;
gap: 8px;
padding: 20px;
`

const CancelWrap = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

const Content = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
`

const StudentInfo = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

const IconWrap = styled.div`
width: 70px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: #D5E3FF;
`

const WriteWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const SelectContent = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const InputWrap = styled.div`
display: flex;
gap: 8px;
`

const UserInfoWrap = styled.div`
display: flex;
align-items: center;
padding: 0 12px;
border-radius: 12px;
border: 1px solid #D1D1D1;
overflow: hidden;
`

const Input = styled.input`
height: 54px;
padding-right: 12px;
flex: 1;
text-align: right;
border: none;
`

const SelectText = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 14px;
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

const StudentIdInnerText = styled.p`
position: absolute;
font-family: "Pretendard-Regular";
font-size: 16px;
color: #5E5E5E;
`

const UserName = styled.span`
font-family: "Pretendard-Bold";
font-size: 16px;
color: #5E5E5E;
`

const SelectBoxContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
`

const SelectWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px 16px;
border: 1px solid #D1D1D1;
border-radius: 8px;
`

const OptionWrap = styled.div`
position: absolute;
top: 70px;
display: flex;
flex-direction: column;
width: 100%;
background-color: #ffffff;
border: 1px solid #D1D1D1;
border-radius: 4px;
z-index: 100;

:hover {
 background-color: #f5f5f5;
}
`

const OptionBox = styled.div`
padding: 10px;
`

const InnerText = styled.p`
padding: 8px;
font-family: "Pretendard-Medium";
font-size: 13px;
color: #8C8C8C;
`