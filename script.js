const ataques = {
    gabu: [
        { nombre: "Bazuca de Trueno", imagen: "imagen/bazucagabu.png" },
        { nombre: "Embate Electrico", imagen: "imagen/embate.png" },
        { nombre: "Embate Electrico", imagen: "imagen/embate.png" }

    ],
    ace: [
        { nombre: "Ciclón", imagen: "imagen/ciclonace.png" },
        { nombre: "Ataque Ninja", imagen: "imagen/ninjaace.png" },
        { nombre: "Viento Maximo", imagen: "imagen/vienmaximo.png" }
    ],
    paris: [
        { nombre: "Ala de Acero", imagen: "imagen/alaacero-paris.png" },
        { nombre: "Ataque Gigante", imagen: "imagen/gigante-paris.png" },
        { nombre: "Impulso Verde", imagen: "imagen/impverde.png" }
    ]
};

// Guarda en qué ataque va cada dino (empiezan en 0)
const indiceActual = { gabu: 0, ace: 0, paris: 0 };

const mensajeRugido = document.getElementById("mensaje-rugido");
const imagenRey = document.getElementById("dinoImg");

function lanzarAtaque(dino) {
    const opciones = ataques[dino];
    const ataque = opciones[indiceActual[dino]];

    mensajeRugido.innerHTML = `
        <div class="tarjeta-ataque">
            <span class="texto-ataque">${ataque.nombre}</span>
            <img src="${ataque.imagen}" alt="${ataque.nombre}" />
        </div>
    `;

    // Avanza al siguiente ataque; al llegar al final, vuelve al primero
    indiceActual[dino] = (indiceActual[dino] + 1) % opciones.length;

    imagenRey.style.transform = "scale(1.08)";
    setTimeout(() => {
        imagenRey.style.transition = "transform 0.3s ease";
        imagenRey.style.transform = "scale(1)";
    }, 150);
}

document.getElementById("gabu-btn").addEventListener("click", () => lanzarAtaque("gabu"));
document.getElementById("ace-btn").addEventListener("click", () => lanzarAtaque("ace"));
document.getElementById("paris-btn").addEventListener("click", () => lanzarAtaque("paris"));