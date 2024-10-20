import { useState } from "react";

export default function Countrys({ country }) {
  console.log("country", country);

  const { name, cca3, flags, area, capital, currencies, continents } = country;

  // console.log(currencies,"aice ?");

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country-container">
      <div>
        <img
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          src={flags.png}
          alt="flag"
        />
      </div>
      <h3>Name: {name.common}</h3>
      <p>Capital: {capital}</p>
      <p>Continents: {continents}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
  
      <div style={{padding:'10px 0px', color: visited? "green" : "red"}}>
      {
        visited? 'I have visited this country.' : 'I want to visit.'
        }
      </div>

      <div className="btns">
        <button onClick={handleVisited}> {visited? 'Visited' : 'Going'}</button>

        <button>Like</button>
      </div>
    </div>
  );
}
