import styled from "styled-components";

export const Container = styled.div`
width: 400px;
padding: 20px 30px 40px;
border-radius: 20px;
background-color: #fff;
display: flex;
flex-direction: column;
gap: 12px;
`

export const CancelWrap = styled.div`
display: flex;
justify-content: flex-end;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

export const WriterWrap = styled.div`
width: 70px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: #D5E3FF;
`

export const TextWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

export const InputWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

export const Input = styled.input`
width: 100%;
padding: 12px 16px;
border: 1px solid #D1D1D1;
border-radius: 12px;

::placeholder {
  color: #BABABA;
}
`

export const Title = styled.p`
font-family: "Pretendard-Semi";
font-size: 24px;
`

export const Info = styled.p`
font-family: "Pretendard-Medium";
font-size: 16px;
color: #5E5E5E;
`

export const Label = styled.p`
font-family: "Pretendard-Regular";
font-size: 14px;
color: #5E5E5E;
`