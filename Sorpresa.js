
// ==============================
// CARTA
// ==============================

const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});


// ==============================
// SOPLIDO + CANCIÓN
// ==============================

const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", async () => {

  // Reiniciar el sonido del soplido
  soplido.currentTime = 0;

  try {
    await soplido.play();
  } catch (error) {
    console.log("No se pudo reproducir el soplido:", error);
  }

  // Apagar la llama
  llama.style.animation = "apagar 0.5s forwards";

  // Oscurecer la pantalla
  overlay.classList.add("hidden");

  // Esperar un segundo y reproducir la canción
  setTimeout(async () => {

    cancion.currentTime = 0;

    try {
      await cancion.play();
    } catch (error) {
      console.log("No se pudo reproducir la canción:", error);
    }

  }, 1000);
});

