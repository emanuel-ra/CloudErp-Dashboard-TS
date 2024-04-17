import { CloudDownloadIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Image } from '../../abstraction/Interfaces/IProducts'
import { Button } from '../../components/Buttons/Button'
import { Card } from '../../components/Card'
import { Thumbnail } from '../../components/Images/Thumbnail'
import { useProductsGallery } from '../../hooks/Products/useProductsGallery'
import { useFileInput } from '../../hooks/useFileInput'

export const ProductsGallery = () => {
  const { id } = useParams()
  const location = useLocation()
  const { images, code, name } = location.state

  if (!id) {
    return <div>error</div>
  }

  const { files, fileRejections, acceptedFiles, getRootProps, getInputProps } =
    useFileInput()
  const { uploadImages, loading } = useProductsGallery()
  const thumbs = files?.map((file) => (
    <Thumbnail
      key={file.name}
      file={file}
    />
  ))

  const thumbsUploaded = images?.map((image: Image) => (
    <>
      <div
        className='relative group cursor-pointer'
        key={image.id}
      >
        <img
          className='w-24 h-auto overflow-hidden rounded'
          src={image.imageUrl}
        />
        <button className='hidden group-hover:block bg-red-500 rounded-full absolute top-1 right-1 p-1 shadow border hover:bg-red-400 hover:scale-105'>
          <TrashIcon className='size-6' />
        </button>
      </div>
    </>
  ))

  const handleClick = () => {
    if (!files.length) return

    const parseId: number = parseInt(id)

    if (!parseId) return

    uploadImages({ id: parseId, images: acceptedFiles })
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [loading])

  return (
    <Card>
      <div className='flex mb-5 justify-end'>
        <Button Click={handleClick}>
          <PlusIcon className='size-4' />
          Guardar
        </Button>
      </div>
      <div className='w-full mb-2'>
        <h2>Descripción: {name}</h2>
        <h3>Código: {code}</h3>
      </div>
      <section className='flex flex-col items-center justify-center w-full'>
        <div
          {...getRootProps({
            className:
              'dropzone flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer',
          })}
        >
          <input {...getInputProps()} />

          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <CloudDownloadIcon className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' />

            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop
            </p>

            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Only Webp format
            </p>
          </div>
        </div>

        <aside className='flex flex-row flex-wrap mt-4 gap-x-3'>
          {thumbsUploaded}
          {thumbs}
        </aside>
        {fileRejections.length > 0 && (
          <div className='w-full flex items-center justify-center bg-red-500/80 dark:bg-red-800 text-white py-4 rounded shadow border-2 border-slate-800 dark:border-white border-dashed'>
            <span className='font-semibold text-xl'>
              Only Webp format are admit 😥
            </span>
          </div>
        )}
      </section>
    </Card>
  )
}
