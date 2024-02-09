import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? 'fixed inset-0 flex items-center justify-center'
    : 'hidden'

  return (
    <>
      <div
        className={`modal-overlay ${modalClasses}`}
        onClick={onClose}
      />
      <div className={`modal ${modalClasses}`}>
        <div className='relative w-full h-full max-w-[50%] max-h-[82%] overflow-x-auto overflow-y-auto rounded-lg border border-gray-200 bg-white dark:bg-gray-900 text-sm p-4'>
          {children}
        </div>
      </div>
    </>
  )
}

interface ModalFooterProps {
  onClose: () => void
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  onClose
}) => {
  return (
    <div className='modal-footer mt-20 flex'>
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={onClose}
        title='Exit'
      >
        <svg
          className='w-5 h-5'
          data-slot='icon'
          fill='none'
          strokeWidth='1.5'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
          />
        </svg>
      </button>
      <div className='ml-auto'>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          title='Guardar'
        >
          <svg
            data-slot='icon'
            fill='none'
            stroke-width='1.5'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            className='w-5 h-5'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
            />
          </svg>
        </button>
      </div>

    </div>
  )
}
