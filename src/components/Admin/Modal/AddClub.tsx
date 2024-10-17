import * as S from "./style"
import { X, Writer } from "../../../assets/Admin/index"
import CheckButton from "../CheckButton";
import { useState } from "react";
import { addPersonal } from "../../../utils/api/admin/club/addPersonal";

export default function AddClub() {

  const [clubName, setClubName] = useState<string>("")

  const handleChangeInput = (text: string) => {
    setClubName(text)
  }

  const handleClickAdd = () => {
    console.log(clubName)
    addPersonal(clubName)
  }

  return (
    <S.Container>
      <S.CancelWrap>
        <X />
      </S.CancelWrap>
      <S.Content>
        <S.WriterWrap>
          <Writer />
        </S.WriterWrap>
        <S.TextWrap>
          <S.Title>동아리를 추가해주세요</S.Title>
          <S.Info>새로운 동아리 이름을 작성해주세요</S.Info>
        </S.TextWrap>
        <S.InputWrap>
          <S.Label>동아리명</S.Label>
          <S.Input
            placeholder="동아리 이름을 작성해주세요"
            onChange={(e) => handleChangeInput(e.target.value)}
          />
        </S.InputWrap>
        <CheckButton
          text="추가하기"
          width="100%"
          onClick={handleClickAdd}
        />
      </S.Content>
    </S.Container>
  )
}