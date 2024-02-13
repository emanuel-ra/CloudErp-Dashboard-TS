interface Props {
  children: React.ReactNode
}
export const Table = (props: Props) => {
  const { children } = props
  return (
    <>
      <div className='relative w-full overflow-x-auto rounded-lg border border-gray-200 lg:max-h-[700px]'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white dark:bg-gray-900 text-sm '>
          {children}
        </table>
      </div>
    </>
  )
}
