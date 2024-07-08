import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import BackGround from "../../../assets/BackGround.png"
import RegisterInputBox from "../../../components/Admin/RegisterInputBox";
import CalenderBox from "../../../components/Admin/CalenderBox";
import SelectBox from "../../../components/Admin/SelectBox";
import { ReactComponent as Plus } from "../../../assets/Plus.svg"
import MoveButton from "../../../components/Admin/MoveButton";

export default function ContestUpdate() {
    return (
        <>
            <Header />
            <Container>
                <BackgroundImage>
                    <Image src={BackGround} />
                </BackgroundImage>

                <TitleWrap>
                    <TitleText>대회 수정하기</TitleText>
                    <SubTitleText>대회에 대한 설명과 필수 정보를 입력해주세요.<br/>등록 버튼을 누른 직후 대회가 진행됩니다</SubTitleText>
                </TitleWrap>

                <ContentBox>
                    <ContestRegisterWrap>
                        <RegisterInputBox label="대회명" placeholder="대회명을 입력해주세요" />

                        <RegisterWrap>
                            <LabelText>대회 일정</LabelText>
                            <InputWrap>
                                <CalenderBox />
                                <CalenderBox />
                            </InputWrap>
                        </RegisterWrap>

                        <RegisterWrap>
                            <LabelText>대회 목적</LabelText>
                            <TextArea placeholder="대회 목적을 간단하게 작성해주세요" />
                        </RegisterWrap>

                        <RegisterInputBox label="대상" placeholder="대회 대상을 입력해주세요" />

                        <RegisterInputBox label="장소" placeholder="장소를 입력해주세요" />

                        <RegisterWrap>
                            <LabelText>상 등록</LabelText>
                            <InputWrap>
                                <AwardRegisterInput placeholder="상 이름을 입력해주세요" />
                                <SelectBox placeholder="개수를 선택해주세요" textColor="#8C8C8C" />
                                <PlusButton>
                                    <Plus width="24" height="24" fill="#8C8C8C" />
                                </PlusButton>
                            </InputWrap>
                        </RegisterWrap>
                    </ContestRegisterWrap>

                    <ButtonWrap>
                        <MoveButton text="뒤로가기" backgroundColor="#D1D1D1" textColor="#474747" />
                        <MoveButton text="다음" backgroundColor="#2B4CFC" textColor="white" />
                    </ButtonWrap>
                </ContentBox>
            </Container>
        </>

    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//background-color: #F6F6F6;
`

const BackgroundImage = styled.div`
width: 100%;
position: relative;
z-index: -100;
`

const Image = styled.img`
width: 100%;
position: absolute;
`

const ContentBox = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
align-items: center;
margin-bottom: 100px;
`

const TitleWrap = styled.div`
height: 30vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
`

const TitleText = styled.p`
font-family: "Pretendard-Semibold";
font-size: 180%;
color: white;
`

const SubTitleText = styled.p`
font-family: "Pretendard-Regular";
font-size: 80%;
color: white;
`

const ContestRegisterWrap = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
background-color: white;
border-radius: 20px;
padding: 50px 70px;
`

const RegisterWrap = styled.div`
display: flex;
justify-content: space-between;
`

const LabelText = styled.p`
font-family: "Pretendard-Medium";
font-size: 100%;
`

const InputWrap = styled.div`
width: 40vw;
gap: 20px;
display: flex;
justify-content: space-between;
`

const AwardRegisterInput = styled.input`
width: 100%;
background-color: #F2F2F2;
border: none;
border-radius: 8px;
padding: 10px 25px;
font-family: "Pretendard-Regular";
font-size: 80%;
`

const PlusButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: #F2F2F2;
border: none;
border-radius: 8px;
`

const TextArea = styled.textarea`
width: 40vw;
background-color: #F2F2F2;
border: none;
border-radius: 8px;
padding: 10px 25px;
font-family: "Pretendard-Regular";
font-size: 80%;
resize: none;
`

const ButtonWrap = styled.div`
display: flex;
gap: 15px;
`