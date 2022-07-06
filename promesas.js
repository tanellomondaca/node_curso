"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salarios = exports.empleados = void 0;
exports.empleados = [
    {
        id: 1,
        nombre: "Tanelo",
    },
    {
        id: 2,
        nombre: "Patricio",
    },
    {
        id: 3,
        nombre: "Génesis",
    },
];
exports.salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const emp = exports.empleados.find((s) => s.id == id).nombre;
        if (emp) {
            resolve(emp);
        }
        else {
            reject(`El empleado con id ${id} no existe.`);
        }
    });
};
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        var _a;
        const salario = (_a = exports.salarios.find((s) => s.id == id)) === null || _a === void 0 ? void 0 : _a.salario;
        if (salario) {
            resolve(salario);
        }
        else {
            reject(`El empleado con id ${id} no tiene salario.`);
        }
    });
};
const id = 2;
let nombre;
// getSalario(id)
//     .then((salario) => console.log(`El salario es de ${salario}`))
//     .catch((error) => console.log(error));
getEmpleado(id)
    .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
})
    .then((salario) => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch((error) => console.log(error));
