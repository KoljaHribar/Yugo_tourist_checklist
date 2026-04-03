import type { CountryFilterId } from "@/types/checklist";
import { Platform, type ViewStyle } from "react-native";

export const palette = {
  background: "#e4ecf7",
  backgroundDeep: "#d5e3f5",
  surface: "#ffffff",
  surfaceMuted: "#f6f9fc",
  text: "#122032",
  muted: "#54687c",
  accent: "#1d4ed8",
  accentBright: "#3b82f6",
  accentMuted: "#dbeafe",
  success: "#059669",
  successMuted: "#d1fae5",
  warning: "#c2410c",
  warningMuted: "#ffedd5",
  border: "#b8c9dc",
  borderLight: "#dce6f2",
  dangerBg: "#fef2f2",
  dangerText: "#991b1b",
  progressTrack: "#cbd5e1",
  navInactiveBg: "#f1f5f9",
};

/** Selected chip = main; unselected subtle tint = light */
export const filterChipTheme: Record<
  CountryFilterId,
  { main: string; light: string; textOnMain: string }
> = {
  all: { main: "#475569", light: "#e2e8f0", textOnMain: "#ffffff" },
  slovenia: { main: "#0284c7", light: "#e0f2fe", textOnMain: "#ffffff" },
  croatia: { main: "#dc2626", light: "#fee2e2", textOnMain: "#ffffff" },
  serbia: { main: "#4f46e5", light: "#e0e7ff", textOnMain: "#ffffff" },
  bosnia: { main: "#2563eb", light: "#dbeafe", textOnMain: "#ffffff" },
  macedonia: { main: "#a16207", light: "#fef9c3", textOnMain: "#ffffff" },
  montenegro: { main: "#7c3aed", light: "#ede9fe", textOnMain: "#ffffff" },
};

export const cardShadow: ViewStyle = Platform.select({
  ios: {
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  android: { elevation: 4 },
  default: {},
});

export const barShadow: ViewStyle = Platform.select({
  ios: {
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  android: { elevation: 8 },
  default: {},
});
