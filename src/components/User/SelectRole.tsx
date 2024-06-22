import React from "react";
import styled from "styled-components";

interface Props {
  Role: string;
  id?: string;
  onClick?: (id: string) => void;
  selected?: boolean;
}

export default function SelectRole({ Role, id, onClick, selected }: Props) {
  return (
    <SelectRoleBtn
      id={id}
      onClick={() => onClick && id && onClick(id)}
      selected={selected}
    >
      {Role}
    </SelectRoleBtn>
  );
}

const SelectRoleBtn = styled.button<{ selected?: boolean }>`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 18px;
  width: 22vw;
  height: 5vh;
  color: #2b4cfc;
  background-color: ${({ selected }) => (selected ? "#E9F0FF" : "transparent")};
  border: 1px solid #2b4cfc;
  border-radius: 8px;
  cursor: pointer;

  &:active {
    background-color: #E9F0FF;
  }
`;
