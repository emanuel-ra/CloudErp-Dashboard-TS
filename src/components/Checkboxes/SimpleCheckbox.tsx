import { useId } from 'react'

interface Props {
  label?: string
  checkClass?: string
  value?: string | number
}
export const SimpleCheckbox = (props: Props) => {
  const { label, checkClass, value } = props
  const id = useId()
  return (
    <label
      htmlFor={id}
      className='flex cursor-pointer items-start gap-4 py-4'
    >
      <div className='flex items-center'>
        &#8203;
        <input
          type='checkbox'
          className={`size-4 rounded border-gray-300 ${checkClass}`}
          id={id}
          defaultValue={value}
        />
      </div>

      <div>
        <strong className='font-medium text-gray-900 uppercase'>
          {' '}
          {label}{' '}
        </strong>
      </div>
    </label>
  )
}
