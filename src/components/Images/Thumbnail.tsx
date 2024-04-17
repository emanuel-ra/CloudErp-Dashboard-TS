import { FileWithPreview } from '../../abstraction/Interfaces/IUI'

interface Props {
  file: FileWithPreview
}
export const Thumbnail = (props: Props) => {
  const { file } = props

  return (
    <div
      className='relative'
      key={file.name}
    >
      <img
        src={file.preview}
        className='w-24 h-auto overflow-hidden rounded'
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </div>
  )
}
