import { useContext } from 'react';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import totalcomeImg from '../../assets/Total.svg'
import { TransactionsContext } from '../../TransactionsContext';


import { Container } from "./style";

export function Summary(){

    const {transactions} = useContext(TransactionsContext);

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="color-background">
                <header>
                    <p>Total</p>
                    <img src={totalcomeImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}