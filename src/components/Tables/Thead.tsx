interface Props {
  children: React.ReactNode;
}
export const Thead = (props: Props) => {
  const { children } = props;
  return (
    <thead className="ltr:text-left rtl:text-right sticky top-0 bg-white dark:bg-gray-950">
      {children}
    </thead>
  );
};
