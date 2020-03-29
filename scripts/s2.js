const articles = document.querySelectorAll(".s2 .wrap .examples article");

window.addEventListener("scroll", () => {
  const winHeight = window.pageYOffset + window.innerHeight - 150;
  articles.forEach(e => {
    if (window.innerWidth <= 640) {
      console.log(window.innerWidth);
      e.classList.add("active");
    } else if (winHeight > e.offsetTop) {
      e.classList.add("active");
    } else if (
      winHeight < e.offsetTop - 150 &&
      e.classList.contains("active") &&
      window.innerWidth > 640
    ) {
      e.classList.remove("active");
    }
  });
});
