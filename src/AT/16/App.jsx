import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SellerInfo from "./components/SellerInfo/SellerInfo";
import Comments from "./components/Comments/Comments";
import Questions from "./components/Questions/Question";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import styles from "./App.module.css";

import ImageProduct from "./images/mac.jpg";
import RelatedProductImage from "./images/headset.jpg";

const productData = {
  name: "MacBook Pro",
  image: ImageProduct,
  description: "Um notebook de última geração com várias funcionalidades.",
  price: 8999.99,
  rating: 4.5,
};

const sellerData = {
  name: "TechStore",
  email: "vendas@techstore.com",
  phone: "1234-5678",
  rating: 4.8,
};

const commentsData = [
  {
    user: "Ana Silva",
    date: "2024-09-20",
    message: "Produto excelente, recomendo!",
    rating: 5,
  },
];

const questionsData = [
  {
    user: "Carlos",
    date: "2024-09-18",
    question: "Esse smartphone tem garantia?",
    answer: "Sim, possui 1 ano de garantia.",
  },
];

const relatedProductsData = [
  {
    name: "Fone de Ouvido Wireless",
    image: RelatedProductImage,
    price: 899.99,
  },
];

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Menu />
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <ProductDetails product={productData} />
          <SellerInfo seller={sellerData} />
          <Comments comments={commentsData} />
          <Questions questions={questionsData} />
        </div>
        <div className={styles.rightColumn}>
          <RelatedProducts products={relatedProductsData} />
        </div>
      </div>
    </div>
  );
};

export default App;
