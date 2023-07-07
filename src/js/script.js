function navbar() {
  const menu = document.querySelector("#bars");
  const navbar = document.querySelector(".container ul");

  menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove("active");
    }
  });
}
navbar();