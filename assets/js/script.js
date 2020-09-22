/*
CREDIT: Handle active class for Bootstrap navbar one page website
https://stackoverflow.com/a/48310836/14197670 
*/
window.addEventListener("hashchange", function () {
  document.querySelector(".active").classList.remove("active");
  document
    .querySelector('[href="' + window.location.hash + '"]')
    .classList.add("active");
});
//--- END CREDIT ---

$(document).ready(function () {
  //CREDIT: Function by W3SCHOOLS - smooth scrolling (using Jquery)
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
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
  //--- END CREDIT ---

  // Function to ease in/out preloader
  setTimeout(function () {  
    $('#preloader').fadeIn(.1);
    $('#preloader').fadeOut(5000);
  });
  
  /*
  CREDIT: Image slideshow inspiration from 
  https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/ 
  */
  $(".img-container:gt(0)").hide();
  setInterval(function () {
    $(".img-container:first")
      .fadeOut(5000)
      .next()
      .fadeIn(5000)
      .end()
      .appendTo("#intro-gallery");
  }, 7000);
  //--- END CREDIT ---

  // Function to stop iframe videos playing when button is clicked
  $(".country-button, .navbar-toggler, .btn, .nav-link").click(function () {
    $(".video-player").each(function () {
      /*
      CREDIT: https://stackoverflow.com/a/30358006/14197670 
      stopVideo method no longer supported (below)
      */
      this.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
      );
      //--- END CREDIT ---
    });
  });
});

// Close mobile dropdown menu after item clicked
window.onclick = function (e) {
  let dropDown = document.getElementById("navbarResponsive");
  if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
  }
};

// Function to HIDE/SHOW country info with buttons
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
  // Click button to show map-country based on the innerText
  changeMapLocation(e.target.innerText);
}

// Function to HIDE/SHOW RESERVE info with buttons
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
  changeMapLocation(e.target.innerText); // click button to show map-country based on the innerText
}

// Function to RESET RESERVE info
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
