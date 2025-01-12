import { ThemeProvider, useTheme } from "@/main";

export const ThemeDecorator = (Story: any) => {
  return (
    <ThemeProvider>
      <ToggleButton />
      <Story />
    </ThemeProvider>
  );
};

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 9999,
        padding: "8px 12px",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
