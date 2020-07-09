import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <React.Fragment>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}
                <span>{sign}{Math.abs(transaction.amount)} Ft</span>
                <button className="delete-btn" onClick={ () => deleteTransaction(transaction._id) }>&times;</button>
            </li>
        </React.Fragment>
    )
}
