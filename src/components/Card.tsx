import React from "react";

interface Props {
  children: React.ReactNode;
}
export const Card = ({ children }: Props) => {
  return (
    <div className="w-full h-full rounded bg-white/90 dark:bg-gray-500/90 p-5">
      {children}
    </div>
  );
};
