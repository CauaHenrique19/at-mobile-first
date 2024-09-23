import { useState } from "react";
import styles from "./FormularioResposta.module.css";

const FormularioResposta = ({ usuario }) => {
  const [resposta, setResposta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resposta enviada:", resposta);
    // Lógica para enviar a resposta
    setResposta("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Escreva sua resposta aqui..."
      ></textarea>
      <button type="submit">Enviar</button>
      <span>Autenticado como: {usuario}</span>
    </form>
  );
};

export default FormularioResposta;
