import Header from "./components/header/Header";
import GlobalMenu from "./components/globalMenu/GlobalMenu";
import ContextMenu from "./components/menuContext/MenuContext";
import MainContent from "./components/main/Main";
import Ads from "./components/ads/Ads";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <GlobalMenu />
      <ContextMenu />
      <MainContent />
      <Ads />
      <Footer />
    </div>
  );
}

export default App;
