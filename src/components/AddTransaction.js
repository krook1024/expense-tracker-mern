
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 } from 'uuid';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: v4(),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);

        setText('');
        setAmount('');
    };

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..."
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input
                        type="number" placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </React.Fragment>
    )
}

export default AddTransaction