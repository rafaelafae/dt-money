import { useCallback, useEffect, useState, type ReactNode } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface Transaction {
    id: number;
    description: string;
    type: "income" | "outcome";
    amount: number;
    category: string;
    created_at: string;
};

interface CreateTransactionInput {
    description: string,
    amount: number,
    category: string,
    type: "income" | "outcome",
};

interface TrantractionsContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
};

interface TransactionsProviderProps {
    children: ReactNode;
};


// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext({} as TrantractionsContextType);


export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get("transactions", {
            params: {
                _sort: "created_at",
                _order: "desc",
                q: query,
            }
        })

        setTransactions(response.data);
    }, [])

    const createTransaction = useCallback(
        async (data: CreateTransactionInput) => {
            const { description, amount, category, type } = data;

            const response = await api.post("transactions", {
                description,
                amount,
                category,
                type,
                created_at: new Date(),
            });

            setTransactions(state => [response.data, ...state])
        }, [])

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])

    return (
        <TransactionContext.Provider
            value={{ transactions, fetchTransactions, createTransaction }}
        >
            {children}
        </TransactionContext.Provider>
    )
}