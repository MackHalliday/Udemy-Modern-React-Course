import SearchBar from "./components/SearchBar";
import searchImages from "./api.js";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
