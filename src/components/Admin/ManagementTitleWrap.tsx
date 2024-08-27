import React from "react";
import styled from "styled-components";
import DocumentButton from "../../components/Admin/DocumentButton";
import { Plus, Exchange } from "../../assets/Admin";

export default function ManagementTitleWrap() {

    return (
        <Container>
            <TitleAndInfo>
                <Title>인원 정보 관리</Title>
                <SubInfo>학생 정보를 편집하고 관리할 수 있어요</SubInfo>
            </TitleAndInfo>
            <TitleAndInfo>
                <DocumentButton icon={Plus} text="인원 문서로 추가하기" />
                <DocumentButton icon={Exchange} text="인원 문서로 수정하기" />
            </TitleAndInfo>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
`

const TitleAndInfo = styled.div`
display: flex;
align-items: flex-end;
gap: 10px;
`

const Title = styled.p`
font-family: "Pretendard-Semibold";
font-size: 28px;
`

const SubInfo = styled.p`
font-family: "Pretendard-Semibold";
font-size: 14px;
color: #8C8C8C;

@media screen and (max-width:1220px) {
    display: none;
}
`