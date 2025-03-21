
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider 
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={true}
      value={{
        light: "light",
        dark: "dark"
      }}
      {...props}
    >
      <div className="transition-colors duration-300">
        {children}
      </div>
    </NextThemesProvider>
  );
};



