import { MainScreenShell } from "@/components/MainScreenShell";
import { SightsVisitedBar } from "@/components/SightsVisitedBar";
import { palette } from "@/constants/theme";
import { useCountryFilter } from "@/context/CountryFilterContext";
import { useVisited } from "@/context/VisitedContext";
import { LOCATIONS } from "@/data/locations";
import { computeStats, filterLocations } from "@/lib/checklistStats";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatsScreen() {
  const { filter } = useCountryFilter();
  const { visited, loading } = useVisited();

  const stats = useMemo(() => {
    const subset = filterLocations(LOCATIONS, filter);
    return computeStats(subset, visited);
  }, [filter, visited]);

  return (
    <MainScreenShell
      title="My Stats"
      loading={loading}
      loadingText="Loading your stats…"
      scrollContentStyle={styles.statsScrollContent}
    >
      <SightsVisitedBar percent={stats.percent} />

      <View style={styles.statBlock}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Elevation Gained (In Meters)</Text>
          <Text style={styles.statValue}>{stats.elevationSum}m</Text>
        </View>
      </View>

      <View style={styles.statBlock}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Covered Regions</Text>
          <Text style={styles.statValue}>
            {stats.fullyCoveredRegions}/{stats.totalRegions}
          </Text>
        </View>
      </View>
    </MainScreenShell>
  );
}

const styles = StyleSheet.create({
  statsScrollContent: {
    paddingTop: 8,
  },
  statBlock: {
    marginBottom: 28,
  },
  statRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: 8,
  },
  statLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: palette.text,
  },
  statValue: {
    fontSize: 17,
    fontWeight: "800",
    color: palette.accent,
  },
});
