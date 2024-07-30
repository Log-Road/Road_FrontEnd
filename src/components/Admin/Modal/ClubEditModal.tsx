import React from "react";
import styled from "styled-components";
import ModalEditIcon from "../../ModalEditIcon";
import { ReactComponent as Cancel } from "../../../assets/Cancel.svg"

export default function ClubEditModal() {
    return (
        <Container>
            <CancelWrap>
                <Cancel />
            </CancelWrap>

            <Content>
                <ModalEditIcon />

                <TitleWrap>
                    <Title>동아리 명을 수정해주세요</Title>
                    <SubTItle>동아리 이름이 잘못되었다면 수정하기 ㄱㄱ</SubTItle>
                </TitleWrap>

                <LabelInputWrap>
                    <Label>동아리 명</Label>
                    <Input placeholder="동아리 이름을 작성해주세요" value={"Log"}/>
                </LabelInputWrap>

                <AddButton>수정하기</AddButton>
            </Content>
        </Container>
    )
}

const Container = styled.div`
background-color: white;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
position: absolute;
top: 20vh;
border-radius: 20px;
padding: 20px 30px 35px 30px;
width: 360px;

@media (min-width: 1550px) {
        width: 400px;
}
`

const Content = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`

const CancelWrap = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

const TitleWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const LabelInputWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

const Input = styled.input`
padding: 12px 20px;
border-radius: 12px;
border: 1px solid #D1D1D1;

::placeholder {
font-family: "Pretendard-Medium";
font-size: 16px;
color: #BABABA;
}
`

const AddButton = styled.button`
padding: 14px 20px;
border: none;
background-color: #2B4CFC;
border-radius: 12px;
font-family: "Pretendard-Medium";
font-size: 100%;
color: #fff;
`

const Label = styled.p`
font-family: "Pretendard-Regular";
font-size: 90%;
`

const Title = styled.p`
font-family: "Pretendard-Medium";
font-size: 140%;
`

const SubTItle = styled.p`
font-family: "Pretendard-Medium";
font-size: 90%;
color: #5E5E5E;
`
