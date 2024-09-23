import { useState } from "react";
import styles from "./App.module.css";

const initialImages = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

function App() {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    setImages([...images, "https://via.placeholder.com/150"]);
  };

  const removeImage = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={addImage}>Adicionar Imagem</button>
        {images.length}
        <button onClick={removeImage}>Remover Imagem</button>
      </div>
      <div className={styles.gallery}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Placeholder ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
