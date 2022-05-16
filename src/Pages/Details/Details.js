import CountryDetails from "../../Components/CountryDetail/CountryDetail"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const Details = ({countries}) => {
    const {CountryName} = useParams();
    const [country,setCountry] = useState(null);

    const fetchCountry = async() => {
        const BASE_URL = "https://restcountries.com/v3.1/name";
        const response = await fetch(`${BASE_URL}/${CountryName}`);
        const data = await response.json();
        setCountry(data);
    }

    useEffect(() => {
        fetchCountry();
        //console.log(country[0].name.common)
    },[])

    return(
       country ? <CountryDetails country={country[0]}/> : "Loading"
    )
}
export default Details;