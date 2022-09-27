import { createTheme } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { brown, grey, lightGreen, lime } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";

//Global Theme
export const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[700],
    },
    secondary: {
      main: lime[900],
    },
    brown: {
      main: brown[300],
    },
    grey: {
      main: grey[300],
    },
  },
});

//Data Grid Theme
const ODD_OPACITY = 0.2;

export const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));
