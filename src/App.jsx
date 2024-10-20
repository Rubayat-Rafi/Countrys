import { useState } from 'react'
import './App.css'
import Countrys from './Components/Countrys'
import { useEffect } from 'react';

function App() {

const [countrys, setCountrys] = useState([]);

useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => setCountrys(data))
},[])

  // console.log(countrys, "paice");

  const {cca3} = countrys;
history
  return (
    <>
      <h1 style={{textAlign:'center'}}>Countrys: {countrys.length}</h1>

      <div className="countrys-container">

        {
        countrys.map(country => <Countrys key={cca3} country={country}></Countrys>)
        }
      
      </div>

    </>
  )
}

export default App
