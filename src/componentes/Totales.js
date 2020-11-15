import { useEffect, useState } from "react";

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
    const clasesIconos = n => `fa-${n >= 5 ? "smile" : "frown"} icono-${n >= 5 ? "ok" : "no-ok"}`;
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
                    <div className="card">
                        <div className="card-header">Nota media</div>
                        <div className="card-body numbers">{totales.media.toFixed(2)}</div>
                        <i className={`fa icono-status ${clasesIconos(totales.media)}`}></i>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">Máxima nota</div>
                        <div className="card-body numbers">{totales.maxima}</div>
                        <i className={`fa icono-status ${clasesIconos(totales.maxima)}`}></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">Aprobados</div>
                        <div className="card-body numbers">{totales.nAprobados} ({totales.pAprobados.toFixed(2)}%)</div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">Suspensos</div>
                        <div className="card-body numbers">{totales.nSuspensos} ({totales.pSuspensos.toFixed(2)}%)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}