import { useEffect, useState } from "react";
import { useTheme } from "nextra-theme-docs";

export const Logo = () => {
  const { theme } = useTheme();
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    setDark(theme === "dark");
  }, [theme]);

  const fill = isDark ? "#ffff00" : "currentColor";

  return (
    <div>
      <svg
        className="nx-w-full nx-py-4"
        style={{ maxWidth: "128px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 443.3 153.4"
      >
        <g id="g148" transform="translate(-87 -48.3)">
          <rect
            fill={fill}
            id="rect136"
            width="28.7"
            height="28.7"
            x="164.7"
            y="125"
          />
          <path
            fill={fill}
            id="path138"
            d="M136 96.3a28.7 28.7 0 0 1 28.7 28.7H136z"
          />
          <polygon
            fill={fill}
            id="polygon140"
            points="152.6 153.7 136 125 119.4 153.7"
          />
          <circle fill={fill} id="circle142" cx="193.5" cy="110.7" r="14.3" />
          <path
            fill={fill}
            id="path146"
            d="M163.6 201.7c-20.5 0-39.7-8-54.2-22.5A76.2 76.2 0 0 1 86.9 125a76 76 0 0 1 22.5-54.2 76.2 76.2 0 0 1 54.2-22.5c20.5 0 39.8 8 54.3 22.5a76.2 76.2 0 0 1 22.4 54.2 76.2 76.2 0 0 1-76.7 76.7zm0-144A66.8 66.8 0 0 0 96.4 125a66.8 66.8 0 0 0 67.2 67.2 66.8 66.8 0 0 0 67.2-67.2 66.8 66.8 0 0 0-67.2-67.2Z"
          />
        </g>
        <text
          id="text152"
          x="191"
          y="105.4"
          fill={fill}
          fontFamily='SpaceGrotesk-Medium,"Space Grotesk"'
          fontSize="77.8"
          font-weight="500"
        >
          <tspan id="tspan150" x="191" y="105.4">
            SPECS
          </tspan>
        </text>
      </svg>
    </div>
  );
};
