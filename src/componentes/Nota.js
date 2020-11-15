export const Nota = props => {
    const { alumno, onBorraNota } = props;
    return (
        <tr className={alumno.nota >= 5 ? "table-success" : "table-danger"}>
            <td>{alumno.nombre}</td>
            <td>{alumno.apellido}</td>
            <td className="text-center">
                <span>{alumno.nota}</span>
                <div className="cambia-nota" hidden>
                    <input autoFocus className="form-control" type="number" />
                    <i className="fa fa-times-circle"></i>
                    <i className="fa fa-check-circle"></i>
                </div>
            </td>
            <td>
                <a href="#" className="borrar" onClick={e => { e.preventDefault(); onBorraNota(alumno) }}>
                    <i className="fa fa-times-circle"></i>
                </a>
            </td>
        </tr>
    )
}