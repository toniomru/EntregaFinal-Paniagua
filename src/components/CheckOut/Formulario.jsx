import React from 'react';
import "./Formulario.css"


const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="form-container">
        <form onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label className="form-label">Nombre:</label>
            <input 
              type="text" 
              className="form-control wide-input" 
              name="nombre" 
              value={datosForm.nombre} 
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Telefono:</label>
            <input 
              type="text" 
              className="form-control wide-input" 
              name="telefono" 
              value={datosForm.telefono} 
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input 
              type="email" 
              className="form-control wide-input" 
              name="email" 
              value={datosForm.email} 
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Repetir Email:</label>
            <input 
              type="email" 
              className="form-control wide-input" 
              name="emailRepetido" 
              value={datosForm.emailRepetido} 
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Direccion:</label>
            <input 
              type="text" 
              className="form-control wide-input" 
              name="direccion" 
              value={datosForm.direccion} 
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">Finalizar Compra🤑</button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;

