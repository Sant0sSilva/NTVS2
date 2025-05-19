"use client";

import { createContext } from "react";

export type ThemeType = "light" | "dark";

const ThemeContext = createContext<ThemeType | null>("dark");

export default ThemeContext;
