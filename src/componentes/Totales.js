import { useEffect, useState } from "react";
import { Estadistica } from "./Estadistica";

export const Totales = props => {
    const { notas } = props;
    const [totales, setTotales] = useState({
        media: 0,
        maxima: 0,
        nAprobados: 0,
        pAprobados: 0,
        nSuspensos: 0,
        pSuspensos: 0
    });
    useEffect(() => {
        const media = notas.reduce((acc, nota) => acc + nota.nota, 0) / notas.length;
        const maxima = notas.reduce((acc, nota) => nota.nota > acc ? nota.nota : acc, 0);
        const nAprobados = notas.filter(nota => nota.nota >= 5).length;
        const pAprobados = nAprobados / notas.length * 100;
        const nSuspensos = notas.length - nAprobados;
        const pSuspensos = 100 - pAprobados;
        setTotales({ media, maxima, nAprobados, pAprobados, nSuspensos, pSuspensos });
    }, [notas]);
    return (
        <div className="card-footer totales">
            <div className="row">
                <div className="col">
                    <Estadistica titulo="Nota media" dato={totales.media} conIcono truncado />
                </div>
                <div className="col">
                    <Estadistica titulo="Máxima nota" dato={totales.maxima} conIcono />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Estadistica titulo="Aprobados" dato={totales.nAprobados} porcentaje={totales.pAprobados} />
                </div>
                <div className="col">
                    <Estadistica titulo="Suspensos" dato={totales.nSuspensos} porcentaje={totales.pSuspensos} />
                </div>
            </div>
        </div>
    )
}