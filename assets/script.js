const searchInput = document.querySelector("#site-search");
const clearSearch = document.querySelector("#clear-search");
const searchCount = document.querySelector("#search-count");
const searchableItems = Array.from(document.querySelectorAll(".searchable"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const signalTrack = document.querySelector(".signal-track");

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
    searchCount.textContent = "Showing all notes.";
  } else if (visible === 1) {
    searchCount.textContent = "Showing 1 matching note.";
  } else {
    searchCount.textContent = `Showing ${visible} matching notes.`;
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
