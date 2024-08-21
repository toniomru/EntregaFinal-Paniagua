import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"



const Cart = () => {
    const{carrito,precioTotal,borrarProducto,vaciarCarrito}=useContext(CartContext)
    if(carrito.length===0){
        return (
            <div className="carritovacio">
                <h2>El carrito está vacio 🤔</h2>
                <Link to="/" className="link">Ir a la tienda</Link>
            </div>
        )
    }
return (
    <div >
        <ul style={{flexDirection:"column"}}>
        {
          carrito.map((productoCarrito)=>(
            <li style={{display:"flex",justifyContent:"space-between",margin:"20px"}} className="parrafos">
                <img width={200} src={productoCarrito.imagen} alt="" />
                <p>{productoCarrito.nombre}</p>
                <p>{productoCarrito.descripcion}</p>
                <p>Cantidad:{productoCarrito.cantidad}</p>
                <p>Precio por unidad: ${productoCarrito.precio}</p>
                <p>Precio parcial: ${productoCarrito.cantidad *productoCarrito.precio}</p>
                <button onClick={()=>borrarProducto(productoCarrito.id)}className="eliminar">Eliminar</button>

            </li>
          ))
        }
        </ul>
        <hr size ="10"  style={{backgroundColor:"black"}} />
       <h2 style={{textAlign:"center"}}>Precio Total:${precioTotal()}</h2>
       <button onClick={vaciarCarrito} className="eliminart">Eliminar todo 🗑 </button>
       <Link to="/checkout" className="eliminart">Finalizar mi compra💸</Link>
    </div>
  )
}

export default Cart