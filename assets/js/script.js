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

let mapTileLayers = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
  {}
);

// --- Open Leaflet JS on map of Africa ---

//Credit: Leaflet JS documentation
let map = L.map("map", {
  layers: [mapTileLayers], // variable from above
  center: [-29.28864, 25.025732], // central lat-lng once loaded
  zoom: 6, // smaller numbers = zoomOut // larger numbers = zoomIn
  minZoom: 2, // max zoomOut permitted
  maxZoom: 18, // max zoomIn permitted
  maxBounds: [
    // stops map from infinite scrolling at edges
    [-75, -190],
    [90, 190],
  ],
  maxBoundsViscosity: 0.5, // elastic bounce-back of map edges
});

//Arrays for countries
let mapLocations = [
  //Start of Initial Country Objects
  {
    //South Africa
    center: [-29.28864, 25.025732],
    zoom: 5,
  },
  {
    //Botswana
    center: [22.179045, 23.858743],
    zoom: 5,
  },
  {
    //Namibia
    center: [-22.101561, 17.195369],
    zoom: 5,
  },
  {
    //Kenya
    center: [0.501555, 37.930799],
    zoom: 5,
  },
  // end of Initial Country Objects

  //Start of Reserve Intial Objects

  //---South Africa Reserves
  {
    //Reserve1 - Kruger National Park
    center: [-23.988669, 31.553925],
    zoom: 7,
  },
  {
    //Reserve2 - Tembe Elephant Park
    center: [-27.048709, 32.422409],
    zoom: 7,
  },
  {
    ///Reserve3 - Shamwari Game Reserve
    center: [-33.47782, 26.03583],
    zoom: 7,
  },

  //---Botswana Reserves
  {
    //Reserve4 - Chobe National Park
    center: [-18.788571, 24.386086],
    zoom: 7,
  },
  {
    //Reserve5 - Central Kalahari Game Reserve
    center: [-22.390486, 23.838411],
    zoom: 7,
  },
  {
    //Reserve - Moremi Game Reserve
    center: [-19.346062, 22.881495],
    zoom: 7,
  },

  //---Namibia Reserves
  {
    //Reserve7 - Etosha National Park
    center: [-18.964107, 16.349421],
    zoom: 7,
  },
  {
    //Reserve8 - Skeleton Coast National Park
    center: [-20.072817, 13.316423],
    zoom: 7,
  },
  {
    //Reserve9 - Khaudum National Park
    center: [-18.954467, 20.567399],
    zoom: 7,
  },

  //---Kenya Reserves
  {
    //Reserve10 - Maasai Mara Game Reserve
    center: [-1.371569, 34.93885],
    zoom: 7,
  },
  {
    //Reserve11 - Amboseli National Park
    center: [-2.652516, 37.260651],
    zoom: 7,
  },
  {
    //Reserve12 - Lake Nakuru National Park
    center: [-0.366763, 36.089139],
    zoom: 7,
  },
];
