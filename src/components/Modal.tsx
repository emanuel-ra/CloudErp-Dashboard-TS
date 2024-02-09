import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string; 
  maxHeight?: string; 
}


export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, maxWidth , maxHeight }) => {
  const modalClasses = isOpen
    ? 'fixed inset-0 flex items-center justify-center'
    : 'hidden';

  return (
    <>
      <div
        className={`modal-overlay ${modalClasses}`}
        onClick={onClose}
      ></div>
      <div className={`modal ${modalClasses}`}>
        <div className={`relative max-w-[${maxWidth}] max-h-[${maxHeight}] overflow-x-auto overflow-y-auto rounded-lg border border-gray-200 bg-white dark:bg-gray-900 text-sm p-4`}>
          {children}
        </div>
      </div>
    </>
  );
};

interface ModalFooterProps {
  onClose: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  onClose
}) => {
  return (
    <div className="modal-footer mt-20 flex">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onClose}
        title="Exit"
      >
      <svg 
        data-slot="icon" 
        fill="none" 
        stroke-width="1.5" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true"
        className="w-5 h-5">

        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3">
          </path>

      </svg>
      </button>
      <div className="ml-auto">
      <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          title="Guardar"
        >
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-5 h-5" 
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            ></path>
          </svg>
        </button>
      </div>

    </div>
  );
};
