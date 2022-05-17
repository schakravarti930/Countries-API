import "./Home.css";
import { useState, useEffect } from "react";
import Country from "../../Components/Country/Country";
import Nav from "../../Components/Nav/Nav";
import Select from "../../Components/Select/select";
import Search from "../../Components/Search/Search";
import { Link } from "react-router-dom";

const Home = ({countries}) => {
  const [region, setRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(null);

  // const fetchCountries = async () => {
  //   const response = await fetch("https://restcountries.com/v2/all");
  //   const data = await response.json();
  //   setCountries(data);
  //   setFilteredCountries(data);
  //   console.log("I ran")
  // };

  useEffect(() => {
    //fetchCountries();
    setFilteredCountries(countries);
  }, [countries]);

  console.log(countries);
  const textSearch = (data) => {
    if(data){
      return data.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    return []
  }

  const regionSearch = (data) => {
    if(data){
      if(region === "all" || region === "")
        return data;
      return data.filter(country => country.region.toLowerCase() === region);
    }
    return []
  }

  useEffect(() => {
    const search_filtered = textSearch(countries);
    const region_filtered = regionSearch(search_filtered);
    setFilteredCountries(region_filtered);
  },[searchTerm,countries,region]);

  const handleSelect = (e) => {
    setRegion(e);
  };

  const handleSearch = (e) => {
    setSearchTerm(e);
  };

  return (
    <div className="Home">
      <Search onSearch={handleSearch} placeholder="Search for a country..."/>
      <Select onSelect={handleSelect} />
      <div className="country_grid">
        {!filteredCountries ? <div>Loading</div> : 
          filteredCountries.map(country => (
            <Link
              className="Link"
              style={{textDecoration:"none"}} 
              to={`/${country.alpha3Code}`}>
              <Country key={country.name} country={country} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
