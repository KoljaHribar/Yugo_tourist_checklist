import { MainScreenShell } from "@/components/MainScreenShell";
import { LocationCheckRow } from "@/components/LocationCheckRow";
import { useCountryFilter } from "@/context/CountryFilterContext";
import { useVisited } from "@/context/VisitedContext";
import { LOCATIONS } from "@/data/locations";
import { filterLocations, sortLocationsByName } from "@/lib/checklistStats";
import { useMemo } from "react";

export default function AccomplishmentsScreen() {
  const { filter } = useCountryFilter();
  const { isVisited, toggleVisited, loading } = useVisited();

  const rows = useMemo(() => {
    const subset = filterLocations(LOCATIONS, filter);
    return sortLocationsByName(subset);
  }, [filter]);

  return (
    <MainScreenShell
      title="My Accomplishments"
      loading={loading}
      loadingText="Loading your checklist…"
    >
      {rows.map((loc) => (
        <LocationCheckRow
          key={loc.id}
          location={loc}
          visited={isVisited(loc.id)}
          onToggle={() => toggleVisited(loc.id)}
        />
      ))}
    </MainScreenShell>
  );
}
