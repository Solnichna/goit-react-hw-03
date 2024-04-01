
const SearchBox = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBox;

