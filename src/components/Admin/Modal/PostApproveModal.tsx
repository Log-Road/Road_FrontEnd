import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckCircle } from "../../../assets/CheckCircle.svg"
import { ReactComponent as Cancel } from "../../../assets/Cancel.svg"

export default function PostApproveModal() {
    return (
        <Container>
            <CancelWrap>
                <Cancel />
            </CancelWrap>
            
            <ContentWrap>
                
                <InfoWrap>
                    <CheckCircle />
                    <ShowTextWrap>
                        <Title>게시물 업로드 승인하시겠습니까?</Title>
                        <SubTitle>여기 문구도 추천해주세요</SubTitle>
                        <SubTitle>게시글 업로드 승인 확인하는 멘트</SubTitle>
                    </ShowTextWrap>
                </InfoWrap>
               
                <ButtonWrap>
                    <CancelButton>취소</CancelButton>
                    <CheckButton>확인</CheckButton>
                </ButtonWrap>

            </ContentWrap>
        </Container>
    )
}

const Container = styled.div`
position: absolute;
width: 27vw;
background-color: white;
border: 1px solid #BABABA;
border-radius: 20px;
padding: 20px 25px;
`

const CancelWrap = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

const ContentWrap = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`

const InfoWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

const ShowTextWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ButtonWrap = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
`

const CancelButton = styled.button`
width: 100%;
padding: 8px;
border: none;
border-radius: 8px;
background-color: #D1D1D1;
font-family: "Pretendard-Medium";
font-size: 0.8em;
color: #474747;
`

const CheckButton = styled.button`
width: 100%;
padding: 8px;
border: none;
border-radius: 8px;
background-color: #2B4CFC;
font-family: "Pretendard-Medium";
font-size: 0.8em;
color: white;
`

const Title = styled.p`
font-family: "Pretendard-Medium";
font-size: 1.2em;
`

const SubTitle = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.8em;
color: #474747;
`

