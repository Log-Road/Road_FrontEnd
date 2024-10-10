import * as S from "./style"
import { X, Writer } from "../../../assets/Admin/index"
import CheckButton from "../CheckButton";
import { useState } from "react";
import { modifyClub } from "../../../utils/api/admin/club/modifyClub";

interface PropsType {
  clubId?: number
}

export default function EditClub({clubId = 0}: PropsType) {

  const [clubName, setClubName] = useState<string>("")

  const handleChangeInput = (text: string) => {
    setClubName(text)
  }

  const handleClickEdit = () => {
    modifyClub(clubId)
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
          <S.Title>동아리 명을 수정해주세요</S.Title>
          <S.Info>수정할 동아리 이름을 작성해주세요</S.Info>
        </S.TextWrap>
        <S.InputWrap>
          <S.Label>동아리명</S.Label>
          <S.Input
            placeholder="동아리 이름을 작성해주세요"
            onChange={(e) => handleChangeInput(e.target.value)}
          />
        </S.InputWrap>
        <CheckButton
          text="수정하기"
          width="100%"
          onClick={() => handleClickEdit}
        />
      </S.Content>
    </S.Container>
  )
}