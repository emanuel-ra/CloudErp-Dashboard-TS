import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
export const Card = ({ children, className, id }: Props) => {
  return (
    <div
      id={id}
      className={`relative overflow-x-auto w-full rounded bg-white/90 dark:bg-gray-900 dark:text-white  p-2 lg:p-5   ${className}`}
    >
      {children}
    </div>
  );
};
