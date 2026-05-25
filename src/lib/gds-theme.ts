import { extendGdsTheme } from "@gds/theme/client";

export const lauraTheme = extendGdsTheme({
  primaryColor: "olive",
  colors: {
    olive: [
      "#f0f3eb",
      "#d8dfcb",
      "#becab0",
      "#a3b594",
      "#8aa17a",
      "#728960",
      "#5f7250",
      "#49573a",
      "#35422a",
      "#263021",
    ],
    sand: [
      "#fbf7ef",
      "#f5efe2",
      "#ede3d0",
      "#e0d2b9",
      "#d0bea0",
      "#b89b63",
      "#9d8353",
      "#7f6944",
      "#655236",
      "#4c3e2b",
    ],
  },
  primaryShade: 7,
  fontFamily: "var(--font-manrope), Manrope, sans-serif",
  headings: {
    fontFamily: "var(--font-fraunces), Fraunces, serif",
    fontWeight: "600",
  },
  defaultRadius: "lg",
  black: "#263323",
  white: "#fbf7ef",
  components: {
    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
      styles: {
        root: {
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontWeight: 800,
          boxShadow: "none",
        },
      },
    },
    Paper: {
      defaultProps: {
        radius: "xl",
        withBorder: true,
      },
      styles: {
        root: {
          boxShadow: "none",
        },
      },
    },
    Card: {
      defaultProps: {
        radius: "lg",
        withBorder: true,
      },
      styles: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});
