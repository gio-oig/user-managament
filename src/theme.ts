import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  lineHeights: {
    "12": "3rem",
  },
  components: {
    Input: {
      variants: {
        flushed: {
          field: {
            borderColor: "#707070",
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          padding: "16px 42px",
          borderRadius: "100px",
          fontSize: "16px",
          bg: "red.400",
          color: "white",
          fontWeight: "semibold",
          lineHeight: "21px",
        },
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        solid: {},
        link: {
          ":focus": {
            outlone: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});
