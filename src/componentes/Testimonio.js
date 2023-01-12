import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
       className='imagen-testimonio'
       src={require(`../img/${props.imagen}.jpeg`)} 
       alt={`foto de ${props.nombre}`} />

       <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>Nombre:</strong>{props.nombre}</p>
        <p className='cargo-testimonio'><strong>Profesion:</strong>{props.profesion}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
       </div>
    </div>
  );
}

export default Testimonio;