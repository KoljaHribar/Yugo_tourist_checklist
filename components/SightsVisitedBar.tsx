import { palette } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  percent: number;
};

export function SightsVisitedBar({ percent }: Props) {
  const clamped = Math.min(100, Math.max(0, percent));
  const label = Number.isFinite(clamped) ? Math.round(clamped) : 0;

  return (
    <View style={styles.block}>
      <Text style={styles.caption}>SIGHTS VISITED</Text>
      <View style={styles.row}>
        <View style={styles.track} accessibilityRole="progressbar" accessibilityValue={{ now: label, min: 0, max: 100 }}>
          <View style={[styles.fill, { width: `${clamped}%` }]} />
        </View>
        <Text style={styles.pct}>{label}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 10,
    marginBottom: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.6,
    color: palette.muted,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  track: {
    flex: 1,
    height: 14,
    borderRadius: 8,
    backgroundColor: palette.border,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: palette.accent,
  },
  pct: {
    minWidth: 44,
    textAlign: "right",
    fontSize: 16,
    fontWeight: "800",
    color: palette.text,
  },
});
