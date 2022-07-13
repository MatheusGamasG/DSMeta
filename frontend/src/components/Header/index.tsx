import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Logo do DSMeta"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig">DevSuperior.ig</a></p>
        </div>
    </header>
    )
  }
  
  export default Header;