import React from "react"
import styled from "styled-components"
import Logo from "../assets/LogoDoubleColor.svg"

export default function Footer() {

    const Data = [
        { title: "DSM을 위한 프로젝트 저장소", text: "PM 양윤호 | BackEnd 유나현 | FrontEnd 김호선 박예빈 임다영 | Design 임다영" },
        { title: "주소", text: "대전광역시 유성구 가정북로 76" },
        { title: "문의", text: "dsm.log@dsm.hs.kr" },
        { title: "소셜 미디어 링크", text: "이것은 소셜 미디어 링크입니다 알아보십시오" }
    ]

    return (
        <Container>
            <Content>
                <LogoIcon src={Logo} alt="logo" />
                <ItemWrap>
                    {Data.map((value) => (
                        <Item>
                            <Title>{value.title}</Title>
                            <Text>{value.text}</Text>
                        </Item>
                        )
                    )}
                </ItemWrap>
            </Content>
        </Container>
    )
}
const Container = styled.div`
width: 100vw;
position: fixed;
left: 0;
bottom: 0;
background-color: #202020;
padding: 2.9vh 3.12vw 3.9vh;
`

const Content = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
gap: 1.8vh;
`

const ItemWrap = styled.div`
display: flex;
gap: 3vw;
`

const Item = styled.div`
display: flex;
flex-direction: column;
gap: 0.4vh
`

const Title = styled.p`
font-family: "Pretendard-Medium";
font-size: 100%;
color: #A3A3A3;
`

const Text = styled.p`
font-family: "Pretendard-Regular";
font-size: 90%;
color: #E8E8E8;
`

const LogoIcon = styled.img`
width: 90px;
height: 30px;
`