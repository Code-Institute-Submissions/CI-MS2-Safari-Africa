//Credit: w3schools - smoothy scrolling (using Jquery)
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

//function to HIDE/SHOW country info with buttons
const countryButton = document.getElementsByClassName("country-button");
for (let i = 0; i < countryButton.length; i++) {
  countryButton[i].addEventListener("click", handleCountrySelect);
}

function handleCountrySelect(e) {
  const countryBtn = e.target.dataset.country;

  const countrySelections1 = document.getElementsByClassName("country-section");
  for (let i = 0; i < countrySelections1.length; i++) {
    const sectionID = countrySelections1[i].id;
    if (sectionID === countryBtn) {
      countrySelections1[i].classList.remove("hidden");
    } else {
      countrySelections1[i].classList.add("hidden");
    }
  }
  handleReserveReset("reserve-0");
}

//function to HIDE/SHOW RESERVE info with buttons
const reserveButton = document.getElementsByClassName("reserve-button");
for (let i = 0; i < reserveButton.length; i++) {
  reserveButton[i].addEventListener("click", handleReserveSelect);
}

function handleReserveSelect(e) {
  const reserveBtn = e.target.dataset.reserve;

  const reserveSelection = document.getElementsByClassName("reserve-section");
  for (let i = 0; i < reserveSelection.length; i++) {
    const reserveID = reserveSelection[i].id;
    if (reserveID === reserveBtn) {
      reserveSelection[i].classList.remove("hidden");
    } else {
      reserveSelection[i].classList.add("hidden");
    }
  }
}

//function to RESET RESERVE info
function handleReserveReset(reserve) {
  const reserveBtn = reserve;

  const reserveSelection = document.getElementsByClassName("reserve-section");
  for (let i = 0; i < reserveSelection.length; i++) {
    const reserveID = reserveSelection[i].id;
    if (reserveID === reserveBtn) {
      reserveSelection[i].classList.remove("hidden");
    } else {
      reserveSelection[i].classList.add("hidden");
    }
  }
}
