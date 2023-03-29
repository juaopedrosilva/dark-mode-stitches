import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      text: "black",
      background: "white",
    },
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    text: "white",
    background: "black",
  },
});

export const GlobalStyles = globalCss({
  body: {
    background: "$background",
    color: "$text",
  },
});
