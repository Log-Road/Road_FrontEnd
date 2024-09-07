import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer"
import Logo from "../assets/Logo.svg"
import ArrowRight from "../assets/ArrowRight.svg"
import RenderingImg from "../assets/RenderingImg.png"
import { useNavigate } from "react-router-dom";



export default function Rendering() {

    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Content>
                    <InfoWrap>
                        <LogoIcon src={Logo} />
                        <Wrap>
                            <Title>기록을 남기는 길<br />프로젝트의 발자취를 남기는 일</Title>
                            <SubTitle>DSM의 프로젝트를 이곳에서 보관하고 관리해보세요</SubTitle>
                        </Wrap>
                        <Wrap>
                            <Button>시작하기</Button>
                            <LinkWrap>
                                <LinkText onClick={() => navigate("/MainTeacher")}>학생 / 교사가 아니신가요? 프로젝트 둘러보기</LinkText>
                                <ArrowRightIcon src={ArrowRight} />
                            </LinkWrap>
                        </Wrap>
                    </InfoWrap>
                    <RenderingIcon src={RenderingImg} />
                </Content>
                <Footer />
            </Container>
        </>
    )
}

const Container = styled.div`
width: 100vw;
height: 85vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Content = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
`

const InfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 5vh;
`

const Wrap = styled.div`
display: flex;
flex-direction: column;
gap: 0.5vw;
`

const Button = styled.div`
width: 10vw;
padding: 0.5vw;
background-color: #2D37EB;
border-radius: 20px;
display: flex;
justify-content: center;
font-family: "Pretendard-SemiBold";
font-size: 100%;
color: white;
`

const LinkWrap = styled.div`
display: flex;
align-items: center;
gap: 0.1vw;
`

const Title = styled.p`
font-family: "Pretendard-SemiBold";
font-size: 240%;
`

const SubTitle = styled.p`
font-family: "Pretendard-Regular";
font-size: 110%;
color: #8C8C8C;
`

const LinkText = styled.p`
font-family: "Pretendard-Regular";
font-size: 90%;
color: #8C8C8C;
`

const LogoIcon = styled.img`
width: 9.5vw;
height: auto;
`

const ArrowRightIcon = styled.img`
width: 1.2vw;
`

const RenderingIcon = styled.img`
width: 40%;
`