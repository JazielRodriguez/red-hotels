import { Country, Hotel } from "../utils/regionOptions";
export const useFilterCountries = (region: string, countries: Country[]) => {
  const filteredCountries = countries.filter(
    (country) => country.region === region
  );
  return { filteredCountries };
};
export const useFilterHotels = (country: string, hotels: Hotel[]) => {
  const filteredHotels = hotels.filter((hotel) => hotel.country === country);
  return {
    filteredHotels,
  };
};
