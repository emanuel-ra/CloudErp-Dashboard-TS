interface Props {
  children: React.ReactNode;
}
export const TableBody = (props: Props) => {
  const { children } = props;
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
};
