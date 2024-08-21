import "./navbar.css"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
 const NavBar = () => {
  return (
    <header className="barra">
   
      
      <nav className='navbar'>
        <div className="brand">
        <Link to="/">
              <img src="/imagenes/logo.png" alt="logo" />
        </Link>
        </div>
        <div className="menu-container">
            <ul className="font-nav">
             <li><Link to="/">Inicio</Link></li>
             <li><Link to="/categoria/nba">NBA</Link></li>
             <li><Link to="/categoria/nfl">NFL</Link></li>
             <li><Link to="/categoria/mlb">MLB</Link></li>
            </ul>
        </div>
        <div className="cart-widget">
          <CartWidget/>
        </div>
      </nav>
    </header>
    
  )
}
export default NavBar;