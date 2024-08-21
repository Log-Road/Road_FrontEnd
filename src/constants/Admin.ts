import { SelectValueType } from "../models/Admin"

export const SelectValue: SelectValueType[] = [
    {
        name: "Grade Select",
        id: "grade",
        text: "학년",
        placeholder: "학년 선택하기",
        options: [1, 2, 3]
    },
    {
        name: "Class Select",
        id: "class",
        text: "반",
        placeholder: "반 선택하기",
        options: [1, 2, 3, 4]
    },
    {
        name: "State Select",
        id: "state",
        text: "상태",
        placeholder: "상태 선택하기",
        options: ["재학생", "졸업생", "유급", "전학", "휴학", "자퇴"]
    },
]