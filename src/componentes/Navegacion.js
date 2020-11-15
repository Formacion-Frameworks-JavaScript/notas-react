export const Navegacion = props => {
    return (
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
    )
}