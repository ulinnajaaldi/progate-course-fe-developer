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
