const animation = document.querySelectorAll(".animation");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  animation.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add("animation-enter");
    }
  });
}

window.addEventListener("scroll", handleScroll);

const footerTitles = document.querySelectorAll(".footer-title");

footerTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const footerItems = title.parentElement;
    const links = footerItems.querySelectorAll("a");
    links.forEach((link) => {
      if (link.style.display === "none") {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    });
  });
});
