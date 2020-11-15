import { useEffect, useState } from "react";
import almacenNotas from "../datos/almacenNotas";
import { useTotales } from "../hooks/useTotales";
import { Estadistica } from "./Estadistica"

export const PaginaEstadisticas = () => {
    const [notas, setNotas] = useState([]);
    useEffect(() => {
        const suscripcion = almacenNotas.suscribirse(notas => setNotas(notas));
        return () => almacenNotas.desuscribirse(suscripcion);
    }, []);
    const totales = useTotales(notas);
    return (
        <>
            <main className="container">
                <div className="row totales">
                    <div className="col">
                        <div className="card">
                            <div className="header">
                                <h2>Estadísticas</h2>
                            </div>
                            <div className="card-body row">
                                <div className="col">
                                    <Estadistica titulo="Nota media" dato={totales.media} truncado conIcono />
                                </div>
                                <div className="col">
                                    <Estadistica titulo="Maxima nota" dato={totales.maxima} conIcono />
                                </div>
                                <div className="col">
                                    <Estadistica titulo="Aprobados" dato={totales.nAprobados} porcentaje={totales.pAprobados} />
                                </div>
                                <div className="col">
                                    <Estadistica titulo="Suspensos" dato={totales.nSuspensos} porcentaje={totales.pSuspensos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="loading" hidden>
                <img src="img/loading.svg" alt="cargando" />
            </div>
        </>
    )
}