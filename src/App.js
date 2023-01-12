
import './App.css';
import Testimonio from './componentes/Testimonio.js';
import data from './testimonios.json';
/**
 * La función App devuelve un div con el className de App, y dentro de ese div está el componente
 * Testimonio
 * @returns El componente Testimonio está siendo devuelto.
 */
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>   
      <h1>Esto es lo que dicen nuestros alumnos sobre nosotros:</h1>
      {data.map((testimonio)=>
        <Testimonio
          key={testimonio.id}
          imagen={testimonio.imagen}
          nombre={testimonio.nombre}
          profesion={testimonio.profesion}
          testimonio={testimonio.testimonio}
        />
      )}
      

 </div>
    </div>
  );
}

export default App;
