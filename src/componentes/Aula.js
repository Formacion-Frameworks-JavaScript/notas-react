import { useEffect, useState } from "react";
import almacenNotas from "../datos/almacenNotas";
import { Nota } from "./Nota";
import { Totales } from "./Totales";

export const Aula = props => {
    const {
        letra,
        muestraFormulario,
        onAbreFormulario,
        onBorraNota,
        onModificaNota
    } = props;
    const [notas, setNotas] = useState([]);
    useEffect(() => {
        almacenNotas.suscribirse(notas => setNotas(notas.filter(nota => nota.aula === letra)));
    }, [letra]);
    return (
        <div className="col">
            <div className="card">
                <div className="header row">
                    <h2 className="col-10">Aula {letra} <span>({notas.length} alumnos)</span></h2>
                    {
                        !muestraFormulario &&
                        <div className="col-2 anyadir">
                            <a href="#">
                                <i onClick={() => onAbreFormulario(letra)} className="fa fa-plus-circle"></i>
                            </a>
                        </div>
                    }
                </div>
                <div className="card-body">
                    <table className="table table-bordered tabla-alumnos">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Nota</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                notas.map(alumno =>
                                    <Nota
                                        key={alumno.id}
                                        alumno={alumno}
                                        onBorraNota={onBorraNota}
                                        onModificaNota={onModificaNota}
                                    />
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <Totales notas={notas} />
            </div>
        </div>
    )
}