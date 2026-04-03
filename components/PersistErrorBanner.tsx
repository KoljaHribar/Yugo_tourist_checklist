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
            style={({ pressed }) => [styles.btn, styles.btnPrimary, pressed && styles.btnPressed]}
            accessibilityRole="button"
            accessibilityLabel="Retry loading saved data"
          >
            <Text style={styles.btnLabelPrimary}>Retry</Text>
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
    borderColor: palette.dangerText,
    borderWidth: 2,
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    gap: 10,
  },
  text: {
    color: palette.dangerText,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: palette.surface,
    borderWidth: 2,
    borderColor: palette.border,
    minHeight: 44,
    justifyContent: "center",
  },
  btnPrimary: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  btnPressed: {
    opacity: 0.88,
  },
  btnLabel: {
    color: palette.text,
    fontSize: 15,
    fontWeight: "700",
  },
  btnLabelPrimary: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
});
