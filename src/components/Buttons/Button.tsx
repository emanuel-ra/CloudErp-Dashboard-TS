import React from 'react'

interface Props {
  children?: React.ReactNode
  Click?: () => void
}
interface PropsAdd {
  children?: React.ReactNode
  Click?: () => void
  onClick: () => void
  svg: React.ReactNode

}
interface PropsEdit {
  children?: React.ReactNode
  Click?: () => void
  onClick: (id: number) => void
}
export const Button = (props: Props) => {
  const { children, Click } = props
  return (
    <button
      className='flex gap-x-1 lg:min-h-11 justify-center items-center capitalize rounded bg-blue-700/90 text-white dark:bg-blue-900/90 hover:bg-blue-700 hover:dark:bg-blue-900 px-2 py-2'
      onClick={Click}
    >
      {children}
    </button>
  )
}

export const ButtonCircleEdit = (props: PropsEdit) => {
  const handleClick = () => {
    const id = 0
    onClick(id)
  }
  const { children, onClick } = props
  return (
    <button
      type='button'
      className='bg-blue-700/90 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
      onClick={handleClick}
    >
      <svg className='w-4 h-4' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
      </svg>
      <span className='sr-only'>{children}</span>
    </button>
  )
}

export const ButtonCircleAdd = (props: PropsAdd) => {
  const { onClick, svg } = props
  return (
    <button
      type='button'
      className='bg-blue-700/90 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
      onClick={onClick}
      title='Nuevo'
    >
      {svg}
    </button>
  )
}

export const ButtonCircleDel = (props: PropsEdit) => {
  const handleClick = () => {
    const id = 0
    onClick(id)
  }
  const { children, onClick } = props
  return (
    <button
      type='button'
      className='bg-red-700/90 text-white hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
      onClick={handleClick}
    >
      <svg className='w-4 h-4' fill='none' stroke-width='1.5' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
        <path stroke-linecap='round' stroke-linejoin='round' d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0' />
      </svg>
      <span className='sr-only'>{children}</span>
    </button>
  )
}
