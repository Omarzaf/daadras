import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "4px",
  },
  variants: {
    "primary-flat": {
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0",
      _hover: {
        backgroundColor: "transparent",
      },
      _active: {
        backgroundColor: "transparent",
      },
      _focus: {
        backgroundColor: "transparent",
      },
    },
    "primary-blue": {
      backgroundColor: "#365486",
      color: "#fff",
      fontWeight: "medium",
      fontSize: "sm",
    },
    "primary-white": {
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "medium",
      fontSize: "sm",
    },
    "primary-black": {
      backgroundColor: "#000",
      color: "#fff",
      fontWeight: "medium",
      fontSize: "sm",
    },
    "primary-sky-blue": {
      backgroundColor: "#7FC7D9",
      color: "#000",
      fontWeight: "medium",
      fontSize: "sm",
    },
  },
});
