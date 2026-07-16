// ===============================
// THRIVE - PANEL DEL EMPRENDEDOR
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Estadísticas
    const estadisticas = {
        pedidos: 12,
        ventas: "$520",
        productos: 18,
        calificacion: 4.9
    };

    // Actualizar contador de pedidos
    const pedidos = document.getElementById("pedidos");

    if (pedidos) {
        pedidos.textContent = estadisticas.pedidos;
    }

    // ===============================
    // Barra de búsqueda
    // ===============================

    const buscador = document.querySelector("input[type='text']");

    if (buscador) {

        buscador.addEventListener("keyup", function () {

            const texto = this.value.toLowerCase();

            const tarjetas = document.querySelectorAll(".bg-gray-50");

            tarjetas.forEach(tarjeta => {

                const nombre = tarjeta.innerText.toLowerCase();

                if (nombre.includes(texto)) {

                    tarjeta.style.display = "block";

                } else {

                    tarjeta.style.display = "none";

                }

            });

        });

    }

    // ===============================
    // Botones editar producto
    // ===============================

    const editar = document.querySelectorAll("button");

    editar.forEach(boton => {

        if (boton.textContent.includes("Editar producto")) {

            boton.addEventListener("click", () => {

                alert("Aquí podrás editar el producto.");

            });

        }

    });

    // ===============================
    // Agregar producto
    // ===============================

    const agregar = [...document.querySelectorAll("button")]
        .find(btn => btn.textContent.includes("Agregar nuevo producto"));

    if (agregar) {

        agregar.addEventListener("click", () => {

            alert("Aquí se abrirá el formulario para agregar un nuevo producto.");

        });

    }

    // ===============================
    // Ferias
    // ===============================

    const feria = [...document.querySelectorAll("button")]
        .filter(btn =>
            btn.textContent.includes("Inscribirme") ||
            btn.textContent.includes("Ver información")
        );

    feria.forEach(btn => {

        btn.addEventListener("click", () => {

            alert("Próximamente podrás inscribirte a las ferias desde Thrive.");

        });

    });

    // ===============================
    // Notificación al entrar
    // ===============================

    setTimeout(() => {

        console.log("Bienvenido al Panel del Emprendedor.");

    }, 500);

});