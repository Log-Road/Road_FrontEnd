import { SelectValueType, ManagementTableValueType, UserDataType } from "../models/Admin"

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

export const PersonTableValue: ManagementTableValueType[] = [
    {
        name: "Person Management Table",
        id: "person",
        label: ["학년", "반", "번호", "이름", "상태"],
    }
]

export const ClubTableValue: ManagementTableValueType[] = [
    {
        name: "Club Management Table",
        id: "club",
        label: ["현상태", "동아리명"],
    }
]

export const ContestTableValue: ManagementTableValueType[] = [
    {
        name: "Contest Management Table",
        id: "contest",
        label: ["일정", "진행상황"],
    }
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