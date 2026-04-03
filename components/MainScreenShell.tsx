import { BottomNav } from "@/components/BottomNav";
import { FilterRow } from "@/components/FilterRow";
import { PersistErrorBanner } from "@/components/PersistErrorBanner";
import { palette } from "@/constants/theme";
import { useCountryFilter } from "@/context/CountryFilterContext";
import { useVisited } from "@/context/VisitedContext";
import type { ReactNode } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MainScreenShellProps = {
  title: string;
  loading: boolean;
  loadingText: string;
  scrollContentStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export function MainScreenShell({
  title,
  loading,
  loadingText,
  scrollContentStyle,
  children,
}: MainScreenShellProps) {
  const { persistError, clearPersistError, reloadFromStorage } = useVisited();
  const { filter, setFilter } = useCountryFilter();

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.root}>
        <Text style={styles.screenTitle}>{title}</Text>

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
          contentContainerStyle={[styles.scrollContent, scrollContentStyle]}
          keyboardShouldPersistTaps="handled"
        >
          {loading ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color={palette.accent} />
              <Text style={styles.loadingText}>{loadingText}</Text>
            </View>
          ) : (
            children
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
