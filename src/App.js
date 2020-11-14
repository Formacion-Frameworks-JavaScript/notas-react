const { Loading } = require("./componentes/Loading");

function App() {
  const cargando = false;
  return (
    <>
      <header className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1 className="navbar-brand">Notas App</h1>
          </div>
          <nav className="nav navbar-nav navbar-right menu">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item"><a href="#" className="activo">Listado de notas</a></li>
              <li className="list-inline-item"><a href="#">Estadísticas</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        <div className="row form-nueva" hidden>
          <div className="col-12 col-lg-8 offset-lg-2">
            <div className="card">
              <div className="card-header">
                <span>Nueva nota aula A</span>
                <i className="fa fa-minus-circle"></i>
              </div>
              <form className="card-body">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" className="form-control" id="nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidos">Apellidos:</label>
                  <input type="text" className="form-control" id="apellidos" required />
                </div>
                <div className="form-group">
                  <label htmlFor="nota">Nota:</label>
                  <input type="number" className="form-control form-control-sm" id="nota" required />
                </div>
                <button className="btn btn-primary">añadir</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
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
                      <td className="text-center">
                        <span>4</span>
                        <div className="cambia-nota" hidden>
                          <input autoFocus className="form-control" type="number" />
                          <i className="fa fa-times-circle"></i>
                          <i className="fa fa-check-circle"></i>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="borrar">
                          <i className="fa fa-times-circle"></i>
                        </a>
                      </td>
                    </tr>
                    <tr className="table-success">
                      <td>Juan</td>
                      <td>González</td>
                      <td className="text-center">
                        <span>8</span>
                        <div className="cambia-nota" hidden>
                          <input autoFocus className="form-control" type="number" />
                          <i className="fa fa-times-circle"></i>
                          <i className="fa fa-check-circle"></i>
                        </div>
                      </td>
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
        </div>
      </main>
      {
        cargando && <Loading />
      }
    </>
  );
}

export default App;
