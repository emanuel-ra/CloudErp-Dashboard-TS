import React from 'react'

interface Props {
  label?: string
  children?: React.ReactNode
}
export const DropdownGroup = (props: Props) => {
  const { label, children } = props
  return (
    <div className='p-2'>
      <strong className='block p-2 text-xs font-medium uppercase text-gray-400'>
        {' '}
        {label}{' '}
      </strong>
      {children}
    </div>
  )
}
