import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      flower: "#FF8000",
      heart: "#FF234D",
      word: "#FFE300",
      surface: "#FFB4E2",
      surfaceText: "hsla(311, 81%, 78%, 1)",
      brightText: "#FFFFFF",
      defaultText: "#000000",
    },
    fonts: {
      zh: 'Noto Sans TC, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      en: 'Noto Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    desktop1: "(min-width: 2060px)",
  },
});
