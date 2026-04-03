import { palette } from "@/constants/theme";
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
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: visited }}
      accessibilityLabel={`${location.name}, ${visited ? "visited" : "not visited"}`}
    >
      <View style={[styles.box, visited && styles.boxChecked]} accessibilityElementsHidden>
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
    gap: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    marginBottom: 12,
  },
  rowPressed: {
    opacity: 0.94,
  },
  box: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: palette.accent,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.surface,
  },
  boxChecked: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
  textCol: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: palette.text,
  },
  sub: {
    fontSize: 13,
    color: palette.muted,
  },
});
