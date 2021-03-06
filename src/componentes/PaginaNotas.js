import { useEffect, useState } from "react";
import { Aula } from "./Aula";
import almacenNotas from "../datos/almacenNotas";
import { NuevaNota } from "./NuevaNota";
import notasJSON from "../datos/notas.json";
import { Loading } from "./Loading";

export const PaginaNotas = () => {
    const [cargando, setCargando] = useState(false);
    const [muestraFormulario, setMuestraFormulario] = useState("");
    const [notas, setNotas] = useState([]);
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
    useEffect(() => {
        const suscripcion = almacenNotas.suscribirse(notas => setNotas(notas));
        return () => almacenNotas.desuscribirse(suscripcion);
    }, []);
    return (
        <>
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
