import React from "react";

interface Props {
  children?: React.ReactNode;
  Click?: () => void;
}
export const ButtonIcon = (props: Props) => {
  const { children, Click } = props;
  return (
    <button
      className="flex gap-x-1 lg:min-h-11 justify-center items-center capitalize rounded bg-blue-700/90 text-white dark:bg-blue-900/90 hover:bg-blue-700 hover:dark:bg-blue-900 px-2 py-2"
      onClick={Click}
    >
      {children}
    </button>
  );
};
