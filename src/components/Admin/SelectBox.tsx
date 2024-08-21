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
            <Title>{text}</Title>
            <SelectWrap onClick={() => setOpenOptions(!openOptions)}>
                <SelectText>{placeholder}</SelectText>
                <ArrowDown />
            </SelectWrap>

            {openOptions &&
                <OptionWrap onClick={clickOptions}>
                    
                    {options && options.map((value, index) => (
                        <OptionBox key={index}>
                            <SelectText>{value}</SelectText>
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
`

const SelectWrap = styled.div`
display: flex;
align-items: center;
gap: 50px;
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
padding: 8px 8px 16px;
border-radius: 4px;
background-color: #F5F5F5;
`

const OptionBox = styled.div`
padding: 10px;
`

const Title = styled.p`
font-family: "Pretendard-Medium";
font-size: 14px;
color: #474747;
`

const SelectText = styled.p`
font-family: "Pretendard-Semibold";
font-size: 14px;
color: #5E5E5E;
`