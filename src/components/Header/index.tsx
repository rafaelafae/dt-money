import * as Dialog from "@radix-ui/react-dialog";
import logoImg from '../../assets/logo-ignite.svg'

import { NewTransactionModal } from "../NewTransactionModal";

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={logoImg} alt="" />
                    <strong> DT Money</strong>
                </div>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />

                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>

    )
}