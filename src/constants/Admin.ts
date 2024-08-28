import { SelectValueType, UserDataType, ContestDataType } from "../models/Admin"

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

export const UserData: UserDataType[] = [
    {
        person_id : 1,
        grade : 1,
        class : 2,
        number : 10,
        name : "홍길동",
        status : "ENROLL"
      }, 
      {
        person_id : 2,
        grade : 2,
        class : 1,
        number : 12,
        name : "홍길서",
        status : "ENROLL"
      }, 
      {
        person_id : 3,
        grade : 3,
        class : 2,
        number : 14,
        name : "홍길남",
        status : "ENROLL"
      }
]

export const ContestData: ContestDataType[] = [
    {
        name: "대마고 대회",
        status: "시상대기",
        date: "2024-08-19 ~ 2024-08-19"
    },
    {
        name: "대덕소프트웨어마이스터고등학교대회",
        status: "시상대기",
        date: "2024-08-19 ~ 2024-08-19"
    },
    {
        name: "교내해커톤 2024",
        status: "시상대기",
        date: "2024-08-19 ~ 2024-08-19"
    },
]