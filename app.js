export const getEightCountryByPopulation = async function () {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  const sortedCountries = data.sort((a, b) => b.population - a.population);
  const mostPopulated = sortedCountries.slice(0, 8);
  return mostPopulated;
};

export const getCountryByName = async function (countryName) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  const data = await response.json();
  if (data.length > 0) {
    const sortedCountries = data.sort((a, b) => b.population - a.population);
    return sortedCountries;
  } else return;
};

export const getCountryByRegion = async function (region) {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  );
  const data = await response.json();
  const sortedCountries = data.sort((a, b) => b.population - a.population);
  return sortedCountries;
};
