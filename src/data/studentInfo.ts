export type StudentInfo = {
    grade: number
    class: number
    studentId: number
    name: string
    state: string
};

export const studentInfo : StudentInfo[] = [
    {grade: 1, class: 1, studentId: 1, name: "임다영", state: "재학중"},
    {grade: 1, class: 2, studentId: 1, name: "임다영", state: "재학중"},
    {grade: 1, class: 3, studentId: 1, name: "임다영", state: "재학중"},
    {grade: 1, class: 4, studentId: 1, name: "임다영", state: "재학중"},
    {grade: 1, class: 1, studentId: 2, name: "임다영", state: "자퇴"}
]