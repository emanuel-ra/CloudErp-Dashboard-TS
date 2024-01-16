import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ISideNavBarOption {
  icon: React.ReactNode;
  label: string;
  path: string;
  isMini: boolean;
}
interface ISideNavBarOptionCallback {
  icon: React.ReactNode;
  label: string;
  callback: Function;
  isMini: boolean;
}
export const SideNavBarOption = ({
  icon,
  label,
  path,
  isMini,
}: ISideNavBarOption) => {
  const { t } = useTranslation();
  return (
    <li
      className={`group cursor-pointer relative flex max-md:flex-col text-center items-center py-0 px-0 gap-2 w-full hover:rounded-lg hover:shadow-lg 
      hover:bg-blue-700/80      
      text-slate-600 hover:text-white
      dark:text-white dark:hover:bg-blue-800`}
    >
      <Link
        to={path}
        className="flex gap-2 items-center w-full h-full text-left py-2 px-4"
      >
        <i
          className={`w-5 h-5 ${
            isMini && "text-center justify-center font-bold text-xl"
          }`}
        >
          {icon}
        </i>
        {!isMini && <span>{t(`${label}`)}</span>}
      </Link>

      {isMini && (
        <>
          <span className="absolute w-28 top-0 left-20 scale-0 rounded bg-gray-800 dark:group-hover:bg-white dark:group-hover:text-slate-800 p-2 text-xs text-white group-hover:scale-100 z-[100]">
            {t(label)}
          </span>
        </>
      )}
    </li>
  );
};

export const SideNavBarOptionCallback = ({
  icon,
  label,
  callback,
  isMini,
}: ISideNavBarOptionCallback) => {
  return (
    <li
      className={`relative group cursor-pointer flex max-md:flex-col text-center items-center py-2 px-4 gap-2 w-full z-50
      text-slate-600
      hover:rounded-lg hover:shadow-lg  hover:bg-blue-700/80 hover:text-white             
      dark:text-white dark:hover:bg-blue-800`}
    >
      <a
        href="#"
        onClick={() => {
          callback();
        }}
        className="flex gap-2 items-center justify-center "
      >
        <i
          className={`w-5 h-5 ${
            isMini && "text-center justify-center font-bold text-xl"
          }`}
        >
          {icon}
        </i>
        {!isMini && <span>{label}</span>}
      </a>

      {isMini && (
        <>
          <span className="absolute w-28 top-0 left-20 scale-0 rounded bg-gray-800 dark:group-hover:bg-white dark:group-hover:text-slate-800 p-2 text-xs text-white group-hover:scale-100 z-50">
            {label}
          </span>
        </>
      )}
    </li>
  );
};
