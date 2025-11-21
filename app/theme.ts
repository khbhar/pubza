import { PaletteMode, createTheme } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

export const brandPalette = {
  blue: "#08b0e5",
  yellow: "#f6d434",
  magenta: "#e51268",
  dark: "#0d0f14",
  charcoal: "#11141c",
  offWhite: "#f7f7f5",
};

export const surfacePalette: Record<ThemeMode, {
  background: string;
  surface: string;
  surfaceMuted: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
}> = {
  dark: {
    background: "#0b0f17",
    surface: "#11141c",
    surfaceMuted: "#0f1523",
    textPrimary: "#f5f6f9",
    textSecondary: "#c8ccd9",
    border: "rgba(255,255,255,0.08)",
  },
  light: {
    background: "#f7f7f5",
    surface: "#ffffff",
    surfaceMuted: "#eef1f6",
    textPrimary: "#0f1320",
    textSecondary: "#4b5565",
    border: "rgba(15,19,32,0.08)",
  },
};

export const createPubzaTheme = (mode: ThemeMode = "dark") => {
  const surfaces = surfacePalette[mode];
  return createTheme({
    palette: {
      mode: mode as PaletteMode,
      primary: {
        main: brandPalette.blue,
      },
      secondary: {
        main: brandPalette.yellow,
        contrastText: brandPalette.dark,
      },
      warning: {
        main: brandPalette.magenta,
      },
      background: {
        default: surfaces.background,
        paper: surfaces.surface,
      },
      text: {
        primary: surfaces.textPrimary,
        secondary: surfaces.textSecondary,
      },
      divider: surfaces.border,
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: "var(--font-body)",
      h1: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h4: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
      },
      h5: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
      },
      button: {
        fontWeight: 700,
        textTransform: "none",
        letterSpacing: 0,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 18,
            paddingBlock: 10,
          },
          containedPrimary: {
            boxShadow: "0 15px 38px rgba(8, 176, 229, 0.35)",
          },
          containedSecondary: {
            boxShadow: "0 14px 32px rgba(246, 212, 52, 0.32)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 18,
            border: `1px solid ${surfaces.border}`,
            boxShadow: mode === "dark"
              ? "0 25px 60px rgba(0,0,0,0.35)"
              : "0 18px 40px rgba(15,19,32,0.12)",
          },
        },
      },
    },
  });
};

const theme = createPubzaTheme("dark");

export default theme;
