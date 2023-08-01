/* TAG 2 */
import React from 'react';

// Counter Komponente
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <p>
                {count}
            </p>
            <button onClick={() => setCount(count + 1)}>Click ++</button>
            <button onClick={() => setCount(count - 1)}>Click --</button>
        </>
    );
}

// mehrere Counter
function MoreCounter() {
    return (
        <>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        </>
    );
}

// dynamische anzahl an counter
function CounterGrow() {
    const [amount, setAmount] = React.useState(0);

    let content = [];
    for (let i = 0; i < amount; i++) {
        content.push(<Counter />);
    }

    return (
        <>
            <button onClick={() => setAmount(amount + 1)}>Counter ++</button>
            <button onClick={() => setAmount(amount - 1)}>Counter --</button>
            <p>
                {content}
            </p>
        </>
    );
}




export default function MyCounters() {
    return (
        <>
            <Counter />
            <hr />
            <MoreCounter />
            <hr />
            <CounterGrow />
        </>
    );
}