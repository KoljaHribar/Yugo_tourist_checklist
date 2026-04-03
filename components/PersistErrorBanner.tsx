import { palette } from "@/constants/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  message: string;
  onDismiss: () => void;
  onRetry?: () => void;
};

export function PersistErrorBanner({ message, onDismiss, onRetry }: Props) {
  return (
    <View style={styles.wrap} accessibilityRole="alert">
      <Text style={styles.text}>{message}</Text>
      <View style={styles.actions}>
        {onRetry ? (
          <Pressable
            onPress={onRetry}
            style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
            accessibilityRole="button"
            accessibilityLabel="Retry loading saved data"
          >
            <Text style={styles.btnLabel}>Retry</Text>
          </Pressable>
        ) : null}
        <Pressable
          onPress={onDismiss}
          style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
          accessibilityRole="button"
          accessibilityLabel="Dismiss message"
        >
          <Text style={styles.btnLabel}>Dismiss</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: palette.dangerBg,
    borderColor: palette.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    gap: 8,
  },
  text: {
    color: palette.dangerText,
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
  },
  btnPressed: {
    opacity: 0.85,
  },
  btnLabel: {
    color: palette.text,
    fontSize: 14,
    fontWeight: "600",
  },
});
