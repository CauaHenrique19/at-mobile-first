import styles from "./Comments.module.css";

const Comments = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h3 className={styles.title}>Comentários dos Usuários</h3>
      {comments.map((comment, index) => (
        <div key={index} className={styles.comment}>
          <p className={styles.user}>
            <strong>{comment.user}</strong> - {comment.date}
          </p>
          <p className={styles.message}>{comment.message}</p>
          <p className={styles.rating}>Nota: {comment.rating}</p>
        </div>
      ))}
    </section>
  );
};

export default Comments;
