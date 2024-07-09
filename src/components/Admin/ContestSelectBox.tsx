import React from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/Check.svg";

interface PropsType {
    onClick?: () => void
    contestName?: string;
    selected?: boolean;
}

export default function ContestSelectBox({ onClick, contestName, selected }: PropsType) {
    return (
        <Container selected={selected} onClick={onClick}>
            <Text selected={selected}>{contestName}</Text>
            <StyledCheck selected={selected} />
        </Container>
    );
}

const Container = styled.div<{ selected?: boolean }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    background-color: ${({ selected }) => (selected ? "#EFF4FF" : "white")};
    border: 1px solid ${({ selected }) => (selected ? "#1F62E4" : "#BABABA")};
    border-radius: 12px;
`;

const Text = styled.p<{selected?: boolean}>`
    font-family: "Pretendard-Medium";
    font-size: 0.85em;
    color: ${({selected}) => (selected ? "#1F62E4" : "#8C8C8C")}
`;

const StyledCheck = styled(Check)<{ selected?: boolean }>`
    path {
        fill: ${({ selected }) => (selected ? "#1F62E4" : "#8C8C8C")};
    }
`;