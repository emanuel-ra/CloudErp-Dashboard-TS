import { useId } from 'react'

interface Props {
  id?: string
  name?: string
  children: React.ReactNode
}
export const SimpleSelect = (props: Props) => {
  const { id = useId(), name, children } = props
  return (
    <select
      name={name}
      id={id}
      className='w-full lg:min-h-11 py-1 px-2 rounded border-[1px] text-slate-900 bg-white dark:bg-gray-900 dark:text-white dark:border-white/90 capitalize'
    >
      {children}
    </select>
  )
}
