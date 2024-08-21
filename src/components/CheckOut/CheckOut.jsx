import { useState,useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp,addDoc,collection } from "firebase/firestore"
import Formulario from "./Formulario"
import db from "../../db/db.js"
import validateForm from "../../utils/validacionFormulario.js"
import { toast } from "react-toastify"

const CheckOut = () => {
    const[datosForm,setDatosForm]=useState({
        nombre:"",
        telefono:"",
        email:"",
        emailRepetido:"",
        direccion:"",

    })
    const [idOrden,setIdOrden]=useState(null)
    const {carrito,precioTotal}=useContext(CartContext)

    const handleChangeInput=(event)=>{
      setDatosForm({...datosForm,[event.target.name]:event.target.value })
        
    }
    
    const handleSubmitForm=async(event)=>{
      event.preventDefault ()
      
      const orden={
        comprador:{ ...datosForm},
        productos:[...carrito],
        fecha:Timestamp.fromDate(new Date()),
        total: precioTotal(),
      }
      const response=await validateForm(datosForm)
      if(response.status==="success"){
        sendOrder(orden)
      }else{
        toast.warning(response.message)
      }
      
    }
    const sendOrder=async(orden)=>{

        try{
        const ordenesRef=collection(db,"ordenes") 
       const ordenDb=await addDoc(ordenesRef,orden)
       setIdOrden(ordenDb.id)
        }
        catch(error){
            console.log(error)

        }
       

    }
    return (
    <div>
        {
          idOrden ? (<div><h2>Orden Completada 😎</h2> <p>Guarde su id de orden:{idOrden}</p></div>

          ):(
          <Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>)  
        }
        
        
    </div>
  )
}

export default CheckOut