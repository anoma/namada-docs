import { useState, useEffect } from 'react';
import { useTheme } from 'nextra-theme-docs';

export const SpecsAscii = () => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setDark] = useState(resolvedTheme === "dark");

  useEffect(() => {
    setDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  // Construct the image source paths based on theme mode
  const imageSrc = isDarkMode
    ? '/images/namada_specs_ascii_dark.png'
    : '/images/namada_specs_ascii_light.png';

  return (
    <div>
      {/* Conditional rendering based on theme mode */}
      <img src={imageSrc} alt={isDarkMode ? 'Dark Mode' : 'Light Mode'} width={2000} height={200} />
    </div>
  );
};
