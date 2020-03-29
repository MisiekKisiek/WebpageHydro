let headerSections = document.querySelectorAll("section h1 p");

window.addEventListener("scroll", () => {
  const winHeight = window.pageYOffset + window.innerHeight - 150;
  // console.log(winHeight);
  for (i = 0; i < headerSections.length; i++) {
    if (winHeight > headerSections[i].offsetTop) {
      headerSections[i].classList.add("active");
    } else {
      headerSections[i].classList.remove("active");
    }
  }
});

window.addEventListener("scroll", () => {
  const winHeight = window.pageYOffset;
  if (window.pageYOffset > window.innerHeight * 0.3) {
    document.querySelector("body .scrollUp").classList.add("active");
  } else {
    document.querySelector("body .scrollUp").classList.remove("active");
  }
});
