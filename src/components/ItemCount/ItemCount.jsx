import { useState } from "react";

const ItemCount = ({stock,agregarAlCarrito}) => {
    const [count,setCount]=useState(1);
    
const aumentar=()=>{
    if(count < stock){
        setCount(count + 1)
    }
      


}
const disminuir=()=>{
   if(count > 1){
    setCount(count - 1)
   } 
}

  return (
    <div className="button-container">
        <button onClick={disminuir} className="agregarc">-</button>
        <p>{count}</p>
        <button onClick={aumentar}className="agregarc">+</button>

        <button onClick={()=>agregarAlCarrito(count)} className="agregarca">Agregar al carrito</button>
    </div>
    
  )
}

export default ItemCount;
