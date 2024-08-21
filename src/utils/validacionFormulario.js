import { object,string,ref} from "yup";

let userSchema=object({ 
    nombre: string().required("El nombre es requerido"),
    telefono: string().required("Debe poner su numero de telefono"),
    email: string().email().required("Su email es obligatorio"),
    emailRepetido: string().oneOf([ref('email'), null], 'Los emails deben coincidir').required("Debe repetir su email"),
    direccion: string().required("Debe poner una direccion para el envio")
})

const validateForm=async(dataForm)=>{
    try {
        await userSchema.validate(dataForm)
        return {status:"success"}
    } catch (error) {
        return {status:"error",message:error.message}
    }
}

export default validateForm