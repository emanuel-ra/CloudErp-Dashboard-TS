import { ENVIRONMENT_MODE } from '../setup/constants'
export const Footer = () => {
  return (
    <footer className='[grid-area:foot] footer flex justify-between px-2'>
      <span className=''>
        © {new Date().getFullYear()}, made with ❤, by{' '}
        <a
          className='font-semibold hover:text-slate-700 dark:hover:text-white'
          href='#'
        >
          Massive Home - TI
        </a>
        .
      </span>
      <span className='font-semibold'>Environment: {ENVIRONMENT_MODE}</span>
    </footer>
  )
}
