import React from "react";
import styled from "styled-components";
import { ReactComponent as Accept } from "../../../assets/Accept.svg"

export default function ProjectApproveBox() {
    return (
        <Container>
            <TopWrap>
                <Accept />
                <Text>프로젝트 승인 되도 되는지 약간 그런 문구 들어가는 곳 문구 추천받아요</Text>
            </TopWrap>
            <Button>승인하기</Button>
        </Container>
    )
}

const Container = styled.div`
width: 14vw;
padding: 25px 20px;
background-color: white;
border-radius: 8px;
display: flex;
flex-direction: column;
gap: 50px;
box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
`

const TopWrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

const Text = styled.p`
font-family: "Pretendard-Regular";
font-size: 1rem;
line-height: 140%;
color: #474747;
`

const Button = styled.button`
padding: 8px;
background-color: #1F62E4;
border: none;
border-radius: 8px;
font-family: "Pretendard-Medium";
font-size: 1rem;
color: white;
`