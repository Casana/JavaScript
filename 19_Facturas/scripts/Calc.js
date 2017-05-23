// Crear un único objeto que calcule importe de factura (por consola)

let Factura = {

        empresa: {
            nombre: "My Journey SA",
            direccion: "C/ Gran via 10, 2ºC",
            teléfono: "957 444 333",
            CIF: "X-55443311",
        },

        cliente: {
            nombre: "Fundacion Tajamar",
            direccion: "c/Pio Felipe 12",
            teléfono: "918 56 54 51",
            CIF: "",
        },

        productos: [
            { descripcion: "Banners", cantidad: 5, precio: 90 },
            { descripcion: "SuperBanners", cantidad: 3, precio: 150 },
            { descripcion: "RobaPáginas", cantidad: 8, precio: 120 },
            { descripcion: "Rascacielos", cantidad: 4, precio: 110 }
        ],

        informacion: {
            importetotal: { value: "" },
            tipodeIVA: { value: "" },
            formadepago: { value: "" },
        }