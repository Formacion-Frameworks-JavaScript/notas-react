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
  const borraNota = nota => {
    setNotas(notas.filter(n => n !== nota));
  }
  const modificaNota = (id, nota) => {
    setNotas(notas.map(n => {
      if (n.id === id) {
        return {
          ...n,
          nota
        }
      } else {
        return n;
      }
    }))
  }
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
                notas={notas.filter(nota => nota.aula === letraAula)}
                muestraFormulario={muestraFormulario}
                onAbreFormulario={abreFormulario}
                onBorraNota={borraNota}
                onModificaNota={modificaNota}
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
