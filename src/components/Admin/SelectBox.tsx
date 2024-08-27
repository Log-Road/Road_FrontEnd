import React, { useState } from "react";
import styled from "styled-components";
import { ArrowDown } from "../../assets/Admin";
import { SelectValueType } from "../../models/Admin"

export default function SelectBox({ name, id, text, placeholder, options }: SelectValueType) {

    const [selectedValue, setSelectedValue] = useState()
    const [openOptions, setOpenOptions] = useState(false)

    const clickOptions = () => {}

    return (
        <Container>
            <Label>{text}</Label>
            <SelectWrap onClick={() => setOpenOptions(!openOptions)}>
                <SelectText>{placeholder}</SelectText>
                <ArrowDown />
            </SelectWrap>

            {openOptions &&
                <OptionWrap onClick={clickOptions}>
                    
                    {options && options.map((value, index) => (
                        <OptionBox key={index}>
                            <InnerText>{value}</InnerText>
                        </OptionBox>
                    ))}

                </OptionWrap>
            }
        </Container >
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
position: relative;

@media screen and (min-width: 1520px){
    width: 200px;
}
`

const SelectWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 4px 8px;
background-color: #F5F5F5;
border-radius: 4px;
`

const OptionWrap = styled.div`
position: absolute;
top: 70px;
display: flex;
flex-direction: column;
width: 100%;
background-color: #ffffff;
border: 1px solid #D1D1D1;
border-radius: 4px;
z-index: 100;

:hover {
 background-color: #f5f5f5;
}
`

const OptionBox = styled.div`
padding: 10px;
`

const Label = styled.p`
font-family: "Pretendard-Medium";
font-size: 14px;
color: #474747;
`

const SelectText = styled.p`
font-family: "Pretendard-Semibold";
font-size: 14px;
color: #5E5E5E;
`

const InnerText = styled.p`
padding: 8px;
font-family: "Pretendard-Semibold";
font-size: 14px;
color: #5E5E5E;
`