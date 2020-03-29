$("nav ul li a").each(function(index) {
  $(this).on("click", () => {
    const item = $("body section+section")[index];
    const navHeight = $(".s1").offset().top;
    $("body, html").animate(
      {
        scrollTop: item.offsetTop - navHeight
      },
      1000
    );

    if (window.innerWidth <= 700) {
      document.querySelector("nav ul").classList.remove("active");
      document.querySelector(".s1").classList.remove("active");
    }
  });
});

$(".s1 a").on("click", item => {
  const navHeight = $("nav").innerHeight();
  const s2Height = $(".s2 h1").offset().top;
  $("body, html").animate(
    {
      scrollTop: s2Height - navHeight
    },
    1000
  );
});

$("nav ul li img").on("click", item => {
  console.log("aaa");
  const navHeight = $("nav").innerHeight();
  const s2Height = $(".s2 h1").offset().top;
  $("body, html").animate(
    {
      scrollTop: 0
    },
    1000
  );
});
$("nav .logoMini").on("click", item => {
  $("body, html").animate(
    {
      scrollTop: 0
    },
    1000
  );
});

$("body .scrollUp").on("click", item => {
  $("body, html").animate(
    {
      scrollTop: 0
    },
    1000
  );
});
