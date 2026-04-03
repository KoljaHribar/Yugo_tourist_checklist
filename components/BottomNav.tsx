import { barShadow, palette } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Link, usePathname, type Href } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/** Routes; cast until `expo start` regenerates `.expo/types/router.d.ts`. */
const screens: {
  id: "accomplishments" | "stats";
  href: Href;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    id: "accomplishments",
    href: "/",
    label: "My Accomplishments",
    icon: "checkbox-outline",
    iconActive: "checkbox",
  },
  {
    id: "stats",
    href: "/stats" as Href,
    label: "My Stats",
    icon: "stats-chart-outline",
    iconActive: "stats-chart",
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.bar,
        barShadow,
        {
          paddingBottom: Math.max(insets.bottom, 14),
          paddingLeft: Math.max(insets.left, 18),
          paddingRight: Math.max(insets.right, 18),
        },
      ]}
    >
      {screens.map((s) => {
        const active =
          s.id === "accomplishments"
            ? pathname === "/" || pathname === "/index"
            : pathname === "/stats";
        return (
          <Link key={s.id} href={s.href} asChild>
            <Pressable
              onPressIn={() => {
                void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
              style={({ pressed }) => [
                styles.btn,
                active && styles.btnActive,
                pressed && styles.btnPressed,
              ]}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
            >
              <Ionicons
                name={active ? s.iconActive : s.icon}
                size={22}
                color={active ? palette.accentBright : palette.muted}
                style={styles.btnIcon}
              />
              <Text
                style={[styles.btnText, active && styles.btnTextActive]}
                numberOfLines={2}
              >
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
    alignItems: "stretch",
    justifyContent: "center",
    gap: 12,
    paddingTop: 14,
    backgroundColor: palette.surface,
    borderTopWidth: 1,
    borderTopColor: palette.borderLight,
    width: "100%",
  },
  btn: {
    flex: 1,
    flexBasis: 0,
    minHeight: 52,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 14,
    backgroundColor: palette.navInactiveBg,
    borderWidth: 2,
    borderColor: palette.borderLight,
    gap: 4,
  },
  btnActive: {
    backgroundColor: palette.accentMuted,
    borderColor: palette.accent,
  },
  btnPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  btnIcon: {
    marginBottom: 2,
  },
  btnText: {
    color: palette.muted,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 15,
  },
  btnTextActive: {
    color: palette.accent,
  },
});
