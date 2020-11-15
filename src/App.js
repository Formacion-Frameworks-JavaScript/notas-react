import { Aula } from "./componentes/Aula";
import { Navegacion } from "./componentes/Navegacion";
import { NuevaNota } from "./componentes/NuevaNota";

const { Loading } = require("./componentes/Loading");

function App() {
  const cargando = false;
  const muestraFormulario = false;
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
          <Aula />
          <Aula />
          <Aula />
        </div>
      </main>
      {
        cargando && <Loading />
      }
    </>
  );
}

export default App;
