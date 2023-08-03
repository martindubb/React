import './App.css';
import React from 'react';
import axios from 'axios';



function App() {
  const [waehrung, setWaehrung] = React.useState('USD');
  const [kurs, setKurs] = React.useState(0);
  const [anzahl, setAnzahl] = React.useState(0);

  const handleClick = () => {
    // setKurs(document.getElementById('kurs').value);
    setAnzahl(document.getElementById('anzahl').value);
    getKurs();
  }

  const getKurs = async () => {
    const options = {
      method: 'GET',
      url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/timeseries',
      params: {
        start_date: '2023-08-02',
        end_date: '2023-08-02',
        from: 'USD',
        to: 'EUR'
      },
      headers: {
        'X-RapidAPI-Key': "XXXX",
        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setKurs(response.data.rates["2023-08-02"].USD);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="App">
      <label>Währung-Name:</label>
      <input type="text" id="waehrung" defaultValue={waehrung} onChange={() => setWaehrung(document.getElementById('waehrung').value)} />
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
