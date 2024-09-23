import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="vertical-menu">
        <div className="menu-header">
          <img src="logo.png" alt="Logo" className="logo" />
          <img src="icon-menu.png" alt="Logo" className="icon" />
        </div>
        <ul className="menu-items">
          <li>Home</li>
          <li>Perfil</li>
          <li>Configurações</li>
          <li>Fotos</li>
          <li>Vídeos</li>
          <li>Favoritos</li>
          <li>Lembranças</li>
          <li>Logout</li>
        </ul>
      </nav>
      <main className="content">
        <h1>Bem-vindo!</h1>
        <p>Conteúdo principal aqui.</p>
      </main>
    </div>
  );
}

export default App;
