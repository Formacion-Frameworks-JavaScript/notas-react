import { Aula } from "./componentes/Aula";
import { Navegacion } from "./componentes/Navegacion";
import { NuevaNota } from "./componentes/NuevaNota";

const { Loading } = require("./componentes/Loading");

function App() {
  const cargando = false;
  const muestraFormulario = false;
  const letrasAulas = ["A", "B", "C"];
  return (
    <>
      <Navegacion />
      <main className="container">
        <div className="row form-nueva">
          <div className="col-12 col-lg-8 offset-lg-2">
            {muestraFormulario && <NuevaNota />}
          </div>
        </div>
        <div className="row">
          <Aula letra={letrasAulas[0]} />
          <Aula letra={letrasAulas[1]} />
          <Aula letra={letrasAulas[2]} />
        </div>
      </main>
      {
        cargando && <Loading />
      }
    </>
  );
}

export default App;
