"use client";

export const SettingStorage = {
  setThemeMode: (newTheme: "light" | "dark") => localStorage.setItem("mode", newTheme),
  getThemeMode: () => localStorage.getItem("mode") as "light" | "dark" ?? "light",
};