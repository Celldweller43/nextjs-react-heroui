"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const ModeSelector = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [, setModeIcon] = useState(<IoIosMoon />);

  useEffect(() => {
    setMounted(true);
    showMode();
  }, []);

  // This resolves hydration issues by waiting until mounting has completed.
  if (!mounted) {
    return null;
  }

  function showMode() {
    if (theme === "dark") setModeIcon(<IoIosMoon />);
    else setModeIcon(<IoIosSunny />);
  }

  return (
    <div>
      {theme === "dark" ? (
        <IoIosMoon
          onClick={() => setTheme("light")}
          className="text-blue-600 font-bold cursor-pointer text-xl"
        />
      ) : (
        <IoIosSunny
          onClick={() => setTheme("dark")}
          className="text-amber-200 font-bold cursor-pointer text-xl"
        />
      )}
      {/* The current theme is: {theme}
      <br />
      <button
        className="mode"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className="mode"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button> */}
    </div>
  );
};

export default ModeSelector;
