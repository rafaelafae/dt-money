import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { useSummary } from '../../hooks/useSummary';
import { amountFormatter } from '../../utils/formatter';

import { SummaryCard, SummaryCardHeader, SummaryContainer } from "./styles";

export function Summary() {

    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <SummaryCardHeader color="income">
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} />
                </SummaryCardHeader>

                <strong>{amountFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <SummaryCardHeader color="outcome">
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} />
                </SummaryCardHeader>

                <strong>{amountFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <SummaryCardHeader color="total">
                    <span>Total</span>
                    <CurrencyDollar size={32} />
                </SummaryCardHeader>

                <strong>{amountFormatter.format(summary.total)}</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}