import styles from "./ListaContribuicoes.module.css";

const ListaContribuicoes = ({ contribuicoes }) => {
  return (
    <div className={styles.contribuicoes}>
      <h3>Contribuições:</h3>
      <ul>
        {contribuicoes.map((contribuicao, index) => (
          <li key={index} className={styles.contribuicao}>
            <p>{contribuicao.resposta}</p>
            <div className={styles.info}>
              <span>Autor: {contribuicao.autor}</span>
              <span>Data: {contribuicao.dataPublicacao}</span>
              <span>Curtidas: {contribuicao.curtidas}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaContribuicoes;
