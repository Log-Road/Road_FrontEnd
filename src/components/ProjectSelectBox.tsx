import React from "react";
import styled from "styled-components";
import { ReactComponent as Heart } from "../assets/Heart.svg"
import {awardValue} from "../data/awardValue"

export default function ProjectSelectBox() {

    return (
        <>
            {awardValue.map((value, index) => (
                <Container>
                    <LabelText>금상</LabelText>
                    <ContentBox>
                        <Image src={value.image} />
                        
                        <ProjectInfoWrap>
                            <ProjectName>{value.projectName}</ProjectName>
                            <LikeWrap>
                                <Heart width={20} height={20}/>
                                <LikeCount>{value.likeCount}</LikeCount>
                            </LikeWrap>
                            <ProjectScale>
                                <AccentText>{`동아리(${value.teamName})`}</AccentText>
                                <TeamMemberWrap>
                                    {value.memberName && value.memberName.map((value) => (
                                        <MediumText>{value}</MediumText>
                                    ))}
                                </TeamMemberWrap>
                            </ProjectScale>
                            <MediumText>{value.introduction}</MediumText>
                        </ProjectInfoWrap>
                        
                        <ReadMoreButton>자세히 보러가기</ReadMoreButton>
                    </ContentBox>
                </Container>
            ))}

        </>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 5px;
`

const ContentBox = styled.div`
padding: 25px 20px;
border: 1px solid #BABABA;
border-radius: 20px;
display: flex;
flex-direction: column;
gap: 25px;
`

const Image = styled.img`
width: 100%;
`

const ProjectInfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const LikeWrap = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const ProjectScale = styled.div`
display: flex;
gap: 10px;
`

const TeamMemberWrap = styled.div`
display: flex;
flex-wrap: wrap;
gap: 7px;
`

const ReadMoreButton = styled.button`
width: 100%;
padding: 8px;
border: none;
border-radius: 8px;
background-color: #E8E8E8;
font-family: "Pretendard-Medium";
font-size: 0.8em;
color: #5E5E5E;
`

const LabelText = styled.p`
font-family: "Pretendard-Medium";
font-size: 1em;
color: #8C8C8C;
`

const ProjectName = styled.p`
font-family: "Pretendard-Medium";
font-size: 1.2em;
`

const LikeCount = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.9em;
color: #A3A3A3;
`

const MediumText = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.9em;
color: #757575;
line-height: 180%;
`

const AccentText = styled.p`
font-family: "Pretendard-Regular";
font-size: 1em;
color: #757575;
`