import './App.css';
import React from 'react';


function App() {

  const [waehrung, setWaehrung] = React.useState('Dollar');
  const [kurs, setKurs] = React.useState(0);
  const [anzahl, setAnzahl] = React.useState(0);

  const handleClick = () => {
    setKurs(document.getElementById('kurs').value);
    setAnzahl(document.getElementById('anzahl').value);
  }


  return (
    <div className="App">
      <label>Währung-Name:</label>
      <input type="text" id="waehrung" defaultValue={waehrung} onChange={() => setWaehrung(document.getElementById('waehrung').value)} />
      <br />
      <label>Wechselkurs:</label>
      <input type="number" id="kurs" defaultValue={kurs} />
      <br />
      <label>Anzahl:</label>
      <input type="number" id="anzahl" defaultValue={anzahl} />

      <br />
      <button onClick={handleClick}>Berechnen</button>

      <p>
        Mit dem Wechselkurs von {kurs} sind {anzahl} {waehrung} heute {kurs * anzahl} € wert.
      </p>
    </div>
  );
}

export default App;
