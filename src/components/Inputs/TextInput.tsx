import { useTranslation } from "react-i18next";

interface Props {
  name?: string;
  id?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
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
