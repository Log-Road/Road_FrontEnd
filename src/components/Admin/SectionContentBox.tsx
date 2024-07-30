import React from "react";
import styled from "styled-components";
import {ReactComponent as Folder} from "../../assets/Folder.svg"
import {ReactComponent as PersonnelManage} from "../../assets/PersonnelManage.svg"
import {ReactComponent as School} from "../../assets/School.svg"

interface PropsType {
    imageType?: string;
    text?: string
}

export default function SectionContentBox({imageType, text} : PropsType) {

    let iconComponent;

    switch(imageType) {
        case "folder" :
            iconComponent = <Folder/>; break;
        case "personnel" :
            iconComponent = <PersonnelManage/>; break;
        case "school" :
            iconComponent = <School/>; break;
    }

    return (
        <Container>
            <ImageBox>{iconComponent}</ImageBox>
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
width: 6vw;
padding: 12px;
background-color: #D5E3FF;
border-radius: 20px;
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
`

const ImageBox = styled.div`
width: 50px;
height: 50px;
background-color: #1E59CC;
border-radius: 100px;
padding: 10px;
`

const Text = styled.p`
font-family: "Pretendard-Medium";
font-size: 0.8rem;
color: #1E59CC;
`