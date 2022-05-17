import CountryDetails from "../../Components/CountryDetail/CountryDetail"
import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const {CountryId} = useParams();
    const [country,setCountry] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const fetchCountry = async() => {
        setIsLoading(true);
        const BASE_URL = "https://restcountries.com/v3.1/alpha/";
        const response = await fetch(`${BASE_URL}/${CountryId}`);
        const data = await response.json();
        console.log(data);
        setCountry(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCountry();
        //console.log(country[0].name.common)
    },[CountryId])

    if(isLoading)
        return <>Loading</>
    else
        return(
            <>
                <Link to="/">Back</Link>
                {country ? <CountryDetails country={country[0]}/> : "Loading"}
            </>
        )
}
export default Details;