import React from "react";

interface Props {
  children: React.ReactNode;
  css?: string;
  id?: string;
}
export const Card = ({ children, css, id }: Props) => {
  return (
    <div
      id={id}
      className={`w-full rounded bg-white/90 dark:bg-gray-900 dark:text-white p-5 ${css}`}
    >
      {children}
    </div>
  );
};
