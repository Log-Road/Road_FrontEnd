import React from "react";
import styled from "styled-components";
import { ReactComponent as Cancel } from "../../../assets/Cancel.svg"
import ModalEditIcon from "../../ModalEditIcon";
import EditSelectBox from "../EditSelectBox"

export default function StudentInfoEditModal() {

    //셀렉트 박스 오류 고쳐야 함

    const studentInfo = ["학년", "반", "번호"]

    return (
        <Container>
            <CancelWrap>
                <Cancel />
            </CancelWrap>

            <Content>
                <ModalEditIcon />

                <TitleWrap>
                    <Title>학생 정보를 수정해주세요</Title>
                    <SubTitle>홍길동 정보 수정 중..</SubTitle>
                </TitleWrap>

                <InputContainer>
                    {studentInfo.map((value) => (
                        <InputWrap>
                            <InnerText>학년</InnerText>
                            <Input placeholder="학년을 작성해주세요" value={1} />
                        </InputWrap>
                    )
                    )}
                    <EditSelectBox/>
                </InputContainer>

                <Button>수정하기</Button>
            </Content>
        </Container>
    )
}

const Container = styled.div`
padding: 20px 30px 45px 30px;
background-color: white;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
position: absolute;
top: 20vh;
border-radius: 20px;
width: 360px;

@media (min-width: 1550px) {
        width: 400px;
}
`

const Content = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

const CancelWrap = styled.div`
display: flex;
justify-content: flex-end;
`

const TitleWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`

const InputWrap = styled.div`
position: relative;
`

const Input = styled.input`
width: 100%;
border: 1px solid #e6e6e6;
border-radius: 12px;
padding: 16px 24px;
`

const Button = styled.button`
padding: 14px 20px;
border: none;
background-color: #2B4CFC;
border-radius: 12px;
font-family: "Pretendard-Medium";
font-size: 100%;
color: #fff;
`

const InnerText = styled.p`
position: absolute;
font-family: "Pretendard-Medium";
font-size: 90%;
color: #5E5E5E;
top: 50%;
right: 14px;
transform: translateY(-50%);
`

const Title = styled.p`
font-family: "Pretendard-Medium";
font-size: 140%;
`

const SubTitle = styled.p`
font-family: "Pretendard-Medium";
font-size: 90%;
color: #5E5E5E;
`
