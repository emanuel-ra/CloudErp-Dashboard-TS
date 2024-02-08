import { useTranslation } from "react-i18next";
import React, { InputHTMLAttributes } from 'react';


interface Props {
  name?: string;
  id?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
}

interface InpProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  id?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  //[key: string] : any;
}

export const TextInput = (props: Props) => {
  const { id, name, placeholder, error, errorMessage } = props;
  return (
    <div className="flex flex-col gap-y-2">
      <input
        type="text"
        className="w-full lg:min-h-11 py-1 px-2 rounded border-[1px] text-slate-900 bg-white dark:bg-gray-900 dark:text-white dark:border-white/90 "
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {error && <small className="text-red-600 px-2">{errorMessage}</small>}
    </div>
  );
};

export const InputModalS = (props: InpProps) => {
  const { id, name, placeholder, error, errorMessage, value } = props;
  return (
    <div className="flex flex-col gap-y-2">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
      />
      {error && <small className="text-red-600 px-2">{errorMessage}</small>}
    </div>
  );
};

export const InputModalL = (props: InpProps) => {
  const { id, name, placeholder, error, errorMessage , value, ...rest } = props;
  return (
    <div className="flex flex-col gap-y-2">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        {...rest}

      />
      {error && <small className="text-red-600 px-2">{errorMessage}</small>}
    </div>
  );
};
