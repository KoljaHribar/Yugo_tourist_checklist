import { BottomNav } from "@/components/BottomNav";
import { FilterRow } from "@/components/FilterRow";
import { PersistErrorBanner } from "@/components/PersistErrorBanner";
import { SightsVisitedBar } from "@/components/SightsVisitedBar";
import { palette } from "@/constants/theme";
import { useVisited } from "@/context/VisitedContext";
import { LOCATIONS } from "@/data/locations";
import { computeStats, filterLocations } from "@/lib/checklistStats";
import type { CountryFilterId } from "@/types/checklist";
import { useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatsScreen() {
  const [filter, setFilter] = useState<CountryFilterId>("all");
  const { visited, loading, persistError, clearPersistError, reloadFromStorage } = useVisited();

  const stats = useMemo(() => {
    const subset = filterLocations(LOCATIONS, filter);
    return computeStats(subset, visited);
  }, [filter, visited]);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.root}>
        <Text style={styles.screenTitle}>My Stats</Text>

        {persistError ? (
          <PersistErrorBanner
            message={persistError}
            onDismiss={clearPersistError}
            onRetry={() => void reloadFromStorage()}
          />
        ) : null}

        <FilterRow value={filter} onChange={setFilter} />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {loading ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color={palette.accent} />
              <Text style={styles.loadingText}>Loading your stats…</Text>
            </View>
          ) : (
            <>
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
            </>
          )}
        </ScrollView>

        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: palette.background,
  },
  root: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: palette.text,
    marginBottom: 12,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 8,
    paddingBottom: 8,
    flexGrow: 1,
  },
  loadingBox: {
    paddingVertical: 48,
    alignItems: "center",
    gap: 12,
  },
  loadingText: {
    color: palette.muted,
    fontSize: 15,
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
