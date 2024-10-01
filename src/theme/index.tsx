import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-hind)",
    body: "var(--font-hind)",
  },
  colors: {
    "pale-aqua": "#DCF2F1",
    "sky-blue": "#7FC7D9",
    "steel-blue": "#365486",
    "navy-blue": "#0F1035",
    charcoal: "#353535",
    "ghost-white": "##EBF0F9",
    "snow-white": "#F8F8F8",
  },
  components: {
    Button,
  },
});
