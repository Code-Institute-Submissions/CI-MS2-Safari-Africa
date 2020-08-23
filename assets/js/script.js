// Close mobile dropdown menu after item clicked
window.onclick = function (e) {
  var dropDown = document.getElementById("navbarResponsive");
  if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
  }
};
