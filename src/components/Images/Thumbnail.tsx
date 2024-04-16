import { FileWithPreview } from '../../abstraction/Interfaces/IUI'

interface Props {
  file: FileWithPreview
}
export const Thumbnail = (props: Props) => {
  const { file } = props

  return (
    <div
      className='flex border rounded border-dashed border-slate-800 m-2 w-28 box-border'
      key={file.name}
    >
      <div className='flex min-w-0 overflow-hidden'>
        <img
          src={file.preview}
          className='block w-auto overflow-hidden'
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </div>
    </div>
  )
}
