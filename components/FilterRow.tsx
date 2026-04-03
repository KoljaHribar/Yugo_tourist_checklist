import { FILTER_OPTIONS } from "@/constants/filters";
import { palette } from "@/constants/theme";
import type { CountryFilterId } from "@/types/checklist";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
  value: CountryFilterId;
  onChange: (next: CountryFilterId) => void;
};

export function FilterRow({ value, onChange }: Props) {
  return (
    <View style={styles.outer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {FILTER_OPTIONS.map((opt) => {
          const selected = opt.id === value;
          return (
            <Pressable
              key={opt.id}
              onPress={() => onChange(opt.id)}
              style={({ pressed }) => [
                styles.chip,
                selected && styles.chipSelected,
                pressed && styles.chipPressed,
              ]}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              accessibilityLabel={`Filter ${opt.label}`}
            >
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {opt.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
  },
  chipSelected: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  chipPressed: {
    opacity: 0.9,
  },
  chipText: {
    color: palette.text,
    fontSize: 14,
    fontWeight: "600",
  },
  chipTextSelected: {
    color: "#ffffff",
  },
});
