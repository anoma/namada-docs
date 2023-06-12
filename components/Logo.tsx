import { useEffect, useState } from "react";
import { useTheme } from "nextra-theme-docs";

export const Logo = () => {
  const { theme } = useTheme();
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    setDark(theme === "dark");
  }, [theme]);

  return (
    <div>
      <svg
        className="nx-w-full nx-py-4 nx-max-w-[200px] "
        style={{ maxWidth: "100px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 751 208.9"
        fill={isDark ? "#ffff00" : "currentColor"}
      >
        <rect width="61.5" height="208.9" x="689.5" />
        <rect width="61.5" height="208.9" x="609.5" />
        <rect width="61.5" height="208.9" x="529" />
        <polygon points="476.9 208.9 409.8 208.9 409.8 70.1 332.4 70.1 332.4 208.9 265.3 208.9 265.3 0 476.9 0 476.9 208.9" />
        <circle cx="371.1" cy="111.5" r="28.8" />
        <polygon points="211.5 208.9 144.5 208.9 144.5 70.1 67 70.1 67 208.9 0 208.9 0 0 211.5 0 211.5 208.9" />
      </svg>
    </div>
  );
};
