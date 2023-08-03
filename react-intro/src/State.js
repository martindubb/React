import React from 'react';


function String() {
    const [data, setData] = React.useState("");

    return (
    <>
        <p>{data}</p>
        <button onClick={() => setData("Max")}>set</button>
    </>
    );
}

function Number() {
    const [data, setData] = React.useState(0);

    return (
    <>
        <p>{data}</p>
        <button onClick={() => setData(26)}>set</button>
    </>
    );
}


function Easy() {
    return(
        <>
            <String />
            <Number />
        </>
    );
}


// Liste iterieren (recap)
function SwitchName() {
    let arr = ['Pengiuns', 'Octocats', 'Ducks']
    const [count, setCount] = React.useState(1);
    console.log("Count bei funktionsaufruf="+count);

    const element = (
        <>
            <h1>I like {arr[count]}</h1>
            <button onClick={() => setCount((count + 1) % 3) }>next</button>
        </>
    );
    return element;
}



function Complex() {
    const [data, setData] = React.useState({
        name: "Max",
        age: 28
    });

    const changeName = () => {
        // nicht korrekt: neues objekt bauen und übergeben
        // data.name = "Moritz";
        // setData(data);

        // korrekt: altes objekt übergeben und änderungen anhängen
        setData({...data, name: "Moritz"});
    }

    const addProp = () => {
        // nicht korrekt: neues objekt bauen und übergeben
        // data.married = "ledig";
        // setData(data);

        // korrekt: altes objekt übergeben und zusätze anhängen
        setData({...data, married: "ledig" });
    }

    return (
        <p>
            the data: <br />
            {data.name} <br />
            {data.age} <br />
            {data.married} <br />
            <br />
            object: <br />
            {JSON.stringify(data)}<br />
            <button onClick={changeName}>set new name</button>
            <button onClick={addProp}>add married</button>
        </p>
    );
}

function CounterState() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        // setCount(count + 1);
        // setCount(count + 1);

        setCount(count + 1);
        setCount(current => current + 1);
    }

    return (
        <>
            <p>
                {count}
            </p>
            <button onClick={handleClick}>Click ++</button>
        </>
    );
}


export default function MyState() {
    return (
        <>
            <Easy />
            <hr />
            <SwitchName />
            <hr />
            <Complex />
            <hr />
            <CounterState />
            <hr />
        </>
    );
}