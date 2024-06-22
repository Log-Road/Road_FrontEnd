import React, { useState } from "react";
import styled from "styled-components";

/**
 * 
 * @returns 회원가입 페이지 input
 */

interface Props {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
}

export default function UserInput({ name, type, placeholder, value, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    setIsFocused(false);
    setIsValid(value !== undefined && value.trim() !== '');
  };

  return (
    <>
      <FormBox>
        <StyledLabel isFocused={isFocused} isValid={isValid}>
          {name}
        </StyledLabel>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          isValid={isValid}
        />
        {!isValid && <WarningMessage>{name}을 입력해주세요</WarningMessage>}
      </FormBox>
    </>
  );
}

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 8px 0;
`;

const StyledLabel = styled.label<{ isFocused: boolean; isValid: boolean }>`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: ${({ isFocused, isValid }) =>
    isValid ? (isFocused ? '#2B4CFC' : '#B9B9BC') : '#FF0000'};
  transition: color 0.3s ease;
`;

const StyledInput = styled.input<{ isValid: boolean }>`
  width: 22vw;
  height: 5vh;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: #BABABA;
  border: 1px solid ${({ isValid }) => (isValid ? '#D1D1D1' : '#FF0000')};
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ isValid }) => (isValid ? '#2B4CFC' : '#FF0000')};
    outline: none;
  }
`;

const WarningMessage = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #FF0000;
`;

