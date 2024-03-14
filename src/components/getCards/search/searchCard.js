
import './searchCard.css'

const SearchHero = ({search, setSearch, handleSearch}) => {
    

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <section className="search_section">
            <input
                className="input_search"
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Enter hero name"
            />
            <button className="btn_search" onClick={handleSearch}>Search</button>
        </section>
    );
};

export default SearchHero;
