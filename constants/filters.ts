import type { CountryFilterId } from "@/types/checklist";

export const FILTER_OPTIONS: { id: CountryFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "slovenia", label: "Slovenia" },
  { id: "croatia", label: "Croatia" },
  { id: "serbia", label: "Serbia" },
  { id: "bosnia", label: "Bosnia" },
  { id: "macedonia", label: "Macedonia" },
  { id: "montenegro", label: "Montenegro" },
];
