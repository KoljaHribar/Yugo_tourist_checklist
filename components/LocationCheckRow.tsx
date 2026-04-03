import { cardShadow, palette } from "@/constants/theme";
import type { LocationRecord } from "@/types/checklist";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  location: LocationRecord;
  visited: boolean;
  onToggle: () => void;
};

export function LocationCheckRow({ location, visited, onToggle }: Props) {
  return (
    <Pressable
      onPress={onToggle}
      style={({ pressed }) => [
        styles.row,
        visited && styles.rowVisited,
        cardShadow,
        pressed && styles.rowPressed,
      ]}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: visited }}
      accessibilityLabel={`${location.name}, ${visited ? "visited" : "not visited"}`}
    >
      <View
        style={[styles.box, visited && styles.boxChecked]}
        accessibilityElementsHidden
      >
        {visited ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>
      <View style={styles.textCol}>
        <Text style={styles.title}>{location.name}</Text>
        <Text style={styles.sub}>
          {location.countryLabel} · {location.elevationM} m
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: palette.surface,
    borderWidth: 2,
    borderColor: palette.borderLight,
    marginBottom: 14,
  },
  rowVisited: {
    borderColor: palette.success,
    backgroundColor: palette.surfaceMuted,
  },
  rowPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.995 }],
  },
  box: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: palette.accentBright,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.surface,
  },
  boxChecked: {
    backgroundColor: palette.success,
    borderColor: palette.success,
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },
  textCol: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: palette.text,
    lineHeight: 22,
  },
  sub: {
    fontSize: 14,
    color: palette.muted,
    fontWeight: "500",
  },
});
