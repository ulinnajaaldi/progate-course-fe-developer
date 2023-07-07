//Contact Page
const map = document.querySelector("#map");

const mapRender = L.map(map).setView([-6.32075478667, 106.96448083], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; Submisi Progate Ulinnaja Aldi ",
}).addTo(mapRender);
