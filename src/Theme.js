import { extendTheme } from "@chakra-ui/react"

const CustomTheme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
        },
      }),
    },
});

export default CustomTheme;