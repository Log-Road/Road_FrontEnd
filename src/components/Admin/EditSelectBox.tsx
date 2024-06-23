import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDownModal } from "../../assets/ArrowDownModal.svg"

interface PropsType {
    label?: string
    option?: Array<string | number>
}

export default function SelectBox({ label, option = [] }: PropsType) {

    const [open, setOpen] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<string | number>("재학중")

    const handleOptionClick = (value: string | number) => {
        setSelectedValue(value)
        setOpen(false)
    }

    return (
        <Container>
            <SelectedWrap onClick={() => setOpen(!open)}>
                <SelectedValue>{selectedValue}</SelectedValue>
                <ArrowDownModal />
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
`

const SelectedWrap = styled.div`
display: flex;
padding: 12px 20px;
gap: 10px;
justify-content: space-between;
align-items: center;
border-radius: 8px;
border: 1px solid #D1D1D1;
`

const OptionWrap = styled.div`
position: absolute;
top: calc(100% + 4px);
width: 100%;
border-radius: 8px;
overflow: hidden;
border: 1px solid #e7e7e7;

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
font-family: "Pretendard-Regular";
font-size: 90%;
color: #5E5E5E;
`

const SelectedValue = styled.p`
font-family: "Pretnedard-Semibold";
font-size: 14px;
`