"use client";

import { ReactNode, useEffect } from "react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { uiSlice } from "@/store/slices/uiSlice";
import { getCustomTheme } from "@/theme/theme";
import { SettingStorage } from "@/utils/storage/settingStorage";

interface Props {
  children: ReactNode;
}

export const StyleProvider = (props: Props) => {

  const dispatch = useAppDispatch();
  const { setInitialMode } = uiSlice.actions;
  const { mode, initialized } = useAppSelector(state => state.ui);

  useEffect(() => {
    const savedTheme = SettingStorage.getThemeMode();
    dispatch(setInitialMode(savedTheme));
  }, [dispatch, setInitialMode]);

  const theme = getCustomTheme(mode);

  if (!initialized) return <div>Page loading!!!</div>;

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {props.children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};