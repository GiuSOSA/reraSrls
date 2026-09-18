const categoryInfo = {
  lathes: "We currently stock 6 manual lathes and 2 CNC lathes, ranging from 1.5m to 4m bed length. Prices from €3,500.",
  presses: "Hydraulic presses from 30 to 200 tons, plus mechanical eccentric presses. Prices from €2,200.",
  milling: "Vertical and horizontal milling machines, manual and CNC, with tooling packages available on request.",
  welding: "MIG, TIG and stick welding stations, plus plasma cutters, all recently serviced.",
  forklifts: "Electric and diesel forklifts (1.5–3.5 ton capacity) and warehouse hoists, ready for immediate delivery.",
  other: "Air compressors, band saws, sheet metal shears and more. Contact us with your specific needs."
};

const cards = document.querySelectorAll(".category-card");
const resultBox = document.getElementById("category-result");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    const category = card.dataset.category;
    resultBox.textContent = categoryInfo[category] || "More details coming soon.";
    resultBox.classList.add("visible");
    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});
