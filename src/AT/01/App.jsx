import './App.css';

const App = () => {
  return (
    <header className="menu">
      <div className="menu-logo">
        <img src="logo.png" alt="Logo Infnet" />
      </div>
      <nav className="menu-items">
        <a href="#produtos" className="menu-link">Produtos</a>
        <a href="#servicos" className="menu-link">Serviços</a>
        <a href="#contato" className="menu-link">Contato</a>
      </nav>
      <div className="menu-icon">
        <img src="profile-icon.png" alt="Icone Perfil" />
      </div>
    </header>
  );
};

export default App;
