import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import{getDoc,doc} from "firebase/firestore"
import db from "../../db/db.js"


const ItemDetailContainer = () => {
    const[producto,setProducto]=useState({})
    const{idProducto}=useParams()

    const getProduct=async()=>{

        try{
        const docRef=doc(db,"productos",idProducto)
        const dataDb=await getDoc(docRef)
        const data={id:dataDb.id, ...dataDb.data()}

        setProducto(data)
        }
        catch(error){
         console.log(error)   
        }

        
    }
    useEffect(()=>{
        getProduct();
        
    },[])
    

  return (
    
       <ItemDetail producto={producto}/>
    
  )
}

export default ItemDetailContainer
