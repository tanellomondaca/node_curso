"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleados = void 0;
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
const salarios = [
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
        const salario = (_a = salarios.find((s) => s.id == id)) === null || _a === void 0 ? void 0 : _a.salario;
        if (salario) {
            resolve(salario);
        }
        else {
            reject(`El empleado con id ${id} no tiene salario.`);
        }
    });
};
const id = 1;
let nombre;
const getInfoUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empleado = yield getEmpleado(id);
        const salario = yield getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    }
    catch (error) {
        return error;
    }
});
getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(error => console.log(error));
// getSalario(id)
//     .then((salario) => console.log(`El salario es de ${salario}`))
//     .catch((error) => console.log(error));
// getEmpleado(id)
//     .then((empleado) => {
//         nombre = empleado;
//         return getSalario(id);
//     })
//     .then((salario) =>
//         console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
//     )
//     .catch((error) => console.log(error));
