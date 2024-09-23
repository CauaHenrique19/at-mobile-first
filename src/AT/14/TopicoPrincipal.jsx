import styles from "./TopicoPrincipal.module.css";

const TopicoPrincipal = ({ topico }) => {
  return (
    <div className={styles.topico}>
      <h1>{topico.titulo}</h1>
      <h2>{topico.subtitulo}</h2>
      <p>{topico.descricao}</p>
      <div className={styles.info}>
        <span>Autor: {topico.autor}</span>
        <span>Data: {topico.dataPublicacao}</span>
        <span>Curtidas: {topico.curtidas}</span>
        <span>Respostas: {topico.respostas}</span>
      </div>
    </div>
  );
};

export default TopicoPrincipal;
