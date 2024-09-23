import styles from "./RelatedProducts.module.css";

const RelatedProducts = ({ products }) => {
  return (
    <section className={styles.related}>
      <h3 className={styles.title}>Produtos Relacionados</h3>
      <div className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
