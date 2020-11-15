export const Nota = props => {
    const { alumno } = props;
    return (
        <tr className={alumno.nota >= 5 ? "table-success" : "table-danger"}>
            <td>{alumno.nombre}</td>
            <td>{alumno.apellido}</td>
            <td class="text-center">
                <span>{alumno.nota}</span>
                <div class="cambia-nota" hidden>
                    <input autoFocus class="form-control" type="number" />
                    <i class="fa fa-times-circle"></i>
                    <i class="fa fa-check-circle"></i>
                </div>
            </td>
            <td>
                <a href="#" className="borrar">
                    <i className="fa fa-times-circle"></i>
                </a>
            </td>
        </tr>
    )
}