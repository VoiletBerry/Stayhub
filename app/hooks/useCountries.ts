import countires from "world-countries";

const formatedCountries = countires.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formatedCountries;

  const getByValue = (value: string) =>
    formatedCountries.find((item) => item.value === value);

  return { getAll, getByValue, countires };
};

export default useCountries;
