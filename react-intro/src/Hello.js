/* TAG 1 */
import React from 'react';


// eine einfache Komponente
function HalloWelt() {
  return <h1>Hallo Welt</h1>;
}

// eine einfache Komponente mit Parametern
function Hallo(props) {
  return <h1>Hallo {props.name}</h1>;
}

// eine einfache Komponente mit Parametern und Defaultwerten
function HalloDefault(props) {
  return <h1>Hallo {props.name}</h1>;
}
HalloDefault.defaultProps = { name: "da draussen" };

// Kurzschreibweise
const HalloMond = () => { return <h1>Hallo Mond</h1> };
const HalloMars = () => <h1>Hallo Mars</h1>;

// Kapselung und Parameter übergeben
function SagHallo() {
  return (
      <>
      <HalloWelt />
      <Hallo name="React" />
      <HalloDefault />
      <HalloMond />
      <HalloMars />
      </>
  );
}

function Literal() {
  const element = <h1>Hallo Welt</h1>;
  return element;
}

function Liste() {
  const numbers = [1,2,3,4,5];
  const listItems = numbers.map((number) => <li>{number}</li>);

  // [
  //     <li>1</li>,
  //     <li>2</li>,
  //     <li>3</li>,
  //     <li>4</li>,
  //     <li>5</li>,
  // ]

  const element = (
      <ul>
          {listItems}
      </ul>
  );
  return element;
}

function EmbeddedCode() {
  // kommentar
  /* kommentar */
  const element = (
      <h2>
          {/* JSX kommentar */}
          Hallo { format("bei Techstarter") } !
      </h2>
  );
  return element;
}

function format(text) {
  return <i>{text}</i>;
}


function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const element = (
      <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      </>
  );
  return element;
}


export default function HelloReact() {
  return (
    <>
      <SagHallo />
      <Literal />
      <Liste />
      <EmbeddedCode />
      <Counter />
    </>
  );
}