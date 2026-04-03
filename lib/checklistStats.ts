import { regionKey } from "@/data/locations";
import type { CountryFilterId, LocationRecord } from "@/types/checklist";

export function filterLocations(
  locations: LocationRecord[],
  filter: CountryFilterId,
): LocationRecord[] {
  if (filter === "all") return locations;
  return locations.filter((l) => l.countryId === filter);
}

export function sortLocationsByName(locations: LocationRecord[]): LocationRecord[] {
  return [...locations].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

export function computeStats(
  locations: LocationRecord[],
  visited: Record<string, boolean>,
) {
  const total = locations.length;
  const visitedList = locations.filter((l) => visited[l.id]);
  const visitedCount = visitedList.length;
  const percent = total === 0 ? 0 : (visitedCount / total) * 100;
  const elevationSum = visitedList.reduce((acc, l) => acc + l.elevationM, 0);

  const byRegion = new Map<string, LocationRecord[]>();
  for (const loc of locations) {
    const key = regionKey(loc);
    const arr = byRegion.get(key);
    if (arr) arr.push(loc);
    else byRegion.set(key, [loc]);
  }

  let fullyCovered = 0;
  for (const group of byRegion.values()) {
    const allVisited = group.every((l) => visited[l.id]);
    if (allVisited) fullyCovered += 1;
  }
  const regionTotal = byRegion.size;

  return {
    total,
    visitedCount,
    percent,
    elevationSum,
    fullyCoveredRegions: fullyCovered,
    totalRegions: regionTotal,
  };
}
