export type CountryFilterId =
  | "all"
  | "slovenia"
  | "croatia"
  | "serbia"
  | "bosnia"
  | "macedonia"
  | "montenegro";

export type LocationRecord = {
  id: string;
  name: string;
  countryId: Exclude<CountryFilterId, "all">;
  countryLabel: string;
  region: string;
  elevationM: number;
};
