import logo from "./logo.svg";
import "./App.css";
import Testimony from "./components/Testimony/Testimony";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp:</h1>
        <Testimony
          nombre="Shawn Wang"
          pais="Singapur"
          ruta="Testimonio-Shawn"
          alt="Foto de Shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané confianza de que podía programar trabajando durante cientos de horas en las lecciones gratuitas de FreeCodeCamp.
          Después de un año tuve un trabajo de seis cifras como ingeniero de software. FreeCodeCamp cambió mi vida"
        ></Testimony>
        <Testimony
          nombre="Sarah Chima"
          pais="Nigeria"
          ruta="Testimonio-Sarah"
          alt="Foto de Sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company"
        ></Testimony>
        <Testimony
          nombre="Emma Bostian"
          pais="Suecia"
          ruta="Testimonio-Emma"
          alt="Foto de Emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        ></Testimony>
      </div>
    </div>
  );
}

export default App;
