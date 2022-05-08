import "./Home.css";
import { useState, useEffect } from "react";
import Country from "../../Components/Country/Country";
import Nav from "../../Components/Nav/Nav";
import Select from "../../Components/Select/select";
import Search from "../../Components/Search/Search";

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [selected, setSelected] = useState("");
  const [searchTerm,setSearchTerm] = useState("");

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
    //console.log(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  
  const filteredCountries = countries ? countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase())) : [];

  const countryCards = filteredCountries
    ? filteredCountries.map((country) => (
        <Country key={country.name} country={country} />
      ))
    : [];

  const handleSelect = (e) => {
    setSelected(e);
  };

  const handleSearch = e => {
      setSearchTerm(e);
  }


  return (
    <div className="Home">
      <Nav />
      <Search onSearch = {handleSearch}/>
      <Select onSelect={handleSelect} />
      <div className="country_grid">
        {!countries ? <div>Loading</div> : countryCards}
      </div>
    </div>
  );
};

export default Home;
