import React from 'react'

interface Option {
  value: any
  label: string
}
interface Select {
  name: string
  id: string
  label: string
  value?: any
  options: any
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void

}

export const Select = (props: Select) => {
  const { id, name, label, value, options, onChange } = props
  return (
    <div className='mb-4'>
      <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        {options.map((option: Option, index: number) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>

        ))}

      </select>
    </div>
  )
}
