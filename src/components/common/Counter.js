import React from "react";

const Counter = ({ counter, increment, decrement }) => {
    return (
        <div>
            <button onClick={decrement} disabled={counter === 0}>-</button>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;