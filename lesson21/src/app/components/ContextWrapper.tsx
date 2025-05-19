"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeContext, { ThemeType } from "@/context/themeContext";
import type { PropsWithChildren } from "react";

type ContextWrapperProps = {
  value: ThemeType;
};

const ContextWrapper = ({
  children,
  value,
}: PropsWithChildren<ContextWrapperProps>) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ContextWrapper;
