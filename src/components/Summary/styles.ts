import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
`;

interface SummaryCardProps {
    variant?: 'green'
};

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${(props) => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;
    
    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }
    
    ${(props) => props.variant === 'green' && css`
        background: ${props.theme["green-700"]};
        `}
        
`;

interface SummaryCardHeaderProps {
    color: "income" | "outcome" | "total"
};

export const SummaryCardHeader = styled.header<SummaryCardHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

    svg {
        color: ${(props) => props.color === "income" ? props.theme["green-300"] : (props.color === "outcome" ? props.theme["red-300"] : props.theme.white)};
    }
`;