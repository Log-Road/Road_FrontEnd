import React from "react";
import styled from "styled-components";
import {ReactComponent as DocumentEdit} from "../assets/DocumentEdit.svg"

export default function ModalEditIcon() {
    return (
        <Container>
            <DocumentEdit/>
        </Container>
    )
}

const Container = styled.div`
width: 60px;
height:60px;
background-color: #D5E3FF;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
`