"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeSwitch = (event: any) =>
    setTheme(event.target.checked ? "dark" : "light");

  return (
    <Switch
      size="lg"
      color="warning"
      startContent={<FaSun />}
      endContent={<FaMoon />}
      isSelected={theme === "dark"}
      onChange={handleThemeSwitch}
    />
  );
}
