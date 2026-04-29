import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/Register">Cadastro</Link>
      <Link to="/About">Desenvolvedores</Link>
    </nav>
  );
}

export default Navbar;