import React, { useId } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

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
  const tooltipId = useId();
  return (
    <li
      className={`group cursor-pointer relative flex max-md:flex-col text-center items-center py-0 px-0 gap-2 w-full hover:rounded-lg hover:shadow-lg 
      hover:bg-blue-700/80      
      text-slate-600 hover:text-white
      dark:text-white dark:hover:bg-blue-800`}
    >
      <Tooltip id={tooltipId} />
      <Link
        data-tooltip-id={tooltipId}
        data-tooltip-content={t(`${label}`)}
        data-tooltip-place="top-start"
        data-tooltip-hidden={!isMini}
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
    </li>
  );
};

export const SideNavBarOptionCallback = ({
  icon,
  label,
  callback,
  isMini,
}: ISideNavBarOptionCallback) => {
  const tooltipId = useId();
  return (
    <li
      className={`relative group cursor-pointer flex max-md:flex-col py-2 px-4 gap-2 w-full
      text-slate-600
      hover:rounded-lg hover:shadow-lg  hover:bg-blue-700/80 hover:text-white             
      dark:text-white dark:hover:bg-blue-800`}
    >
      <Tooltip id={tooltipId} />
      <a
        data-tooltip-id={tooltipId}
        data-tooltip-content={label}
        data-tooltip-place="top-start"
        data-tooltip-hidden={!isMini}
        href="#"
        onClick={() => {
          callback();
        }}
        className="flex gap-2 items-center"
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
    </li>
  );
};
