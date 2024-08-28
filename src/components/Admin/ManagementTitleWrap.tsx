import React from "react";
import styled from "styled-components";
import DocumentButton from "../../components/Admin/DocumentButton";
import { Plus, Exchange } from "../../assets/Admin";

interface PropsType {
    id?: string,
    title?: string
    info?: string
}

export default function ManagementTitleWrap({ id, title, info }: PropsType) {

    return (
        <>
            <Container>
                <TitleAndInfo>
                    <Title>{title}</Title>
                    <SubInfo>{info}</SubInfo>
                </TitleAndInfo>
                <TitleAndInfo>
                    {id === "person" && (
                        <>
                            <DocumentButton icon={Plus} text="인원 문서로 추가하기" />
                            <DocumentButton icon={Exchange} text="인원 문서로 수정하기" />
                        </>
                    )}
                    {id === "contest" && (
                        <DocumentButton icon={Plus} text="대회 추가하기" />
                    )}
                </TitleAndInfo>
            </Container>
        </>
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
font-family: "Pretendard-Medium";
font-size: 14px;
color: #8C8C8C;

@media screen and (max-width:1220px) {
    display: none;
}
`