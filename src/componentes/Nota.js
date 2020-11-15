import { useState } from "react";

export const Nota = props => {
    const { alumno, onBorraNota, onModificaNota } = props;
    const [editando, setEditando] = useState(false);
    const [nuevaNota, setNuevaNota] = useState(alumno.nota);
    const resetEdit = () => {
        setEditando(false);
        setNuevaNota(alumno.nota);
    }
    const saveEdit = () => {
        setEditando(false);
        onModificaNota(alumno.id, +nuevaNota);
    }
    return (
        <tr className={alumno.nota >= 5 ? "table-success" : "table-danger"}>
            <td>{alumno.nombre}</td>
            <td>{alumno.apellido}</td>
            <td className="text-center">
                <span onClick={() => setEditando(true)}>{alumno.nota}</span>
                {
                    editando &&
                    <div className="cambia-nota">
                        <input autoFocus value={nuevaNota} onChange={e => setNuevaNota(e.target.value > 10 ? 10 : (e.target.value < 0 ? 0 : e.target.value))} className="form-control" type="number" />
                        <i onClick={resetEdit} className="fa fa-times-circle"></i>
                        <i onClick={saveEdit} className="fa fa-check-circle"></i>
                    </div>
                }
            </td>
            <td>
                <a href="#" className="borrar" onClick={e => { e.preventDefault(); onBorraNota(alumno) }}>
                    <i className="fa fa-times-circle"></i>
                </a>
            </td>
        </tr>
    )
}