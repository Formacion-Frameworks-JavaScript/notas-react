export const NuevaNota = props => {
    return (
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
    )
}