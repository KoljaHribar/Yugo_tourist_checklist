import { MainScreenShell } from "@/components/MainScreenShell";
import { SightsVisitedBar } from "@/components/SightsVisitedBar";
import { cardShadow, palette } from "@/constants/theme";
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

      <View style={[styles.statCard, styles.statCardTeal, cardShadow]}>
        <Text style={styles.statLabel}>Elevation Gained (In Meters)</Text>
        <Text style={styles.statValueTeal}>{stats.elevationSum}m</Text>
      </View>

      <View style={[styles.statCard, styles.statCardAmber, cardShadow]}>
        <Text style={styles.statLabel}>Covered Regions</Text>
        <Text style={styles.statValueAmber}>
          {stats.fullyCoveredRegions}/{stats.totalRegions}
        </Text>
      </View>
    </MainScreenShell>
  );
}

const styles = StyleSheet.create({
  statsScrollContent: {
    paddingTop: 4,
    gap: 4,
  },
  statCard: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 16,
    backgroundColor: palette.surface,
    borderWidth: 2,
    borderColor: palette.borderLight,
    marginBottom: 16,
    borderLeftWidth: 5,
  },
  statCardTeal: {
    borderLeftColor: palette.success,
  },
  statCardAmber: {
    borderLeftColor: palette.warning,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: palette.text,
    marginBottom: 10,
    lineHeight: 22,
  },
  statValueTeal: {
    fontSize: 28,
    fontWeight: "800",
    color: palette.success,
    letterSpacing: -0.5,
  },
  statValueAmber: {
    fontSize: 28,
    fontWeight: "800",
    color: palette.warning,
    letterSpacing: -0.5,
  },
});
