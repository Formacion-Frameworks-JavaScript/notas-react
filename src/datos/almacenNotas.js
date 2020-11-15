import notasJSON from "./notas.json";

let notas = [];
let suscripciones = [];

const avisa = () => suscripciones.forEach(cb => cb(notas));

const loadNotas = () => {
    notas = notasJSON.notas;
    avisa();
}

const suscribirse = cb => {
    suscripciones.push(cb);
    cb(notas);
}

const borraNota = nota => {
    notas = notas.filter(n => n !== nota);
    avisa();
}

const modificaNota = (id, nota) => {
    notas = notas.map(n => {
        if (n.id === id) {
            return {
                ...n,
                nota
            }
        } else {
            return n;
        }
    });
    avisa();
}

const creaNota = nota => {
    nota.id = notas[notas.length - 1].id + 1;
    notas = [...notas, nota];
    avisa();
}

loadNotas();

export default {
    notas,
    suscribirse,
    borraNota,
    modificaNota,
    creaNota
}