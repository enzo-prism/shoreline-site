const searchInput = document.querySelector("#site-search");
const clearSearch = document.querySelector("#clear-search");
const searchCount = document.querySelector("#search-count");
const searchableItems = Array.from(document.querySelectorAll(".searchable"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const signalTrack = document.querySelector(".signal-track");
const asciiWavePanels = Array.from(document.querySelectorAll(".ascii-wave"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function normalize(value) {
  return value.trim().toLowerCase();
}

function applySearch(rawQuery) {
  const query = normalize(rawQuery);
  let visible = 0;

  searchableItems.forEach((item) => {
    const haystack = normalize(`${item.textContent} ${item.dataset.index || ""}`);
    const matched = query.length === 0 || haystack.includes(query);
    item.classList.toggle("is-hidden", !matched);
    if (matched) visible += 1;
  });

  if (!searchCount) return;

  if (query.length === 0) {
    searchCount.textContent = "All notes.";
  } else if (visible === 1) {
    searchCount.textContent = "1 match.";
  } else {
    searchCount.textContent = `${visible} matches.`;
  }
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    applySearch(event.target.value);
  });
}

if (clearSearch) {
  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    applySearch("");
    searchInput.focus();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "";
    searchInput.value = filter;
    applySearch(filter);
  });
});

if (signalTrack) {
  signalTrack.innerHTML += signalTrack.innerHTML;
}

const waveRamp = " .:-~=+*#@";

function columnsFor(element, charWidth) {
  return Math.max(54, Math.floor(element.clientWidth / charWidth));
}

function rowsFor(element, lineHeight) {
  return Math.max(22, Math.floor(element.clientHeight / lineHeight));
}

function gaussian(value, center, width) {
  const distance = (value - center) / width;
  return Math.exp(-distance * distance);
}

function drawAsciiWave(element, time) {
  const fontSize = Number.parseFloat(window.getComputedStyle(element).fontSize) || 9;
  const cols = columnsFor(element, fontSize * 0.62);
  const rows = rowsFor(element, fontSize * 1.05);
  const waterBase = rows * 0.62;
  let output = "";

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const nx = x / cols;
      const terrain =
        gaussian(nx, 0.26, 0.16) * rows * 0.23 +
        gaussian(nx, 0.38, 0.075) * rows * 0.12 +
        gaussian(nx, 0.72, 0.035) * rows * 0.055 +
        gaussian(nx, 0.9, 0.09) * rows * 0.08;
      const ripple =
        Math.sin(nx * Math.PI * 4.2 + time * 0.58) * 1.15 +
        Math.sin(nx * Math.PI * 9.4 - time * 0.84) * 0.62;
      const crest = waterBase - terrain + ripple;
      const depth = y - crest;
      let char = " ";

      if (depth >= -0.85) {
        const density = Math.min(1, Math.max(0, depth / (rows * 0.34)));
        char = waveRamp[Math.floor(density * (waveRamp.length - 1))];
      }

      output += char;
    }
    output += "\n";
  }

  element.textContent = output;
}

if (asciiWavePanels.length > 0) {
  let waveTime = 0;

  function animateWaves() {
    asciiWavePanels.forEach((panel, index) => {
      drawAsciiWave(panel, waveTime + index * 0.8);
    });
    waveTime += 0.045;

    if (!prefersReducedMotion) {
      window.requestAnimationFrame(animateWaves);
    }
  }

  animateWaves();

  window.addEventListener("resize", () => {
    asciiWavePanels.forEach((panel, index) => {
      drawAsciiWave(panel, waveTime + index * 0.8);
    });
  });
}
