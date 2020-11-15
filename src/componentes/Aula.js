import { Nota } from "./Nota";

export const Aula = props => {
    const { letra, notas, muestraFormulario, onAbreFormulario } = props;
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
                                    <Nota key={alumno.id} alumno={alumno} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="card-footer totales">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">Nota media</div>
                                <div className="card-body numbers">4.5</div>
                                <i className="fa fa-smile icono-status icono-ok"></i>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">Máxima nota</div>
                                <div className="card-body numbers">4.5</div>
                                <i className="fa fa-frown icono-status icono-no-ok"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">Aprobados</div>
                                <div className="card-body numbers">40 (100%)</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">Suspensos</div>
                                <div className="card-body numbers">4 (30%)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}