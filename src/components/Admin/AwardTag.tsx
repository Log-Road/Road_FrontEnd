import styled from "styled-components"
import { Cancel } from "../../assets/Admin";

interface PropsType {
  awardName?: string,
  count?: number
}

const AwardTag = ({ awardName, count }: PropsType) => {
  return (
    <Container>
      <TextWrap>
        <Text>{awardName}</Text>
        <Text>{`(${count})`}</Text>
      </TextWrap>
      <Cancel />
    </Container>
  )
}

export default AwardTag;

const Container = styled.div`
display: flex;
gap: 12px;
padding: 8px 16px;
border: 1px solid #BABABA;
border-radius: 12px;
`

const TextWrap = styled.div`
display: flex;
gap: 4px;
`

const Text = styled.div`
font-family: "Pretendard-Medium";
font-size: 14px;
color:#757575;;
`