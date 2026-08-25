// const searchInput = document.querySelector(".search__input");
// const tagButtons = document.querySelectorAll(".search__tag-button");

// if (searchInput) {
//   tagButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       searchInput.value = button.textContent.trim();
//       searchInput.focus();
//     });
//   });
// }
const searchInput = document.querySelector(".search__input");
const searchClear = document.querySelector(".search__clear");
const searchTagButtons = document.querySelectorAll(".search__tag-button");

function toggleClearButton() {
  searchClear.classList.toggle(
    "is-visible",
    searchInput.value.trim() !== "",
  );
}

searchTagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.textContent.trim();
    toggleClearButton();
    searchInput.focus();
  });
});

searchInput.addEventListener("input", toggleClearButton);

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  toggleClearButton();
  searchInput.focus();
});