
interface Props {
  children: React.ReactNode
  className?: string
}
export const TableCell = (props: Props) => {
  const { children, className } = props
  return (
    <td
      className={`text-balance px-4 py-2 font-medium text-gray-900 dark:text-white/90 ${className} `}
    >
      {children}
    </td>
  )
}
