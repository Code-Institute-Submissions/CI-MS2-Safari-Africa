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
  });
}
