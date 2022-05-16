//import { useState } from "react";

const Select = (props) => {
    //const [value,setValue] = useState('');

    const handleChange = (e) => {
        props.onSelect(e.target.value);
    }

    return(
        <select name="region" onChange={handleChange}>
            <option value="" hidden disabled selected>Filter by Region</option>
            <option value="all">All</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    );
}

export default Select;