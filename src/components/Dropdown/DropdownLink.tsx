import { Link } from 'react-router-dom'

interface Props {
  label?: string
  href: string
  data?: Object
}

export const DropdownLink = (props: Props) => {
  const { label, href, data } = props

  return (
    <Link
      to={href}
      state={data}
      className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
      role='menuitem'
    >
      {label}
    </Link>
  )
}
