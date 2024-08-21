import "./navbar.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cantidadTotal}=useContext(CartContext)
  let  cantidad=cantidadTotal()
  return (
    <Link to="/cart" className="carrito">
        <p>{cantidad>0 && cantidad}</p>
        <img src="/imagenes/carrito.png" alt="" />
        
    </Link>
  )
}
export default CartWidget;
