interface Props {
  label:string;
  options?:Options[]  
  id?:string
  name?:string
}

<<<<<<< HEAD
interface Option {
  value: any;
  label: string;
}
interface Select{
    name: string;
    id: string;
    label: string;
    value: any;
    options: any;

}

export const Select = (props : Select) => {
  const { id, name, label, value, options } = props;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        name={name}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option:Option,  index:number) => (
          <option key={`${option.value}-${index}`} value={option.value}>
          {option.label}
=======
interface Options{
  value:string | number;
  label:string
}

export const Select = ({ label, options, ...rest }:Props) => {
  return (
    <div className='mb-4'>
      <label htmlFor={rest.id} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <select
        {...rest}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        {options?.map((option:Options,index) => (
          <option key={index} value={option.value}>
            {option.label}
>>>>>>> 28dfc839a50759e21c184197d60f5a3339683999
          </option>
          
        ))}

      </select>
    </div>
  )
}
