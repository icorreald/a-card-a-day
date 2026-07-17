// Lista de cartas de tarot con sus significados
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

boton.addEventListener('click', () => {
    // Seleccionar una carta al azar
    const indiceAleatorio = Math.floor(Math.random() * cartas.length);
    const cartaSeleccionada = cartas[indiceAleatorio];

    // Mostrar los datos en la pantalla
    nombreCarta.textContent = cartaSeleccionada.nombre;
    textoSignificado.textContent = cartaSeleccionada.significado;

    // Quitar la clase 'oculto' para que se vea el resultado
    resultadoDiv.classList.remove('oculto');
});