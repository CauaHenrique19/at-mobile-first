import styles from "./RelacaoTopicos.module.css";

const RelacaoTopicos = ({
  topicosRecentes,
  topicosMaisCurtidos,
  topicosMaisRespondidos,
}) => {
  return (
    <div className={styles.relacaoTopicos}>
      <div>
        <h3>Mais Recentes</h3>
        <ul>
          {topicosRecentes.map((topico, index) => (
            <li key={index}>
              <span>{topico.titulo}</span> - {topico.curtidas} curtidas -{" "}
              {topico.respostas} respostas
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Mais Curtidos</h3>
        <ul>
          {topicosMaisCurtidos.map((topico, index) => (
            <li key={index}>
              <span>{topico.titulo}</span> - {topico.curtidas} curtidas -{" "}
              {topico.respostas} respostas
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Mais Respondidos</h3>
        <ul>
          {topicosMaisRespondidos.map((topico, index) => (
            <li key={index}>
              <span>{topico.titulo}</span> - {topico.curtidas} curtidas -{" "}
              {topico.respostas} respostas
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelacaoTopicos;
