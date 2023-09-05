import SearchBar from "./components/SearchBar";
import searchImages from "./api.js";

function App() {
  const handleSearch = async (term) => {
    const result = await searchImages(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
}

export default App;
