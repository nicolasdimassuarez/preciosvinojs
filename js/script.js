function saludar() {
    alert("Hola, ¡Bienvenido al Club del vino!");
    let nombres = ['Nicolas', 'Daiana', 'Eduardo', 'Claudia', 'Miriam', 'Juan Carlos', 'Yamila'];

    let nuevoUsuario = '';
    do {
        if (nuevoUsuario !== '') {
            alert('El nombre de usuario ya existe, ingrese uno nuevo.');
        }
        nuevoUsuario = prompt('Ingrese su nombre de usuario');

    } while (nombres.includes(nuevoUsuario));

    nombres.push(nuevoUsuario);
    console.log(nombres);
    alert('El nombre ingresado se registro con exito.');
}


class Servicios {
    constructor(id, nombre, precio) {
        this.id = id,
            this.nombre = nombre,
            this.precio = Number(precio)
    }
}

arrayServicios = [];

const servicios1 = new Servicios(1, 'Caja Luigi Bosca', 27800);
const servicios2 = new Servicios(2, 'Caja Rutini Malbec', 26500);
const servicios3 = new Servicios(3, 'Cajas Camenere', 19000);

arrayServicios.push(servicios1, servicios2, servicios3);


const ordenarMayorMenor = () => {
    arrayServicios.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const array = [];
    arrayServicios.forEach(servicios => array.push(servicios.nombre + ' $' + servicios.precio));
    alert('Lista de precio: ' + '\n' + array.join('\n'));
};

const comprar = () => {
    if (confirm('Deseas visualizar el listado de promociones que tenemos en stock?')) {
        ordenarMayorMenor();
    }
}

function mostrarServicios() {
    let servicioId;

    do {
        servicioId = prompt("Que promoción desea adquirir? : \n1)Caja Luigi Bosca\n2)Caja Rutini Malbec\n3)Caja Camenere")
    } while (servicioId != 1 && servicioId != 2 && servicioId != 3)
    switch (servicioId) {
        case "1":
            return "Caja Luigi Bosca";
        case "2":
            return "Caja Rutini Malbec";
        case "3":
            return "Caja Camenere";

    }
}

function validarPrecio(nombre) {
    if (nombre === "Caja Luigi Bosca") {
        return 27800;
    } else if (nombre === "Caja Rutini Malbec") {
        return 26500;
    } else if (nombre === "Caja Camenere") {
        return 19000;
    }
}


function cobrarServicio(nombre, precio) {
    alert("Usted eligio: " + nombre.toUpperCase() + ".\nEl precio de la promocion es de $" + precio);
    let pago = prompt("Con cuanto abona?");
    if (precio < pago) {
        alert("Su vuelto es $" + (pago - precio))
    } else if (precio = pago) {
        alert("Gracias por adquirir este servicio")
    }

}

saludar();
comprar();
let nombreServicio = mostrarServicios();
let precioServicio = validarPrecio(nombreServicio);
cobrarServicio(nombreServicio, precioServicio);