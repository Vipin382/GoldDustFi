import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setDarkTheme] = useState<string>("light");

  theme === "dark"
    ? document.querySelector("html")?.classList.add("dark")
    : document.querySelector("html")?.classList.remove("dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setDarkTheme };
};

export default useDarkMode;
