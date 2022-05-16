import { useEffect } from "react";

const CountryDetails = ({country}) => {
    
    useEffect(() => {
        console.log(country)
    },[country])

    return(
        <>
        <div className="img-container">
           <img src={country.flags.png} alt={`${country.name}'s flag`}></img>
        </div>
        <div className="details">
        <div className="card-text">
          <span>Population: </span>
          {country.population.toLocaleString()}
        </div>
        <div className="card-text">
          <span>Region: </span>
          {country.region}
        </div>
        <div className="card-text">
          <span>Capital: </span>
          {country.capital}
        </div>
        </div>
        </>
    )
}
export default CountryDetails;