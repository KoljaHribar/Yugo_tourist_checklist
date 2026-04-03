import type { CountryFilterId } from "@/types/checklist";
import React, { createContext, useContext, useMemo, useState } from "react";

type CountryFilterContextValue = {
  filter: CountryFilterId;
  setFilter: (next: CountryFilterId) => void;
};

const CountryFilterContext = createContext<CountryFilterContextValue | null>(null);

export function CountryFilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<CountryFilterId>("all");
  const value = useMemo(() => ({ filter, setFilter }), [filter]);
  return (
    <CountryFilterContext.Provider value={value}>{children}</CountryFilterContext.Provider>
  );
}

export function useCountryFilter() {
  const ctx = useContext(CountryFilterContext);
  if (!ctx) {
    throw new Error("useCountryFilter must be used within CountryFilterProvider");
  }
  return ctx;
}
