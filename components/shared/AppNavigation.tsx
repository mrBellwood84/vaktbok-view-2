"use client"

import Link from "next/link";
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {uiSlice} from "@/store/slices/uiSlice";
import {Brightness4, Brightness7} from "@mui/icons-material";
import {SettingStorage} from "@/utils/storage/settingStorage";

type LinkVariant = "text" | "outlined";

interface LinkData {
    label: string;
    href: string;
    variant: LinkVariant
}

const links: LinkData[] = [
    {
        label: "Hjem",
        href: "/",
        variant: "outlined",
    },
    {
        label: "Kalender",
        href: "/calendar",
        variant: "text",
    },
    {
        label: "Endringer",
        href: "/changes",
        variant: "text",
    },
    {
        label: "Fordeling",
        href: "/heatmap",
        variant: "text",
    },
    {
        label: "Ansatte",
        href: "/employee",
        variant: "text",
    },
    {
        label: "Informasjon",
        href: "/info",
        variant: "text",
    }
]

export const AppNavigation = () => {

    const dispatch = useAppDispatch();
    const themeMode = useAppSelector(state => state.ui.mode);

    const changeMode = () => {
        const newMode = themeMode === "light" ? "dark" : "light";
        dispatch(uiSlice.actions.setMode(newMode));
        SettingStorage.setThemeMode(newMode);
    }

    return (
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{flexGrow: 1}}>
                    {links.map((link, index) => (
                        <Button
                            key={`nav-link-${index}`}
                            component={Link}
                            href={link.href}
                            variant={link.variant}
                            color="inherit"
                            sx={{
                                ml: index == 0 ? 0 : 1,
                                mr: index == (links.length - 1) ? 0 : 1
                            }}>
                            {link.label}
                        </Button>
                    ))}
                    </Box>
                    <IconButton color="inherit" onClick={changeMode}>
                        {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}