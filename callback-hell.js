"use strict";
const empleados = [
    {
        id: 1,
        nombre: 'Tanelo'
    },
    {
        id: 2,
        nombre: 'Patricio'
    },
    {
        id: 3,
        nombre: 'Génesis'
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);
    if (empleado) {
        callback(null, empleado);
    }
    else {
        callback(`El empleado con id ${id} no existe.`);
    }
};
getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    ;
    console.log('Empleado existe!');
    console.log(empleado);
});
const getSalario = (id, callback) => {
    const emp = (_a = salarios.find(e => e.id == id)) === null || _a === void 0 ? void 0 : _a.salario; //Null check operator
    if (emp) {
        callback(null, emp);
    }
    else {
        callback(`Empleado no tiene sueldo/ no existe empleado`);
    }
};
getSalario(2, (error, empleado) => {
    if (error) {
        console.log('¡¡¡ERROR!!!');
        return console.log(error);
    }
    else {
        console.log('Empleado encontrado');
        return console.log(empleado);
    }
});
