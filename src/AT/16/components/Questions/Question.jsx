import styles from "./Question.module.css";

const Questions = ({ questions }) => {
  return (
    <section className={styles.questions}>
      <h3 className={styles.title}>Perguntas dos Usuários</h3>
      {questions.map((question, index) => (
        <div key={index} className={styles.question}>
          <p className={styles.user}>
            <strong>{question.user}</strong> - {question.date}
          </p>
          <p className={styles.questionText}>
            <strong>Pergunta:</strong> {question.question}
          </p>
          <p className={styles.answer}>
            <strong>Resposta:</strong> {question.answer}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Questions;
