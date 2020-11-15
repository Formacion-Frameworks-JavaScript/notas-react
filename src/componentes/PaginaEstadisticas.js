export const PaginaEstadisticas = () => {
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
                                    <div className="card">
                                        <div className="card-header">Nota media</div>
                                        <div className="card-body numbers">4.5</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">Máxima nota</div>
                                        <div className="card-body numbers">4.5</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">Aprobados</div>
                                        <div className="card-body numbers">4 (30%)</div>
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
            </main>
            <div className="loading" hidden>
                <img src="img/loading.svg" alt="cargando" />
            </div>
        </>
    )
}