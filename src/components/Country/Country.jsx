import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  //console.log(country);

  const { name, flags, population, region, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "black" : "purple" }}> {name?.common} </h3>
      <img src={flags.png} alt="" srcSet="" />
      <p>Population: {population}</p>
      <p>Region : {region} </p>
      <p>Area : {area} </p>
      <p>
        <small>Code : {cca3}</small>{" "}
      </p>
      <button
        onClick={() => {
          handleVisitedCountry(country);
        }}
      >
        Mark Visited
      </button>
      <br /> <br />
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
      >
        Add Flag
      </button>
      <br /> <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have Visited this country" : "I want to visit this country"}
    </div>
  );
};

export default Country;
