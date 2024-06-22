export type ContestInfo = {
    state?: string
    schedule?: string
    contestName?: string
};

export const contestInfo : ContestInfo[] = [
    {state: "시상대기", schedule: "2024.04.05~2024.04.26", contestName: "안녕하세요dfghjkdfghj"},
    {state: "시상대기", schedule: "2024.04.05~2024.04.26", contestName: "안녕하세요"},
    {state: "시상완료", schedule: "2024.04.05~2024.04.26", contestName: "키키키"},
    {state: "진행중", schedule: "2024.04.05~2024.04.26", contestName: "이것이"},
    {state: "시상완료", schedule: "2024.04.05~2024.04.26", contestName: "퍼블리싱"},
    {state: "진행중", schedule: "2024.04.05~2024.04.26", contestName: "밤을새고있다"},
    {state: "시상대기", schedule: "2024.04.05~2024.04.26", contestName: "안녕하세요"},
]
