# Code review: Yugoslavia Tourism Checklist vs `SPEC.md`

Review scope: React Native / Expo (Expo Router) implementation as of this review. `npm run lint` and `npx tsc --noEmit` both completed with exit code 0.

---

## Findings (numbered)

1. **[PASS] Two screens with correct titles.** The accomplishments route renders “My Accomplishments” (`app/index.tsx` L27) and the stats route renders “My Stats” (`app/stats.tsx` L26). Routing uses Expo Router with `app/index.tsx` and `app/stats.tsx` under `app/_layout.tsx` (Stack, headers hidden).

2. **[PASS] My Accomplishments — filter row: seven options with correct labels.** `constants/filters.ts` L3–11 defines All, Slovenia, Croatia, Serbia, Bosnia, Macedonia, and Montenegro, matching `SPEC.md` L6.

3. **[PASS] My Accomplishments — selecting a filter restricts the list to that country.** `app/index.tsx` L19–21 uses `filterLocations` then `sortLocationsByName`; `lib/checklistStats.ts` L4–9 returns all rows when `filter === "all"`, otherwise filters by `countryId`.

4. **[PASS] My Accomplishments — “All” shows every location.** Same as (3): `filter === "all"` returns the full `LOCATIONS` array (`lib/checklistStats.ts` L8).

5. **[PASS] My Accomplishments — default filter is All.** `useState<CountryFilterId>("all")` in `app/index.tsx` L15.

6. **[PASS] My Accomplishments — locations are alphabetical.** `sortLocationsByName` uses `localeCompare` with case-insensitive base sensitivity (`lib/checklistStats.ts` L12–14), applied in `app/index.tsx` L21.

7. **[PASS] My Accomplishments — checkbox affordance and toggle.** `components/LocationCheckRow.tsx` L11–28: a box with checked/unchecked visual state; the whole row is pressable and calls `onToggle`, satisfying “check or uncheck when they click” (spec allows interpreting the row as the interactive control).

8. **[PASS] My Accomplishments — scroll when the list is long.** Location rows are inside a vertical `ScrollView` (`app/index.tsx` L39–59).

9. **[PASS] My Accomplishments — bottom row with two buttons and correct labels.** `components/BottomNav.tsx` L7–10, L16–41: one row (`flexDirection: "row"`), labels “My Accomplishments” and “My Stats”.

10. **[PASS] My Stats — filter row: same seven options.** Reuses `FilterRow` and the same `FILTER_OPTIONS` (`app/stats.tsx` L36; `constants/filters.ts`).

11. **[PASS] My Stats — filter drives stats for that subset (or all).** `app/stats.tsx` L18–21: `filterLocations(LOCATIONS, filter)` then `computeStats(subset, visited)` (`lib/checklistStats.ts` L16–48).

12. **[PASS] My Stats — “SIGHTS VISITED”, progress bar, and percentage beside the bar.** `components/SightsVisitedBar.tsx` L13–20: caption “SIGHTS VISITED”, bar with fill width from `percent`, numeric percent with `%` to the right. `computeStats` derives `percent` from visited count over the filtered set (`lib/checklistStats.ts` L20–23).

13. **[WARN] My Stats — caption text vs spec punctuation.** `SPEC.md` L35 shows the label as `("SIGHTS VISITED")` (with parentheses). The UI shows `SIGHTS VISITED` without parentheses (`components/SightsVisitedBar.tsx` L14). Functionally fine; wording differs slightly.

14. **[PASS] My Stats — “Elevation Gained (In Meters)” and sum for visited locations in the current filter.** `app/stats.tsx` L52–56; `lib/checklistStats.ts` L21–24 sums `elevationM` only for visited locations in the filtered list, matching the spec’s Bled/Bohinj-style example (intent).

15. **[PASS] My Stats — “Covered Regions” as fully visited regions over total regions in scope.** `lib/checklistStats.ts` L26–38 groups by `regionKey` (`data/locations.ts` L679–681: `countryId::region`), counts regions where every location in that group is visited, and `totalRegions` is the number of distinct region groups in the filtered set. For “All”, that aggregates across all countries; for a single country, only that country’s regions appear—aligned with `SPEC.md` L43–47.

16. **[WARN] Covered regions — spec example denominator (1/5) vs this dataset.** The spec’s Slovenia example uses “1/5” (`SPEC.md` L46). In `data/locations.ts`, Slovenia has **six** distinct region strings (e.g. Gorenjska, Primorska, Štajerska, Prekmurje, Dolenjska, Notranjska), so the live denominator for Slovenia is 6, not 5. The **implementation matches the data**; the **example in the spec** does not match the shipped region list.

FAKE WARNING -> I JUST GAVE AN EXAMPLE, I WASN'T LOOKING FOR SLOVENIAS COMPLETE REGIONS

17. **[PASS] My Stats — bottom navigation matches accomplishments screen.** Same `BottomNav` component (`app/stats.tsx` L71).

18. **[PASS] Checklist content: 83 destinations with names, countries, regions, and elevations consistent with the spec table.** `data/locations.ts` contains 83 `id:` entries (verified by search). Spot checks match the spec (e.g. Ohrid/Struga/Sveti Naum use region `"Southwestern"` as in `SPEC.md` L139–141; elevations such as Zlatibor 1010 m match `SPEC.md` L94 formatting as a number).

19. **[WARN] “WHAT TO BE CAREFUL OF” — scroll behavior wording.** `SPEC.md` L144–145 says that when the user scrolls, the filter row and bottom row “follow with him.” The app keeps **filter and bottom nav outside** the vertical `ScrollView` and only scrolls the middle content (`app/index.tsx` L37–59, L61; `app/stats.tsx` L36–69, L71). That yields **sticky** filter and bottom bar while the list/stats body scrolls—a common pattern and usually what “still reachable while scrolling” means—but if the spec author meant **everything including the filter and bottom bar inside one scrollable column**, the current layout does not do that. Clarify intent; no code bug without that clarification.

FAKE WARNING -> I SEE NO PROBLEMS WITH THIS APPROACH

20. **[PASS] Spacing / readability.** Location rows use `marginBottom: 12` and internal padding (`components/LocationCheckRow.tsx` L38–44). Stats use `marginBottom` on blocks (`components/SightsVisitedBar.tsx` L28; `app/stats.tsx` L110–111). Filter chips use gap/padding (`components/FilterRow.tsx` L47–53). Reasonably aligned with `SPEC.md` L147.

21. **[PASS] Persistence and error handling for storage.** `context/VisitedContext.tsx`: loads on mount (`L91–93`), sanitizes unknown IDs (`L29–32`, `L55–56`), handles JSON parse failure with a clear error (`L45–48`, `L81–85`), surfaces save failures with `persistError` (`L95–101`) and `PersistErrorBanner` on both screens (`app/index.tsx` L29–34; `app/stats.tsx` L28–33). Toggle ignores unknown IDs (`L104–106`).

22. **[WARN] Possible race on rapid toggles (persistence).** `toggleVisited` calls `void persist(next)` on each state update (`context/VisitedContext.tsx` L104–112) without serializing writes. Fast repeated toggles can reorder async `setItem` completions so an older write might overwrite a newer one in edge cases. Consider a queue, debounce, or versioned write if this matters in production.

23. **[WARN] Filter selection is independent per screen.** `app/index.tsx` L15 and `app/stats.tsx` L15 each have their own `useState` for `filter`. Switching tabs does not sync filters. The spec does not require sync, but users may expect the same country filter on both screens.

24. **[WARN] Duplication between screens.** `app/index.tsx` and `app/stats.tsx` share nearly identical shell layout (SafeAreaView, title, banner, FilterRow, ScrollView chrome, styles). Works well but increases maintenance cost; a small shared screen wrapper could reduce drift.

25. **[PASS] React Native / Expo practices observed.** `SafeAreaView` with top edge and manual bottom inset in `BottomNav` (`components/BottomNav.tsx` L14–17); accessibility roles/labels on filters, check rows, and progress (`components/FilterRow.tsx` L30–32; `components/LocationCheckRow.tsx` L16–18; `components/SightsVisitedBar.tsx` L16); `keyboardShouldPersistTaps` on scroll areas (`app/index.tsx` L42; `app/stats.tsx` L41); Expo Router `Link` + `Pressable asChild` for navigation (`components/BottomNav.tsx` L24–25).

26. **[WARN] Expo Router typing workaround.** `components/BottomNav.tsx` L6–9 casts `/stats` as `Href` with a comment about generated types. Acceptable pragmatically; consider regenerating types after `expo start` so the cast can be removed.

27. **[PASS] Percentage bar uses a safe numeric range.** `SightsVisitedBar` clamps to 0–100 and guards non-finite values (`components/SightsVisitedBar.tsx` L9–10).

---

## Summary

| Category | PASS | WARN | FAIL |
|----------|------|------|------|
| Count    | 22   | 5    | 0    |

No **[FAIL]** items: core acceptance criteria from `SPEC.md` are implemented in a coherent way, with the main gaps being **interpretation of the scroll “follow” note**, a **minor label punctuation mismatch**, **spec example 1/5 vs six Slovenian regions in data**, and **non-blocking** UX/robustness notes (filter sync, persist races, duplicated screen layout).
