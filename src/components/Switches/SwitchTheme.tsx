import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import { useThemeStore } from "../../stores/ui/theme"

export const SwitchTheme = ()=>{
    const theme = useThemeStore(state => state.theme)
    const setTheme = useThemeStore(state => state.setTheme)

    const handleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    }; 
     return (
        <>
            <div
            className={`relative flex justify-between items-center w-24 h-12 py-1 rounded-full gap-2 transition delay-100 cursor-pointer shadow-lg
            bg-blue-500  
            dark:bg-slate-700          
            `}
            onClick={handleTheme}
        >
            
            {theme === "light" ? (
            <span
                className={`w-1/2 h-auto flex justify-center items-center p-2 text-white translate-x-full transition delay-100 ease-linear`}
            >
                <MoonIcon size={3.5} />
            </span>
            ) : (
            <span
                className={`w-1/2 h-auto flex justify-center items-center p-2 transition delay-100 ease-linear`}
            >
                <SunIcon size={3.5} />
            </span>
            )}

            <button
            className={`absolute h-12 w-12 flex justify-center items-center  rounded-full p-2 shadow-lg
            bg-white
            dark:text-slate-800          
            text-blue-500
            ${
                theme === "light"
                ? "transition ease-linear delay-100"
                : "translate-x-full transition delay-100 ease-linear"
            }
            `}
            >
            {theme === "light" ? <SunIcon css={`transition delay-100 ease-in-out`} size={3.5} /> : <MoonIcon css={`transition delay-100  ease-in-out`} size={3.5} />}
            </button>
        </div>
        </>
    );
}