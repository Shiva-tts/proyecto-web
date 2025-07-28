AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  offset: 120,
  delay: 100
});

const saludoEl = document.getElementById("greeting");
if (saludoEl) {
  saludoEl.textContent = "Bienvenido al portafolio donde conviven el arte, el código y el anime.";
  saludoEl.classList.add("visible");
}

let si = 0;
let no = 0;

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const contadorSi = document.getElementById("contadorSi");
const contadorNo = document.getElementById("contadorNo");

if (btnSi && btnNo && contadorSi && contadorNo) {
  btnSi.addEventListener("click", () => {
    si++;
    contadorSi.textContent = si;
  });

  btnNo.addEventListener("click", () => {
    no++;
    contadorNo.textContent = no;
  });
}
// Clic sobre imágenes del portafolio
document.querySelectorAll('.portafolio-img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

function closeModal() {
  const modal = document.getElementById("imgModal");
  modal.style.display = "none";
}
