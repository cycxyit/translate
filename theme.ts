import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
    colors: {
        lingva: {
            50: "#F7FAFC",
            100: "#EDF2F7",
            200: "#E2E8F0",
            300: "#CBD5E0",
            400: "#A0AEC0",
            500: "#718096",
            600: "#4A5568",
            700: "#2D3748",
            800: "#1A202C",
            900: "#171923"
        }
    },
    config: {
        initialColorMode: process.env["DEFAULT_DARK_THEME"] === "true" ? "dark" : "light",
        useSystemColorMode: true
    },
    styles:{
  global: (props) => ({
    body: {
      bg: mode("#f8f8f5", "#202023")(props),
      fontFamily:
        '-ui-monospace,SFMono-Regular,"SF Mono, Menlo",Consolas,Liberation Mono,monospace',
      lineHeight: 'base',
    },
  }),
},
    components: {
        Textarea: {
            variants: {
                outline: props => ({
                    borderColor: mode("lingva.500", "lingva.200")(props),
                    _hover: {
                        borderColor: mode("lingva.700", "lingva.400")(props),
                    },
                    _readOnly: {
                        userSelect: "auto"
                    }
                })
            }
        },
        Select: {
            variants: {
                flushed: props => ({
                    field: {
                        borderColor: mode("lingva.500", "lingva.200")(props)
                    }
                })
            }
        }
    }
});
