import styles from "./SellerInfo.module.css";

const SellerInfo = ({ seller }) => {
  return (
    <section className={styles.seller}>
      <h3 className={styles.title}>Informações do Vendedor</h3>
      <p className={styles.detail}>
        <strong>Nome:</strong> {seller.name}
      </p>
      <p className={styles.detail}>
        <strong>E-mail:</strong> {seller.email}
      </p>
      <p className={styles.detail}>
        <strong>Telefone:</strong> {seller.phone}
      </p>
      <p className={styles.detail}>
        <strong>Nota:</strong> {seller.rating}
      </p>
    </section>
  );
};

export default SellerInfo;
