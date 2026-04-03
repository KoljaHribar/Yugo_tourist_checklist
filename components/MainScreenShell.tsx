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
        <View style={styles.main}>
          <View style={styles.titleBlock}>
            <Text style={styles.screenTitle}>{title}</Text>
            <View style={styles.titleAccent} />
          </View>

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
            showsVerticalScrollIndicator={false}
          >
            {loading ? (
              <View style={styles.loadingBox}>
                <ActivityIndicator size="large" color={palette.accentBright} />
                <Text style={styles.loadingText}>{loadingText}</Text>
              </View>
            ) : (
              children
            )}
          </ScrollView>
        </View>

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
    paddingTop: 10,
  },
  main: {
    flex: 1,
    paddingHorizontal: 18,
    minHeight: 0,
  },
  titleBlock: {
    marginBottom: 14,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: palette.text,
    letterSpacing: -0.5,
  },
  titleAccent: {
    marginTop: 8,
    width: 48,
    height: 4,
    borderRadius: 2,
    backgroundColor: palette.accentBright,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
    flexGrow: 1,
  },
  loadingBox: {
    paddingVertical: 56,
    alignItems: "center",
    gap: 14,
  },
  loadingText: {
    color: palette.muted,
    fontSize: 16,
    fontWeight: "600",
  },
});
