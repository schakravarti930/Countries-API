const Search = (props) => {

    const handleChange = (e) => {
        props.onSearch(e.target.value);
    }

    return(
        <input type="search"
        onChange={handleChange}/>
    )
}

export default Search;