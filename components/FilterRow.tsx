import { FILTER_OPTIONS } from "@/constants/filters";
import { filterChipTheme, palette } from "@/constants/theme";
import type { CountryFilterId } from "@/types/checklist";
import * as Haptics from "expo-haptics";
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
          const colors = filterChipTheme[opt.id];
          return (
            <Pressable
              key={opt.id}
              onPress={() => {
                void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                onChange(opt.id);
              }}
              style={({ pressed }) => [
                styles.chip,
                !selected && { backgroundColor: colors.light, borderColor: colors.main },
                selected && { backgroundColor: colors.main, borderColor: colors.main },
                pressed && styles.chipPressed,
              ]}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              accessibilityLabel={`Filter ${opt.label}`}
            >
              <Text
                style={[
                  styles.chipText,
                  selected && { color: colors.textOnMain },
                  !selected && { color: palette.text },
                ]}
              >
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
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 6,
    paddingRight: 4,
  },
  chip: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: palette.surface,
    borderWidth: 2,
    borderColor: palette.border,
    minHeight: 44,
    justifyContent: "center",
  },
  chipPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  chipText: {
    fontSize: 14,
    fontWeight: "700",
  },
});
