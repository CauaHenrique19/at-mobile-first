import Menu from "./Menu";
import TopicoPrincipal from "./TopicoPrincipal";
import ListaContribuicoes from "./ListaContribuicoes";
import FormularioResposta from "./FormularioResposta";
import RelacaoTopicos from "./RelacaoTopicos";
import styles from "./ForumPage.module.css";

const ForumPage = ({
  topico,
  contribuicoes,
  usuario,
  topicosRecentes,
  topicosMaisCurtidos,
  topicosMaisRespondidos,
}) => {
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.content}>
        <TopicoPrincipal topico={topico} />
        <ListaContribuicoes contribuicoes={contribuicoes} />
        <FormularioResposta usuario={usuario} />
        <RelacaoTopicos
          topicosRecentes={topicosRecentes}
          topicosMaisCurtidos={topicosMaisCurtidos}
          topicosMaisRespondidos={topicosMaisRespondidos}
        />
      </div>
    </div>
  );
};

export default ForumPage;
