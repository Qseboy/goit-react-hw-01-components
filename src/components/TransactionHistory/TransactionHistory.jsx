import PropTypes from 'prop-types';

import { TransationTable,TransationTableHeader, TransationTableTr, TransationTableTh, TransationTableTd, TransationTableBody } from './transactionHistory.styled';

export default function TransactionHistory({items}) {
    return <TransationTable>
        <TransationTableHeader>
            <TransationTableTr>
                <TransationTableTh>Type</TransationTableTh>
                <TransationTableTh>Amount</TransationTableTh>
                <TransationTableTh>Currency</TransationTableTh>
            </TransationTableTr>
        </TransationTableHeader>

        <TransationTableBody>
            {items.map((el) => {
                return <TransationTableTr key={el.id}>
                    <TransationTableTd>{el.type}</TransationTableTd>
                    <TransationTableTd>{el.amount}</TransationTableTd>
                    <TransationTableTd>{el.currency}</TransationTableTd>
               </TransationTableTr>
           })}
        </TransationTableBody>
    </TransationTable>
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired).isRequired
}