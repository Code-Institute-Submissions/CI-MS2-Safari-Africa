//Credit: w3schools - smoothy scrolling
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
//END Credit: w3schools - smoothy scrolling

// Close mobile dropdown menu after item clicked
window.onclick = function (e) {
  var dropDown = document.getElementById("navbarResponsive");
  if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
  }
};
