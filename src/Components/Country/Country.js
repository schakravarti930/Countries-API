import "./Country.css";

const Country = (props) => {
  //console.log(props);
  return (
    <div className="country_card">
      <div className="country_image">
        <img src={props.country.flag} alt={props.country.name} />
      </div>
      <div className="country_details">
        <h2 className="text-normal">{props.country.name}</h2>
        <div className="card-text">
          <span>Population: </span>
          {props.country.population.toLocaleString()}
        </div>
        <div className="card-text">
          <span>Region: </span>
          {props.country.region}
        </div>
        <div className="card-text">
          <span>Capital: </span>
          {props.country.capital}
        </div>
      </div>
    </div>
  );
};

export default Country;
