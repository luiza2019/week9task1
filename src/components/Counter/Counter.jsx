import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }
    return (
        <div>
            <p>Вы нажали: {counter}</p>
            <button onClick={increment} className="btn btn-primary">+</button>
            <button onClick={decrement} className="btn btn-success">-</button>

        </div>
    );
};

export default Counter;