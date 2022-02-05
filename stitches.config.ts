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
    },
    fonts: {
      system: "system-ui",
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
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
  },
});
