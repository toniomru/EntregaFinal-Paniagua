import "./TarjetaIndividual.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "../ItemCount/ItemCount";
import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {

  const{agregarProducto}=useContext(CartContext);
  const [mostrarItemCount,setMostrarItemCount]=useState(true);

  const agregarAlCarrito=(contador)=>{
    const productoCarrito={...producto, cantidad: contador};
    
    agregarProducto(productoCarrito);
    setMostrarItemCount(false);
  };



  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={producto.imagen} className="img-fluid" alt={producto.nombre} style={{ maxHeight: '500px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="h4">${producto.precio}</p>

          
          {
            mostrarItemCount  ? (
            <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />

            ) : (
            
            <Link to="/Cart" className="terminar">Terminar mi compra</Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
