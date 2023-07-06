// const bars = document.getElementById("bars");
// const sideBar = document.querySelector(".container ul");
// bars.addEventListener("click", (e) => {
//   sideBar.style.right = "0";
//   if(e.target) return sideBar.style.
// });

const menu = document.querySelector("#bars");
const navbar = document.querySelector(".container ul");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active")
});

document.addEventListener("click", (e) => {
  if(!menu.contains(e.target) && !navbar.contains(e.target)){
    navbar.classList.remove("active");
  }
});