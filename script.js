// lista de cartas
const cartas = [
    {
        nombre: "El Loco",
        significado: "Representa los nuevos comienzos, la aventura, la espontaneidad y tener fe en el futuro. Es un salto de fe."
    },
    {
        nombre: "El Mago",
        significado: "Simboliza el poder manifestado, la iniciativa, la concentración y la capacidad de usar tus recursos para lograr tus metas."
    },
    {
        nombre: "La Sacerdotisa",
        significado: "Representa la intuición, los misterios, el subconsciente y la necesidad de escuchar tu voz interior."
    },
    {
        nombre: "La Emperatriz",
        significado: "Simboliza la abundancia, la naturaleza, la creatividad, la fertilidad y el crecimiento personal."
    },
    {
        nombre: "El Emperador",
        significado: "Representa la autoridad, la estructura, la estabilidad, el control y el poder de la lógica sobre las emociones."
    }
];

const boton = document.getElementById('btn-tarot');
const resultadoDiv = document.getElementById('resultado');
const nombreCarta = document.getElementById('nombre-carta');
const textoSignificado = document.getElementById('texto-significado');

// obtener fecha hoy yyyy-mm-dd
function obtenerFechaHoy() {
    const hoy = new Date();
    return `${hoy.getFullYear()}-${hoy.getMonth() + 1}-${hoy.getDate()}`;
}

// mostrar carta en pantalla
function mostrarCarta(carta) {
    nombreCarta.textContent = carta.nombre;
    textoSignificado.textContent = carta.significado;
    resultadoDiv.classList.remove('oculto');
}

// verificación de usuario
window.addEventListener('DOMContentLoaded', () => {
    const fechaGuardada = localStorage.getItem('tarot_fecha');
    const fechaHoy = obtenerFechaHoy();

    // Si la fecha guardada es la de hoy, cargamos la carta que ya le había salido
    if (fechaGuardada === fechaHoy) {
        const cartaGuardada = JSON.parse(localStorage.getItem('tarot_carta'));
        mostrarCarta(cartaGuardada);
        boton.disabled = true;
        boton.textContent = "Ya sacaste tu carta de hoy";
        boton.style.background = "#555"; // Cambia el botón a gris
    }
});

boton.addEventListener('click', () => {
    const fechaHoy = obtenerFechaHoy();

    // Seleccionar una carta al azar
    const indiceAleatorio = Math.floor(Math.random() * cartas.length);
    const cartaSeleccionada = cartas[indiceAleatorio];

    // Guardar la carta y la fecha de hoy en la memoria del navegador del usuario
    localStorage.setItem('tarot_fecha', fechaHoy);
    localStorage.setItem('tarot_carta', JSON.stringify(cartaSeleccionada));

    // Mostrar el resultado
    mostrarCarta(cartaSeleccionada);

    // Desactivar el botón para que no pueda pulsar más
    boton.disabled = true;
    boton.textContent = "Ya sacaste tu carta de hoy";
    boton.style.background = "#555";
});