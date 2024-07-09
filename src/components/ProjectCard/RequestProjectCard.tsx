import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/Heart.svg"

export default function RequestProjectCard() {

    const [heartClick, setHeartClick] = useState<boolean>(false)

    return (
        <Container >
            <Image src="https://edcheee.co.kr/wp-content/uploads/2021/07/%EB%9D%BC%EC%9D%B4%EC%96%B8%EC%B6%98%EC%8B%9D%EC%9D%B4.png" />

            <ContentWrap>
                <RequestTag>승인대기</RequestTag>
                <TextWrap>
                    <ProjectName>아슬라 별하 이플 함초롱하다</ProjectName>
                    <Explain>아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리 포도 바람꽃 별하 가온해 사과 산들림 나래 컴퓨터 이플 바람꽃.</Explain>
                </TextWrap>

                <TeamWrap>
                    <TeamType>동아리 Log</TeamType>
                    <TeamMemberWrap>
                        <MemberName>홍길동</MemberName>
                    </TeamMemberWrap>
                </TeamWrap>

                <DateAndLikeCount>
                    <ThinText>2023.03.25</ThinText>
                    <LikeWrap>
                        <Heart
                            width={16}
                            height={16}
                            onClick={() => setHeartClick(!heartClick)}
                            fill={heartClick ? "#92B6FF" : "#D1D1D1"}
                        />
                        <ThinText>0</ThinText>
                    </LikeWrap>
                </DateAndLikeCount>

            </ContentWrap>
        </Container>
    )
}

const Container = styled.div<{ selected?: boolean }>`
position: relative;
width: 18vw;
border-radius: 16px;
overflow: hidden;
outline: 1.5px solid ${({ selected }) => (selected ? "#1F62E4" : "#D1D1D1")};
`

const ContentWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px 10px 15px 10px;
`

const TextWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 7px;
`

const RequestTag = styled.div`
border-radius: 20px;
background-color: #E8E8E8;
width: 70px;
padding: 2px;
font-family: "Pretendard-Regular";
font-size: 0.8em;
color: #5E5E5E;
display: flex;
justify-content: center;
`

const TeamWrap = styled.div`
display: flex;
gap: 7px;
`

const TeamMemberWrap = styled.div`
display: flex;
flex-wrap: wrap;
gap: 7px;
`

const DateAndLikeCount = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const LikeWrap = styled.div`
display: flex;
align-items: center;
gap: 7px;
`

const ProjectName = styled.p`
font-family: "Pretendard-Medium";
font-size: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
`

const Explain = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.8em;
line-height: 180%; 
text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

const TeamType = styled.p`
font-family: "Pretendard-Medium";
font-size: 0.85em;
color: #757575;
`

const MemberName = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.8em;
color: #757575;
`

const ThinText = styled.p`
font-family: "Pretendard-Regular";
font-size: 0.7em;
color: #A3A3A3;
`

const Image = styled.img`
width: 100%;
height: 45%;
`