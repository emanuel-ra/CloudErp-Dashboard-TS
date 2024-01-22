import React from "react";

interface Props {
  children: React.ReactNode;
}
export const TableHeadCell = (props: Props) => {
  const { children } = props;
  return (
    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white/90">
      {children}
    </th>
  );
};
