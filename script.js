const catalogo = document.getElementById("catalogo");
const TOTAL_GORRAS = 50; // pon un máximo alto sin miedo
const WHATSAPP = "5216647594788";
const BASE_URL = "https://tiyeicaps.netlify.app";

for (let i = 1; i <= TOTAL_GORRAS; i++) {

  const card = document.createElement("div");
  card.className = "gorra";

  const img = document.createElement("img");
  img.src = `img/${i}.jpeg`;
  img.alt = `Gorra ${i}`;

  // 👇 SI LA IMAGEN NO EXISTE → SE ELIMINA LA TARJETA
  img.onerror = () => {
    card.remove();
  };

  const botones = document.createElement("div");
  botones.className = "botones";

  const mensaje =
    `Me interesa esta gorra.\n` +
    `Foto: ${BASE_URL}/img/${i}.jpeg`;

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

console.log("Catálogo cargado dinámicamente");

