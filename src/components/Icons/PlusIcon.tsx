interface Props {
  size: number;
  strokeWidth: number;
}
export const PlusCircleIcon = (props:Props) => {
    const { size = 6, strokeWidth = 1.5} = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={strokeWidth}
      stroke='currentColor'
      className={`size-${size}`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
      />
    </svg>
  );
}
