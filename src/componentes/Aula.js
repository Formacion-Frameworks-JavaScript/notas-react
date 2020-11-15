export const Aula = props => {
    return (
        <div className="col">
            <div className="card">
                <div className="header row">
                    <h2 className="col-10">Aula A <span>(2 alumnos)</span></h2>
                    <div className="col-2 anyadir">
                        <a href="#">
                            <i className="fa fa-plus-circle"></i>
                        </a>
                    </div>
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
                            <tr className="table-danger">
                                <td>Mario</td>
                                <td>González</td>
                                <td className="text-center">4</td>
                                <td>
                                    <a href="#" className="borrar">
                                        <i className="fa fa-times-circle"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>Juan</td>
                                <td>González</td>
                                <td className="text-center">8</td>
                                <td>
                                    <a href="#" className="borrar">
                                        <i className="fa fa-times-circle"></i>
                                    </a>
                                </td>
                            </tr>
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