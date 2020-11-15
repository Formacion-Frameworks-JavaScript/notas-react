import { useEffect, useState } from "react";
import { Aula } from "./componentes/Aula";
import { Navegacion } from "./componentes/Navegacion";
import { NuevaNota } from "./componentes/NuevaNota";
import notasJSON from "./datos/notas.json";

const { Loading } = require("./componentes/Loading");

function App() {
  const [cargando, setCargando] = useState(false);
  const [muestraFormulario, setMuestraFormulario] = useState("");
  const [notas, setNotas] = useState(notasJSON.notas);
  const [letrasAulas, setLetrasAulas] = useState([]);
  const cierraFormulario = () => setMuestraFormulario("");
  const abreFormulario = aula => setMuestraFormulario(aula);
  useEffect(() => {
    setLetrasAulas(
      notas
        .map(nota => nota.aula)
        .filter((letra, i, arr) => arr.indexOf(letra) === i)
    )
  }, [notas]);
  return (
    <>
      <Navegacion />
      <main className="container">
        <div className="row form-nueva">
          <div className="col-12 col-lg-8 offset-lg-2">
            {muestraFormulario && <NuevaNota aula={muestraFormulario} onCierraFormulario={cierraFormulario} />}
          </div>
        </div>
        <div className="row">
          {
            letrasAulas.map(letraAula =>
              <Aula
                letra={letraAula}
                key={letraAula}
                muestraFormulario={muestraFormulario}
                onAbreFormulario={abreFormulario}
              />
            )
          }
        </div>
      </main>
      {
        cargando && <Loading />
      }
    </>
  );
}

export default App;
