// import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { useThemeStore } from "../../stores/ui/theme";

export const SwitchTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <>
      <div
        className={`relative flex justify-between items-center w-12 h-6  rounded-full gap-2 transition delay-100 cursor-pointer shadow-lg
            bg-blue-500/90  
            dark:bg-slate-700          
            `}
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <span
            className={`w-1/2 h-auto flex justify-center items-center p-1 text-white translate-x-full transition delay-100 ease-linear`}
          >
            <MoonIcon size={10} />
          </span>
        ) : (
          <span
            className={`w-1/2 h-auto flex justify-center items-center p-1 transition delay-100 ease-linear`}
          >
            <SunIcon size={10} />
          </span>
        )}

        <button
          className={`absolute h-6 w-6 flex justify-center items-center p-1 rounded-full shadow-lg
            bg-white
            dark:text-slate-800          
            text-blue-500/90
            ${
              theme === "light"
                ? "transition ease-linear delay-100"
                : "translate-x-full transition delay-100 ease-linear"
            }
            `}
        >
          {theme === "light" ? (
            <SunIcon css={`transition delay-100 ease-in-out`} size={12} />
          ) : (
            <MoonIcon css={`transition delay-100  ease-in-out`} size={12} />
          )}
        </button>
      </div>
    </>
  );
};
