// Crear un único objeto que calcule importe de factura (por consola)

 let Factura = {

    empresa: {
        nombre: "My Journey SA",
        direccion: "C/ Gran via 10, 2ºC",
        teléfono: "957 444 333",
        CIF: "X-55443311",
    },

    cliente: {
        nombre:{value:""},
        direccion: {value:""},
        teléfono: {value:""},
        CIF: {value:""},
    },

    productos: [
        {articulo:{value:""}, descripcion:{value:""}, cantidad: {value:""}, precio: {value:""}
    ],

    informacion: {
        importetotal: {value:""},
        tipodeIVA: {value:""},
        formadepago: {value:""},
    }



