import { Routes,Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import { useState,useEffect } from "react";

function App() {
  const [countries,setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
    console.log(countries)
  }, []);

  return(
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home countries={countries}/>}/>
          <Route path=":CountryId" element={<Details />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
