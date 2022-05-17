import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryDetails = ({ country }) => {
  const { currencies, languages, borders } = country;
  const [borderCountries,setBorderCountries] = useState(null);

  const fetchBorderCountries = async() => {
    const BASE_URL = "https://restcountries.com/v3.1/alpha?codes=";
    const response = await fetch(BASE_URL + borders.join(','));
    const data = await response.json();
    setBorderCountries(data);
  }

  useEffect(() => {
    console.log(country);
    fetchBorderCountries();
  }, [country]);

  return (
    <>
      <div className="img-container">
        <img src={country.flags.png} alt={`${country.name}'s flag`}></img>
      </div>
      <div className="details">
        <div className="card-text">
          <span>Native Name: </span>
          {country.name.nativeName.common}
        </div>
        <div className="card-text">
          <span>Population: </span>
          {country.population.toLocaleString()}
        </div>
        <div className="card-text">
          <span>Region: </span>
          {country.region}
        </div>
        <div className="card-text">
          <span>Sub Region: </span>
          {country.subregion}
        </div>
        <div className="card-text">
          <span>Capital: </span>
          {country.capital}
        </div>
        <div className="card-text">
          <span>Top Level Domain: </span>
          {country.tld}
        </div>
        <div className="card-text">
          <span>Currencies: </span>
          {Object.keys(currencies).map((key) => currencies[key].name).join(', ')}
        </div>
        <div className="card-text">
          <span>Languages: </span>
          {Object.keys(languages).map((key) => languages[key]).join(', ')}
        </div>
        <div className="card-text">
          <span>Border Countries: </span>
          {
              borderCountries ? borderCountries.map(border => 
                <Link
                    className="Link"
                    to={`/${border.cca3}`}
                >
                    
                        <button>{border.name.common + " "}</button>
                    
                </Link>
                ) : "No bordering Countries"
          }
        </div>
      </div>
    </>
  );
};
export default CountryDetails;
