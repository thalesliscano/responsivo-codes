const bntMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  // Ta veriricando se é um evento do tipo touchstart
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  // se contem o "active" retorna true se não false
  const active = nav.classList.contains("active");
  // target que to interagindo no momento
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

bntMobile.addEventListener("click", toggleMenu);
bntMobile.addEventListener("touchstart", toggleMenu);
