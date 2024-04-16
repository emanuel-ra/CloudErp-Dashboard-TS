import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { FileWithPreview } from "../abstraction/Interfaces/IUI"

export const useFileInput = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([])

  const { fileRejections,acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/webp': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  return { files, fileRejections,acceptedFiles, getRootProps, getInputProps }
}