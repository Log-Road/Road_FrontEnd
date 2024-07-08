import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BackGround from "../../assets/BackGround.png"
import {ReactComponent as ProjectState} from "../../assets/ProjectState.svg"
import ProjectApproveBox from "../../components/Admin/ProjectWriteCheckBox/ProjectApproveBox";
import ProjectRejectBox from "../../components/Admin/ProjectWriteCheckBox/ProjectRejectBox";
import ProjectRejectCancelBox from "../../components/Admin/ProjectWriteCheckBox/ProjectRejectCancelBox";
import ProjectDelete from "../../components/Admin/ProjectWriteCheckBox/ProjectDeleteBox"

export default function ProjectAcceptOrReject() {
    return (
        <>
            <Header />
            <Container>
                <BackgroundImage>
                    <Image src={BackGround} />
                </BackgroundImage>

                <ContentWrap>
                    <WriteBox></WriteBox>
                    <AcceptOrRejectButtonWrap>
                        <StateBox>
                            <ProjectState width={24} height={24}/>
                            <StateText>승인대기</StateText>
                        </StateBox>
                        <ProjectApproveBox/>
                        <ProjectRejectBox/>
                        <ProjectRejectCancelBox/>
                        <ProjectDelete/>
                    </AcceptOrRejectButtonWrap>
                </ContentWrap>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 70px;
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

const ContentWrap = styled.div`
width: 70vw;
display: flex;
justify-content: space-between;
`

const WriteBox = styled.div`
width: 52vw;
height: 1000px;
//background-color: red;
`

const AcceptOrRejectButtonWrap = styled.div`
width: 15vw;
display: flex;
flex-direction: column;
gap: 15px;
`

const StateBox = styled.div`
width: 8vw;
padding: 10px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 20px;
font-family: "Pretendard-Medium";
font-size: 1em;
color: #5E5E5E;
`

const StateText = styled.p``