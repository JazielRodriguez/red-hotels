interface Region {
  label: string;
  value: string;
}
export interface Country {
  key: number;
  region: string;
  value: string;
  label: string;
}
export interface Hotel {
  value: string;
  label: string;
  country: string;
}
export const regionOptions: Region[] = [
  { label: "America", value: "america" },
  { label: "Europe", value: "europe" },
];
export const countriesOptions: Country[] = [
  {
    region: "america",
    value: "united States",
    key: Math.random(),
    label: "United States",
  },
  {
    region: "america",
    value: "colombia",
    key: Math.random(),
    label: "Colombia",
  },
  {
    region: "europe",
    value: "france",
    key: Math.random(),
    label: "France",
  },
  {
    region: "europe",
    value: "portugal",
    key: Math.random(),
    label: "Portugal",
  },
  {
    region: "europe",
    value: "greece",
    key: Math.random(),
    label: "Greece",
  },
];
export const hotelsOptions = [
  {
    value: "the turtle beach",
    label: "Red Hotels - The Turtle Beach",
    country: "greece",
  },
];
