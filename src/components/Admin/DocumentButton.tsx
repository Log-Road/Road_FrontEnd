import React from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../assets/Plus.svg"
import { ReactComponent as Exchange} from "../../assets/Exchange.svg"

interface PropsType {
    active?: string
}

export default function DocumentButton({active} : PropsType) {
    return (
        <Container>
            {active === "추가"? ( <Plus/>) : (<Exchange/>)}
            <Text>인원 문서로 {active}하기</Text>
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