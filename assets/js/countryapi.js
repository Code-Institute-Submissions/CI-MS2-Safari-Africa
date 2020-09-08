//REST Country API from https://restcountries.eu/
const API_URL = "https://restcountries.eu/rest/v2/alpha/";

// Create country buttons
axios.get(`${API_URL}?codes=zaf;bwa;nam;ken;`).then((res) => {
  const container = document.querySelector(".btn-container");

  for (i in res.data) {
    let button = `<a class="button" type="button" data-country="${res.data[i]["alpha2Code"]}"><span>${res.data[i]["name"]}</span></a>`;
    // CREDIT: "insertAdjacentHTML & beforeend" parameters from Element.insertAdjacentHTML() - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    container.insertAdjacentHTML("beforeend", button);
  }
});

const buttons = document.querySelectorAll(".button");

for (button in buttons) {
  // add a click event listener to the button
  this.addEventListener("click", () => {
    // send an api request that uses the 'data-country' data attr
    axios
      .get(`${API_URL}${this.event.target.parentElement.dataset["country"]}`)
      // Then when the data is recieved
      .then((res) => {
        // Name
        document.querySelector(".countryheading").innerHTML = res.data["name"];

        // Capital
        document.querySelector(".capitaltext").innerHTML = res.data["capital"];

        // Population

        //CREDIT: Refactored population number with Intl.NumberFormat() constructor - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
        let population = `${Intl.NumberFormat().format(
          res.data["population"]
        )} (2018) World Bank`;
        document.querySelector(".poptext").innerHTML = population;

        // Languages
        const langlist = document.querySelector(".langList");
        langData = res.data["languages"];
        langlist.innerHTML = "";

        for (language in langData) {
          let language_item = `<li>${langData[language]["name"]}</li>`;
          langlist.insertAdjacentHTML("beforeend", language_item);
        }

        // Flags
        document
          .querySelector(".container-image")
          .setAttribute("src", res.data["flag"]);
      });
  });
}