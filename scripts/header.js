const burger = document.querySelector(".burger");
const s1 = document.querySelector(".s1");
const listNav = document.querySelector("nav ul");
burger.addEventListener("click", () => {
  // s1.classList.toggle("active");
  listNav.classList.toggle("active");
});
