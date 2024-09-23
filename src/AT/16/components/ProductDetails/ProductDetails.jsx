import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product }) => {
  return (
    <section className={styles.product}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
      <p className={styles.rating}>Nota: {product.rating}</p>
    </section>
  );
};

export default ProductDetails;
