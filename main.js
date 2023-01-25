import {
  getEightCountryByPopulation,
  getCountryByName,
  getCountryByRegion,
} from "./app.js";

const container = document.querySelector(".container");
const searchInput = document.querySelector(".search-input");
const filterSelect = document.querySelector(".filter-select");

fillPageOnOpening();

const fillContainer = (countries) => {
  return (container.innerHTML = countries
    .map((x) => {
      let { name, population, region, capital, flags } = x;
      return `<div class="country-box">
        <img class="country-image"
            src="${flags.png}"
            alt="">
        <div class="country-title--heading">
            <h3 class="country-title">${name.official}</h3>
        </div>
        <div class="information-text">
            <h5>Population: <span class="population-text"> ${population.toLocaleString(
              "en-US"
            )}</span></h5>
            <h5>Region: <span class="region-text"> ${region}</span></h5>
            <h5>Capital: <span class="capital-text"> ${capital}</span></h5>
        </div>
    </div>`;
    })
    .join(""));
};

async function fillPageOnOpening() {
  const countries = await getEightCountryByPopulation();
  fillContainer(countries);
}

searchInput.addEventListener("input", async (e) => {
  console.log(e.target.value);
  const countries = await getCountryByName(e.target.value);
  if (countries !== undefined) {
    fillContainer(countries);
  }
});

filterSelect.addEventListener("change", async (e) => {
  const countries = await getCountryByRegion(e.target.value);
  fillContainer(countries);
});
