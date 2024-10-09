import styled from "styled-components";
import DocumentButton from "../../components/Admin/DocumentButton";
import { Plus, Exchange } from "../../assets/Admin";

interface ButtonConfig {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    text: string;
}

interface ButtonConfigs {
    [key: string]: ButtonConfig[];
}

interface PropsType {
    id: string;
    title: string;
    info: string;
    onClick: () => void;
}

const buttonConfigs: ButtonConfigs = {
    person: [
        { icon: Plus, text: "인원 문서로 추가하기" },
        { icon: Exchange, text: "인원 문서로 수정하기" },
    ],
    contest: [{ icon: Plus, text: "대회 추가하기" }],
    club: [{ icon: Plus, text: "동아리 추가하기" }],
};

export default function ManagementTitleWrap({ id, title, info, onClick }: PropsType) {
    const renderDocumentButtons = () => {
        const buttons = buttonConfigs[id] || [];
        return buttons.map(({ icon, text }, index) => (
            <DocumentButton key={index} icon={icon} text={text} onClick={onClick} />
        ));
    };

    return (
        <Container>
            <TitleAndInfo>
                <Title>{title}</Title>
                <SubInfo>{info}</SubInfo>
            </TitleAndInfo>
            <TitleAndInfo>
                {renderDocumentButtons()}
            </TitleAndInfo>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TitleAndInfo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
`;

const Title = styled.p`
    font-family: "Pretendard-Semibold";
    font-size: 28px;
`;

const SubInfo = styled.p`
    font-family: "Pretendard-Medium";
    font-size: 14px;
    color: #8c8c8c;

    @media screen and (max-width: 1220px) {
        display: none;
    }
`;
