import SearchBar from "./components/SearchBar";
import searchImages from "./api.js";

function App() {
  const handleSearch = (term) => {
    const images = searchImages(term);
    console.log(images);
    console.log("search term", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
}

export default App;
