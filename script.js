const catalogo = document.getElementById("catalogo");
if (!catalogo) return;

const WHATSAPP = "5216647594788";
const BASE_URL = "https://tiyeicaps.github.io/Tj";
const MAX = 100;

/* ======================
   UTILIDADES
====================== */

// crea una gorra
function crearGorra(nombre, precio) {
  const ruta = `img/${nombre}`;

  const card = document.createElement("div");
  card.className = "gorra";

  const img = document.createElement("img");
  img.src = ruta;
  img.alt = "Gorra Tiyei Caps";

  img.onerror = () => card.remove();

  const tag = document.createElement("span");
  tag.className = "precio-tag";
  tag.textContent = precio;

  const botones = document.createElement("div");
  botones.className = "botones";

  const mensaje = `Me interesa esta gorra (${precio}):\n${BASE_URL}/${ruta}`;

  const link = document.createElement("a");
  link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  link.target = "_blank";
  link.className = "btn-sm";
  link.textContent = "🧢 Pedir gorra";

  botones.appendChild(link);
  card.appendChild(tag);
  card.appendChild(img);
  card.appendChild(botones);
  catalogo.appendChild(card);
}

// título visual
function titulo(texto) {
  const h2 = document.createElement("h2");
  h2.className = "titulo-seccion";
  h2.textContent = texto;
  catalogo.appendChild(h2);
}

/* ======================
   $500 – NUMÉRICAS
====================== */

titulo("Gorras Full Exclusivas · $500 MXN");

for (let i = 1; i <= MAX; i++) {
  crearGorra(`${i}.jpg`, "$500 MXN");
  crearGorra(`${i}.jpeg`, "$500 MXN");
}

/* ======================
   $600 – ALFABÉTICAS
====================== */

titulo("Gorras Full Exclusivas Gamuza y Piedrería · $600 MXN");

const letras = "abcdefghijklmnopqrstuvwxyz".split("");

letras.forEach(letra => {
  for (let i = 1; i <= MAX; i++) {
    crearGorra(`${letra}${i}.jpg`, "$600 MXN");
    crearGorra(`${letra}${i}.jpeg`, "$600 MXN");
  }
});
