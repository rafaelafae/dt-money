import { useContextSelector } from "use-context-selector";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionContext } from "../../contexts/TransactionsContext";

import { amountFormatter, dateFormatter } from "../../utils/formatter";

import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {

    const transactions = useContextSelector(TransactionContext, (context) => {
        return context.transactions;
    });

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm />

                <TransactionsTable>

                    <tbody>

                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td>{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.type === "outcome" && "-"}
                                            {" "}
                                            {amountFormatter.format(transaction.amount)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.created_at))}</td>
                                </tr>
                            )
                        })}

                    </tbody>

                </TransactionsTable>

            </TransactionsContainer>
        </div>
    )
}