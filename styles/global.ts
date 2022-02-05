import { globalCss } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export const globalStyles = globalCss(...normalize, {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});
