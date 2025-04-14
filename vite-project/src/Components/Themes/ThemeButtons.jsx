import { useEffect, useState } from "react";

const ThemeButtons = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const setThemeMode = (mode) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setThemeMode("light")}
        className={`text-sm px-3 py-1 rounded border ${
          theme === "light"
            ? "bg-yellow-300 text-black border-yellow-400"
            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
        }`}
        aria-pressed={theme === "light"}
      >
        Light
      </button>
      <button
        onClick={() => setThemeMode("dark")}
        className={`text-sm px-3 py-1 rounded border ${
          theme === "dark"
            ? "bg-blue-800 text-white border-blue-600"
            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
        }`}
        aria-pressed={theme === "dark"}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemeButtons;
