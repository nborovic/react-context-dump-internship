import { IconButton } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import { useTheme } from "providers/ThemeProvider";

import classes from "./index.module.css";

const ThemeButton = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <IconButton className={classes.themeButton} onClick={toggleMode}>
      {isDarkMode ? (
        <DarkModeIcon color="primary" />
      ) : (
        <LightModeIcon color="primary" />
      )}
    </IconButton>
  );
};

export default ThemeButton;
