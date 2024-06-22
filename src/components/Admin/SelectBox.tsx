import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg"

interface PropsType {
    label?: string
    option?: Array<string | number>
}

export default function SelectBox({ label, option = [] }: PropsType) {

    const [open, setOpen] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<string | number>(`${label} 선택하기`)

    const handleOptionClick = (value: string | number) => {
        setSelectedValue(value)
        setOpen(false)
    }

    return (
        <Container>
            <Label>{label}</Label>
            <SelectedWrap onClick={() => setOpen(!open)}>
                <SelectedValue>{selectedValue}</SelectedValue>
                <ArrowDown />
            </SelectedWrap>

            {open &&
                <OptionWrap>
                    {option.map((value : string | number) => (
                        <OptionContent onClick={(e) => handleOptionClick(value)}>
                            <OptionValue>{value}</OptionValue>
                        </OptionContent>
                    ))}
                </OptionWrap>}

        </Container>
    )
}

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap: 4px;
min-width: 10vw;
`

const SelectedWrap = styled.div`
display: flex;
padding: 5px 15px;
gap: 10px;
justify-content: space-between;
align-items: center;
background-color: #F5F5F5;
border-radius: 8px;
`

const OptionWrap = styled.div`
position: absolute;
top: calc(100% + 4px);
width: 100%;
border-radius: 8px;
overflow: hidden;
border: 1px solid #e7e7e7;
z-index: 100;

:hover {
    background-color: #F9F9F9;
}
`

const OptionContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
background-color: white;
`

const OptionValue = styled.p`
font-family: "Pretnedard-Regular";
font-size: 16px;
color: #6b6b6b;
`

const Label = styled.p`
font-family: "Pretnedard-Medium";
font-size: 14px;
color: #474747;
`

const SelectedValue = styled.p`
font-family: "Pretnedard-Semibold";
font-size: 14px;
color: #5E5E5E;
`