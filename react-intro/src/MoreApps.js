/* TAG 2 */
import React from "react";

// Liste iterieren (recap)
function SwitchName() {
    let arr = ['Pengiuns', 'Octocats', 'Ducks']
    const [count, setCount] = React.useState(0);

    const element = (
        <>
            <h1>I like {arr[count]}</h1>
            <button onClick={() => setCount((count + 1) % 3)}>next</button>
        </>
    );
    return element;
}





// Komponenten als Array (recap)
function List() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);

    // const listItems = [
    //     <li>1</li>,
    //     <li>2</li>,
    //     <li>3</li>,
    //     <li>4</li>,
    //     <li>5</li>,
    // ]

    return (
        <ol>
            {listItems}
        </ol>
    );
}


// Map Funktion 
function Loop() {
    const numbers = [5, 4, 3, 2, 2];

    return (
        <ul>
            {numbers.map((number, index) => {
                const n = number + 100;
                return <li key={index}>{n} (key={index})</li>;
            })}
        </ul>
    );
}


// Bedingtes rendern
function Bedingt() {
    const good = true;
    return (
        <p>
            {good && <p>Yes it's good!</p>}
        </p>
    );
}

function Bedingt2() {
    const good = true;
    return (
        <div>
            {good ? <p>Yes it's good!</p> : <p>No it's not good!</p>}
        </div>
    );
}



// Parameter für Eventhandler
function Event() {
    const numbers = [1, 2, 3, 4, 5];
    const [clicked, setClicked] = React.useState(0);

    const handleEvent = (n) => {
        setClicked(n);
        console.log("es wurde button " + n + " geklickt");
    };

    return (
        <>
            <p>
                {clicked > 0 ? "clicked " + clicked : "not clicked"}
            </p>
            {numbers.map((number) => <button key={number} onClick={() => handleEvent(number)}>Click {number}</button>)}
        </>
    );
}


// Parameter für Eventhandler inkl. Eventproperties
function Event2() {
    const numbers = [1, 2, 3, 4, 5];
    const [clicked, setClicked] = React.useState(0);

    const handleEvent = (e, n) => {
        setClicked(n);
        console.log(e);
    }

    return (
        <>
            <p>
                {clicked > 0 ? "clicked " + clicked : "not clicked"}
            </p>
            {numbers.map((number) => 
                <button id={number} key={number} onClick={(event) => handleEvent(event, number)}>Click {number}</button>
            )}
        </>
    );
}





export default function MoreApps() {
    return (
        <>
            <SwitchName />
            <hr />
            <List />
            <hr />
            <Loop />
            <hr />
            <Bedingt />
            <hr />
            <Bedingt2 />
            <hr />
            <Event />
            <hr />
            <Event2 />
            <hr /> 
        </>
    )
}