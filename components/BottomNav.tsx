import { palette } from "@/constants/theme";
import { Link, usePathname, type Href } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/** Routes; cast until `expo start` regenerates `.expo/types/router.d.ts`. */
const screens: { id: "accomplishments" | "stats"; href: Href; label: string }[] = [
  { id: "accomplishments", href: "/", label: "My Accomplishments" },
  { id: "stats", href: "/stats" as Href, label: "My Stats" },
];

export function BottomNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      {screens.map((s) => {
        const active =
          s.id === "accomplishments"
            ? pathname === "/" || pathname === "/index"
            : pathname === "/stats";
        return (
          <Link key={s.id} href={s.href} asChild>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                active && styles.btnActive,
                pressed && styles.btnPressed,
              ]}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
            >
              <Text style={[styles.btnText, active && styles.btnTextActive]} numberOfLines={2}>
                {s.label}
              </Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    gap: 12,
    paddingTop: 12,
    paddingHorizontal: 16,
    backgroundColor: palette.surface,
    borderTopWidth: 1,
    borderTopColor: palette.border,
  },
  btn: {
    flex: 1,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: palette.background,
    borderWidth: 1,
    borderColor: palette.border,
  },
  btnActive: {
    backgroundColor: palette.accentMuted,
    borderColor: palette.accent,
  },
  btnPressed: {
    opacity: 0.92,
  },
  btnText: {
    color: palette.text,
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
  btnTextActive: {
    color: palette.accent,
  },
});
