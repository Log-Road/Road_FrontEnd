import React, { useState } from "react";
import styled from "styled-components";
import { ThinArrow } from "../../assets/Admin";
import { SelectValueType } from "../../models/Admin"

export default function SelectBox({ text, placeholder, options }: SelectValueType) {

    const [selectedValue, setSelectedValue] = useState()
    const [openOptions, setOpenOptions] = useState(false)

    const clickOptions = () => {}

    return (
        <Container>
            <SelectWrap onClick={() => setOpenOptions(!openOptions)}>
                <SelectText>{placeholder}</SelectText>
                <ThinArrow />
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
width: 180px;
display: flex;
flex-direction: column;
position: relative;
`

const SelectWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px 16px;
background-color: #F2F2F2;
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

const SelectText = styled.p`
font-family: "Pretendard-Regular";
font-size: 13px;
color: #8C8C8C;
`

const InnerText = styled.p`
padding: 8px;
font-family: "Pretendard-Medium";
font-size: 13px;
color: #8C8C8C;
`