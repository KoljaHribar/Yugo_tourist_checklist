import { BottomNav } from "@/components/BottomNav";
import { FilterRow } from "@/components/FilterRow";
import { LocationCheckRow } from "@/components/LocationCheckRow";
import { PersistErrorBanner } from "@/components/PersistErrorBanner";
import { palette } from "@/constants/theme";
import { useVisited } from "@/context/VisitedContext";
import { LOCATIONS } from "@/data/locations";
import { filterLocations, sortLocationsByName } from "@/lib/checklistStats";
import type { CountryFilterId } from "@/types/checklist";
import { useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccomplishmentsScreen() {
  const [filter, setFilter] = useState<CountryFilterId>("all");
  const { isVisited, toggleVisited, loading, persistError, clearPersistError, reloadFromStorage } =
    useVisited();

  const rows = useMemo(() => {
    const subset = filterLocations(LOCATIONS, filter);
    return sortLocationsByName(subset);
  }, [filter]);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.root}>
        <Text style={styles.screenTitle}>My Accomplishments</Text>

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
              <Text style={styles.loadingText}>Loading your checklist…</Text>
            </View>
          ) : (
            rows.map((loc) => (
              <LocationCheckRow
                key={loc.id}
                location={loc}
                visited={isVisited(loc.id)}
                onToggle={() => toggleVisited(loc.id)}
              />
            ))
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
});
