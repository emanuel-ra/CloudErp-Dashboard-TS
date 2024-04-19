interface Props {
  name?: string
  id?: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
}
export const TextAreaInput = (props: Props) => {
  const { id, name, placeholder, error, errorMessage } = props
  return (
    <div className='flex flex-col'>
      <textarea
        className='w-full lg:min-h-11 py-1 px-2 rounded border-[1px] text-slate-900 bg-white dark:bg-gray-900 dark:text-white dark:border-white/90'
        name={name}
        id={id}
        placeholder={placeholder}
      ></textarea>
      {error && <span className='text-red-600 px-2'>{errorMessage}</span>}
    </div>
  )
}
