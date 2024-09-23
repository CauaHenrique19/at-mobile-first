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
      <div className={styles.gridOrganization}>
        <Header />
        <GlobalMenu />
        <ContextMenu />
        <MainContent />
        <Ads />
        <Footer />
      </div>
      <div className={styles.flexOrganization}>
        <div className={styles.row}>
          <GlobalMenu />
          <Header />
        </div>
        <ContextMenu />
        <MainContent />
        <Ads />
        <Footer />
      </div>
    </div>
  );
}

export default App;
