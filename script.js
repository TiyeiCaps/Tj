const catalogo = document.getElementById("catalogo");

if (catalogo) {

  const TOTAL_GORRAS = 50; // puedes subirlo si quieres
  const WHATSAPP = "5216647594788";
  const BASE_URL = "https://tiyeicaps.github.io/Tj";

  for (let i = 1; i <= TOTAL_GORRAS; i++) {

    // probar JPG
    crearGorra(`${i}.jpg`);

    // probar JPEG
    crearGorra(`${i}.jpeg`);
  }

  function crearGorra(nombreArchivo) {
    const card = document.createElement("div");
    card.className = "gorra";

    const img = document.createElement("img");
    img.src = `img/${nombreArchivo}`;
    img.alt = `Gorra ${nombreArchivo}`;

    img.onerror = () => card.remove();

    const botones = document.createElement("div");
    botones.className = "botones";

    const mensaje = `Me interesa esta gorra:\n${BASE_URL}/img/${nombreArchivo}`;

    const link = document.createElement("a");
    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    link.target = "_blank";
    link.className = "btn-sm";
    link.textContent = "🧢 Pedir gorra";

    botones.appendChild(link);
    card.appendChild(img);
    card.appendChild(botones);
    catalogo.appendChild(card);
  }
}
