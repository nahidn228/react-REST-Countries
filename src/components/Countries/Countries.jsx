import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    //console.log("Add this to your visited Country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Countries: {countries.length} </h3>
      {/* Visited Countries */}
      <div>
        <h4>Visited Country {visitedCountries.length} </h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country?.name?.common} </li>
          ))}
        </ul>
      </div>
      {/* Display Flags */}
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>

      {/* Display Countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
