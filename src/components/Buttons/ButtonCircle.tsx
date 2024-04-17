import React from 'react'

interface Props {
  children: React.ReactNode
  title: string
  variant?: 'blue' | 'red' | 'yellow' | 'yellow' | 'green'
  type?: 'button' | 'submit'
  onClick?: () => void
}

export const ButtonCircle = (props: Props) => {
  const { children, title, variant = 'blue', type = 'button', onClick } = props
  return (
    <button
      onClick={onClick}
      title={title}
      type={type}
      className={`bg-${variant}-700/90 
                text-white
                hover:bg-${variant}-700
                hover:text-white 
                focus:ring-${variant}-300 
                focus:ring-4
                focus:outline-none        
                font-medium
                rounded-full 
                text-sm p-2.5
                text-center 
                inline-flex 
                items-center
                `}
    >
      {children}
    </button>
  )
}
