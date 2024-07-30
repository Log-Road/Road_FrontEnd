import React from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../assets/Plus.svg"
import { ReactComponent as Exchange} from "../../assets/Exchange.svg"

interface PropsType {
    text?: string
    icon?: string
}

export default function DocumentButton({text, icon} : PropsType) {
    return (
        <Container>
            {icon === "plus"? ( <Plus/>) : (<Exchange/>)}
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
display: flex;
padding: 5px 15px;
align-items: center;
gap: 10px;
border: 1px solid #0047D2;
border-radius: 8px;
`

const Text = styled.p`
font-family: "Pretendard-Semibold";
font-size: 80%;
color: #0047D2;
`