const catalogo = document.getElementById("catalogo");

if (catalogo) {

  const TOTAL = 50;
  const WHATSAPP = "5216647594788";
  const BASE_URL = "https://tiyeicaps.github.io/Tj";

  /* ========= TITULO $500 ========= */
  agregarTitulo("Gorras Full Exclusivas · $500 MXN");

  /* ========= GORRAS NUMÉRICAS ========= */
  for (let i = 1; i <= TOTAL; i++) {
    cargarGorra(`${i}.jpg`, "$500 MXN");
    cargarGorra(`${i}.jpeg`, "$500 MXN");
  }

  /* ========= TITULO $600 ========= */
  agregarTitulo("Gorras Full Exclusivas Gamuza y Piedrería · $600 MXN");

  /* ========= GORRAS CON LETRA ========= */
  ["a", "b"].forEach(letra => {
    for (let i = 1; i <= TOTAL; i++) {
      cargarGorra(`${letra}${i}.jpg`, "$600 MXN");
      cargarGorra(`${letra}${i}.jpeg`, "$600 MXN");
    }
  });

  /* ========= FUNCIONES ========= */

  function agregarTitulo(texto) {
    const h2 = document.createElement("h2");
    h2.className = "titulo-seccion";
    h2.textContent = texto;
    catalogo.appendChild(h2);
  }

  function cargarGorra(nombre, precio) {
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
}
