import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tarjetas.css'
const Item = ({ producto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <Link to={"/detalle/" + producto.id}>
          <img src={producto.imagen} className="card-img-top" alt={producto.nombre} style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">${producto.precio}</p>
            <div className="mt-auto">
              <a href="#" className="btn btn-custom">Ver detalle</a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
