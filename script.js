const catalogo = document.getElementById("catalogo");
if (!catalogo) return;

const WHATSAPP = "5216647594788";
const BASE_URL = "https://tiyeicaps.github.io/Tj";
const MAX = 100;

/* ======================
   GORRAS $500 (NUMÉRICAS)
====================== */
for (let i = 1; i <= MAX; i++) {
  intentarCargar(`${i}.jpg`, "$500 MXN");
  intentarCargar(`${i}.jpeg`, "$500 MXN");
}

/* ======================
   GORRAS $600 (ALFABÉTICAS a*)
====================== */
const letras = "abcdefghijklmnopqrstuvwxyz".split("");

letras.forEach(letra => {
  for (let i = 1; i <= MAX; i++) {
    intentarCargar(`${letra}${i}.jpg`, "$600 MXN");
    intentarCargar(`${letra}${i}.jpeg`, "$600 MXN");
  }
});

/* ======================
   FUNCIÓN GENERAL
====================== */
function intentarCargar(nombre, precio) {
  const ruta = `img/${nombre}`;

  const imgTest = new Image();
  imgTest.src = ruta;

  imgTest.onload = () => {
    // evitar duplicados
    if (catalogo.querySelector(`img[src="${ruta}"]`)) return;

    const card = document.createElement("div");
    card.className = "gorra";

    const img = document.createElement("img");
    img.src = ruta;
    img.alt = "Gorra Tiyei Caps";

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
  };
}
