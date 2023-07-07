const cardCoffe = document.querySelectorAll(".card-coffe");

cardCoffe.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = `scale(var(--card-scale))`;
    card.querySelectorAll(".card-coffe-img").forEach((img) => {
      img.style.transform = `translateY(var(--img-translateY)) scale(var(--img-scale))`;
    });
    card.querySelectorAll(".card-coffe h3").forEach((title) => {
      title.style.transform = `translateY(var(--title-translateY))`;
    });
    card.querySelectorAll(".card-coffe div p").forEach((cost) => {
      cost.style.transform = `translateY(var(--cost-translateY))`;
    });
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.querySelectorAll(".card-coffe-img").forEach((img) => {
      img.style.transform = "translateY(0px) scale(1)";
    });
    card.querySelectorAll(".card-coffe h3").forEach((title) => {
      title.style.transform = "translateY(0px)";
    });
    card.querySelectorAll(".card-coffe div p").forEach((cost) => {
      cost.style.transform = "translateY(0px)";
    });
  });
});
