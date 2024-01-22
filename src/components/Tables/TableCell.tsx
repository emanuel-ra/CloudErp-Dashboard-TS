import { Children } from "react";

interface Props {
  children: React.ReactNode;
}
export const TableCell = (props: Props) => {
  const { children } = props;
  return (
    <td className="text-balance px-4 py-2 font-medium text-gray-900 dark:text-white/90">
      {children}
    </td>
  );
};
