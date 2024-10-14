import styled from "styled-components";
import Background from "../../../assets/Admin/Background.svg"
import CheckButton from "../../../components/Admin/CheckButton";

const ContestInfoCheck = () => {

  const handleClickButton = () => { }

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <TitleWrap>
          <Title>대회 정보 확인하기</Title>
          <SubInfo>작성하신 대회 정보를 확인해주세요.<br />등록 버튼을 누른 직후 대회가 진행됩니다.</SubInfo>
        </TitleWrap>

        <InputListContainer>
          <ProjectNameAndDateWrap>
            <ProjectName>이것은 프로젝트 이름</ProjectName>
            <Info>2024.04.05 ~ 2024.04.12</Info>
          </ProjectNameAndDateWrap>

          <TargetAndPlaceWrap>
            <RowWrap>
              <AccentText>대상</AccentText>
              <Info>대덕소프트웨어마이스터고등학교 전체 학생</Info>
            </RowWrap>
            <RowWrap>
              <AccentText>장소</AccentText>
              <Info>대덕소프트웨어마이스터고등학교</Info>
            </RowWrap>
          </TargetAndPlaceWrap>

          <TargetAndPlaceWrap>
            <AccentText>대회 목적</AccentText>
            <Info>아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리</Info>
          </TargetAndPlaceWrap>

          <AwardWrap>
            <Award>시상할 상 목록</Award>
            <TagWrap>
              <Tag>금상</Tag>
            </TagWrap>
          </AwardWrap>
        </InputListContainer>

        <CheckButton text="확인" width="240px" onClick={handleClickButton} />
      </Content>
    </Container>
  )
}

export default ContestInfoCheck


const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F6F6F6;
height: 100vh;
`

const BackgroundImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 55%;
background-image: url(${Background});
background-size: cover;
background-position: center;
z-index: 0;
`

const Content = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 80px 0;
gap: 30px;
z-index: 1;
`

const TitleWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
`

const InputListContainer = styled.div`
display: flex;
flex-direction: column;
padding: 50px 70px;
gap: 30px;
background-color: #ffffff;
border-radius: 20px;
`

const ProjectNameAndDateWrap = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
`

const TargetAndPlaceWrap = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const RowWrap = styled.div`
display: flex;
gap: 12px;
align-items: center;
`

const AwardWrap = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const TagWrap = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`

const Tag = styled.span`
padding: 8px 12px;
border: 1px solid #BABABA;
border-radius: 12px;
font-family: "Pretendard-Regular";
font-size: 16px;
color: #757575;
`

const Title = styled.p`
font-family: "Pretendard-Semibold";
font-size: 32px;
color: #fff;
`

const SubInfo = styled.p`
font-family: "Pretendard-Medium";
font-size: 12px;
line-height: 160%;
color: #fff;
`

const ProjectName = styled.p`
font-family: "Pretendard-Semi";
font-size: 24px;
`

const AccentText = styled.p`
font-family: "Pretendard-medium";
font-size: 16px;
color: #757575;
`

const Info = styled.p`
font-family: "Pretendard-Regular";
font-size: 14px;
color: #757575;
line-height: 160%;
`

const Award = styled.p`
font-family: "Pretendard-semi";
font-size: 16px;
`