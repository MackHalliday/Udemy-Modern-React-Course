import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    );
  });
  return <div className="image-list"> {renderImages} </div>;
}

export default ImageList;
