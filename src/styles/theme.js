
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#597aff",
            // light: main값을 통해 계산됨
            // dark: main값을 통해 계산됨
            // contrastText: main값을 통해 계산됨
        },
    },
    shape: {
        borderRadius: 10,
    },
});