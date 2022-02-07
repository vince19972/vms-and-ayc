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
      flower: "hsla(36, 100%, 50%, 1)",
      heart: "hsla(0, 100%, 60%, 1)",
      word: "hsl(48, 100%, 50%, 1)",
      surface: "hsla(315, 73%, 79%, 1)",
      surfaceText: "hsla(311, 81%, 78%, 1)",
      defaultText: "hsla(0, 0%, 0%, 1)",
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
