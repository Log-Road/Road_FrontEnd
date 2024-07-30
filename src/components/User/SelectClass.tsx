import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "../../assets/User/ArrowDown.svg";

/**
 *
 * @returns 학년, 반, 번호 선택
 */

interface Props {
  name?: string;
}

const GradeOptions = [
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
];

export default function SelectClass({ name }: Props) {
  const [studentState, setStudentState] = useState<number>(1);
  const [showOption, setShowOption] = useState<boolean>(false);

  const SelectChange = (selectedOption: number): void => {
    setStudentState(selectedOption);
    setShowOption(false);
  };
  return (
    <>
      <SelectBox>
        <CheckedValue onClick={() => setShowOption(!showOption)}>
          {studentState}
        </CheckedValue>
        {showOption && (
          <SelectWrap>
            {GradeOptions.map((value, index) => (
              <SelectContent
                key={index}
                onClick={() => SelectChange(value.name)}
              >
                {value.name}
              </SelectContent>
            ))}
          </SelectWrap>
        )}
        {showOption ? <DownArrow /> : <DownArrow />}
      </SelectBox>
    </>
  );
}

const SelectBox = styled.div`
  width: 7vw;
  height: 6vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CheckedValue = styled.div`
  width: 7vw;
  height: 6vh;
  display: flex;
  padding: 16px 24px;
  background-color: White;
  border: 0.06em solid #d1d1d1;
  border-radius: 0.75em;
  font-family: "Pretendard-Regular";
  font-size: 1em;
  line-height: 140%;
  outline: none;
  appearance: none;

  &:focus {
    background-color: #fdfdfd;
    border: 0.12em solid #d1d1d1;
  }
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 9px 18px 0px #060f2728;
`;

const SelectContent = styled.div`
  width: 7vw;
  height: 48px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  font-family: "Pretendard-Regular";

  &:hover {
    background-color: #d1d1d1;
  }
`;