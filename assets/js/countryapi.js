//REST Country API from https://restcountries.eu/
const API_URL = "https://restcountries.eu/rest/v2/alpha/";

// Create country buttons
axios.get(`${API_URL}?codes=zaf;bwa;nam;ken;`).then((res) => {
  const container = document.querySelector(".btn-container");

  for (i in res.data) {
    let button = `<a class="button" type="button" data-country="${res.data[i]["alpha2Code"]}"><img src="${res.data[i]["flag"]}" alt="Flag of ${res.data[i]["name"]}" height=100 width=100/><span>${res.data[i]["name"]}</span></a>`;
    // CREDIT: "insertAdjacentHTML & beforeend" parameters from Element.insertAdjacentHTML() - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    container.insertAdjacentHTML("beforeend", button);
  }
});

const buttons = document.querySelectorAll(".button");

for (button in buttons) {
  // add a click event listener to the button
  this.addEventListener("click", () => {
    // console.log(this.event.target.parentElement);

    // send an api request that uses the 'data-country' data attr
    axios
      .get(`${API_URL}${this.event.target.parentElement.dataset["country"]}`)
      // Then when the data is recieved
      .then((res) => {
        // Name
        // console.log(res.data["name"]);
        document.querySelector(".countryheading").innerHTML = res.data["name"];

        // Capital
        // console.log(res.data["capital"]);
        document.querySelector(".capitaltext").innerHTML = res.data["capital"];

        // Population
        console.log(res.data["population"]);
        // document.querySelector(".poptext").innerHTML = res.data["population"];

        //CREDIT: Refactored population number with Intl.NumberFormat() constructor - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
        let population = `${Intl.NumberFormat().format(
          res.data["population"]
        )} (2018) World Bank`;
        document.querySelector(".poptext").innerHTML = population;
      });
  });
}
