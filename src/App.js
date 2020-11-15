import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Aula } from "./componentes/Aula";
import { Navegacion } from "./componentes/Navegacion";
import { NotFound } from "./componentes/NotFound";
import { NuevaNota } from "./componentes/NuevaNota";
import { PaginaEstadisticas } from "./componentes/PaginaEstadisticas";
import { PaginaNotas } from "./componentes/PaginaNotas";
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
      <Switch>
        <Route path="/notas">
          <PaginaNotas />
        </Route>
        <Route path="/estadisticas">
          <PaginaEstadisticas />
        </Route>
        <Route path="/" exact>
          <Redirect to="/notas" />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
