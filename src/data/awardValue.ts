export type AwardValue = {
    image?: string,
    projectName?: string,
    likeCount?: number,
    scale?: string,
    teamName?: string,
    memberName?: Array<string>,
    introduction?: string
};

export const awardValue : AwardValue[] = [
    {
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaYOeHMAp6DCfiTm-WCTgMRnaSMdBPCWMCQ&usqp=CAU",
            projectName : "이것은 프로젝트 이름",
            likeCount : 100,
            scale : "동아리", //개인, 팀, 동아리
            teamName : "Log",
            memberName : ["홍길동", "신사임당", "홍길동", "전봉준", "강아지", "멍멍이"],
            introduction : "아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리"
    },
    {
        image : "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/MouquGMlfg9ZfYMY0EiYQ79Pq7E.jpg",
        projectName : "프로젝트 이름이요",
        likeCount : 1000,
        scale : "동아리", //개인, 팀, 동아리
        teamName : "Log",
        memberName : ["홍길동", "신사임당", "홍길동"],
        introduction : "아슬라 별하 이플 함초롱하다 사과 우리는 아리아 소솜 그루잠 여우비 달볓 우리는 노트북 나래 아슬라 감또개 아련 여우비 도담도담 컴퓨터 가온누리 나비잠 사과 다솜 별하 나래 도서 아련 아리아 다솜 도서 가온누리 나래 산들림 별빛 아름드리 곰다시 미리내 감사합니다 비나리"
},
]