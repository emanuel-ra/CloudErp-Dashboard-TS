import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const TableHeadCell = (props: Props) => {
  const { children, className } = props;
  return (
    <th
      className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white/90 ${className} `}
    >
      {children}
    </th>
  );
};
