export default class DropDown {
  constructor(options) {
  }
}

document.querySelector('.header__drop-button').addEventListener('click', function() {
  document.querySelector('.dropdown-content').classList.toggle('show');
});

// Закрыть, если кликнули вне списка
window.onclick = function(event) {
  if (!event.target.matches('.header__drop-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
