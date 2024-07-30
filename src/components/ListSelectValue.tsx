import React, { useState } from "react";
import styled from "styled-components";

interface PropsType {
    value?: Array<string>
}

export default function ListSelectValue({ value }: PropsType) {

    const [selectedValue, setSelectedValue] = useState(value ? value[0] : undefined)

    return (
        <Container>
            {value && value.map((value) => (
                <Content
                    selected={value === selectedValue}
                    onClick={() => setSelectedValue(value)}
                >
                    {value}
                </Content>
            ))}
        </Container>
    )
}

const Container = styled.div`
display: flex;
gap: 10px;
`

const Content = styled.div<{ selected: boolean }>`
    border: 1px solid ${({ selected }) => (selected ? "#1F62E4" : "#BABABA")};
    border-radius: 20px;
    padding: 8px 25px;
    font-family: "Pretendard-Regular";
    font-size: 0.9rem;
    color: ${({ selected }) => (selected ? "#1F62E4" : "#BABABA")};
    cursor: pointer;
`;