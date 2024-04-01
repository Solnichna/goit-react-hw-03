
const SearchBox = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-box">
      <p>Find contacts by name</p>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="search-box-input"
        />
     </div>
  );
};

export default SearchBox;

