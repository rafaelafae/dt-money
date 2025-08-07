import { useContextSelector } from "use-context-selector";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { TransactionContext } from "../../../../contexts/TransactionsContext";
import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>


export function SearchForm() {

    const fetchTransactions = useContextSelector(TransactionContext, (context) => {
        return context.fetchTransactions;
    })

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInput) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>

            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>

        </SearchFormContainer>
    )
}