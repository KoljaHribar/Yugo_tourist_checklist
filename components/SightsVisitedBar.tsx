import { cardShadow, palette } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  percent: number;
};

export function SightsVisitedBar({ percent }: Props) {
  const clamped = Math.min(100, Math.max(0, percent));
  const label = Number.isFinite(clamped) ? Math.round(clamped) : 0;

  return (
    <View style={[styles.card, cardShadow]}>
      <Text style={styles.caption}>SIGHTS VISITED</Text>
      <View style={styles.row}>
        <View
          style={styles.track}
          accessibilityRole="progressbar"
          accessibilityValue={{ now: label, min: 0, max: 100 }}
        >
          <View style={[styles.fill, { width: `${clamped}%` }]} />
        </View>
        <View style={styles.pctBadge}>
          <Text style={styles.pct}>{label}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 14,
    marginBottom: 20,
    padding: 18,
    borderRadius: 16,
    backgroundColor: palette.surface,
    borderWidth: 2,
    borderColor: palette.borderLight,
  },
  caption: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    color: palette.muted,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  track: {
    flex: 1,
    height: 20,
    borderRadius: 12,
    backgroundColor: palette.progressTrack,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: palette.borderLight,
  },
  fill: {
    height: "100%",
    borderRadius: 12,
    backgroundColor: palette.accentBright,
  },
  pctBadge: {
    minWidth: 52,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: palette.accentMuted,
    borderWidth: 2,
    borderColor: palette.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  pct: {
    fontSize: 17,
    fontWeight: "800",
    color: palette.accent,
  },
});
