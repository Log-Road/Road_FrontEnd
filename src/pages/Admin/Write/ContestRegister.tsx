import React from "react";
import styled from "styled-components";
import { Add } from "../../../assets/Admin";
import LabelInput from "../../../components/Admin/LabelInput"
import Calender from "../../../components/Admin/Calender";
import SelectBox from "../../../components/Admin/SelectBox";
import Button from "../../../components/Admin/CheckButton"
import Background from "../../../assets/Admin/Background.svg"

const ContestRegister = () => {

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <Container>
            <BackgroundImage />
            <Content>
                <TitleWrap>
                    <Title>대회 등록하기</Title>
                    <SubInfo>대회에 대한 설명과 필수 정보를 입력해주세요.<br />등록 버튼을 누른 직후 대회가 진행됩니다</SubInfo>
                </TitleWrap>

                <InputListContainer>
                    <LabelInput title="대회명" placeholder="대회명을 입력해주세요" />
                    <LabelInput title="대상" placeholder="대회 대상을 입력해주세요" />
                    <LabelInput title="장소" placeholder="장소를 입력해주세요" />

                    <Row>
                        <Label>대회 일정</Label>
                        <InputContent>
                            <Calender />
                            <Calender />
                        </InputContent>
                    </Row>

                    <Row>
                        <Label>대회 목적</Label>
                        <Textarea placeholder="대회 목적을 간단하게 작성해주세요" />
                    </Row>

                    <Row>
                        <Label>대회 일정</Label>
                        <InputContent>
                            <AwardInput placeholder="상 이름을 입력해주세요" />
                            <SelectBox name="awardCount" id="award" placeholder="개수를 선택해주세요" options={options} />
                            <PlusButton>
                                <Add />
                            </PlusButton>
                        </InputContent>
                    </Row>
                </InputListContainer>

                <ButtonWrap>
                    <Button
                        width="180px"
                        color="#D1D1D1"
                        textColor="#474747"
                        hoverColor="#B5B5B5"
                        text="뒤로가기"
                    />
                    <Button
                        width="180px"
                        text="다음"
                    />
                </ButtonWrap>
            </Content>
        </Container>
    )
}

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F6F6F6;
height: 100%;
`

const BackgroundImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 55%;
background-image: url(${Background});
background-size: cover;
background-position: center;
z-index: 0;
`

const Content = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
padding: 80px 0;
gap: 30px;
z-index: 1;
`

const TitleWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
`

const InputListContainer = styled.div`
display: flex;
flex-direction: column;
padding: 50px 70px;
gap: 30px;
background-color: #ffffff;
border-radius: 20px;
`

const Row = styled.div`
display: flex;
justify-content: space-between;
`

const InputContent = styled.div`
width: 85%;
display: flex;
gap: 12px;
`

const ButtonWrap = styled.div`
display: flex;
justify-content: center;
gap: 12px;
`

const Textarea = styled.textarea`
width: 85%;
height: 100px;
padding: 12px 16px;
border: none;
border-radius: 4px;
background-color: #F2F2F2;
resize: none;
`

const AwardInput = styled.input`
flex: 1;
padding: 12px 16px;
border: none;
border-radius: 4px;
background-color: #F2F2F2;
`

const PlusButton = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 4px;
`

const Title = styled.p`
font-family: "Pretendard-Semibold";
font-size: 32px;
color: #fff;
`

const SubInfo = styled.p`
font-family: "Pretendard-Medium";
font-size: 12px;
line-height: 160%;
color: #fff;
`

const Label = styled.p`
font-family: "Pretendard-Medium";
font-size: 14px;
`

export default ContestRegister