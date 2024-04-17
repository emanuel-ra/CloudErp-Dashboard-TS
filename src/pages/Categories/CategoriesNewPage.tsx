import { ArrowNarrowLeftIcon, PlusIcon } from '@heroicons/react/solid'
import { useEffect, useRef } from 'react'
import 'sweetalert2/dist/sweetalert2.css'
import { ButtonCircle } from '../../components/Buttons/ButtonCircle'
import { ButtonLinkCircle } from '../../components/Buttons/ButtonLinkCircle'
import { Card } from '../../components/Card'
import { SimpleCheckbox } from '../../components/Checkboxes/SimpleCheckbox'
import { TextInput } from '../../components/Inputs/TextInput'
import { SimpleSelect } from '../../components/Selects/SimpleSelect'
import { useCategoriesCreate } from '../../hooks/Catgories/useCategoriesCreate'
import { useCategoriesList } from '../../hooks/Catgories/useCategoriesList'

export const CategoriesNewPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { createCategories } = useCategoriesCreate()
  const { getParents, parents } = useCategoriesList()

  useEffect(() => {
    getParents()
  }, [])

  const handleClick = () => {}

  return (
    <Card className='grow flex flex-col gap-y-2'>
      <div className='flex justify-between items-center p-4 border-b mb-5'>
        <div>
          <h1 className='text-3xl font-bold'>Registro de Categoria Nueva</h1>
        </div>
        <div className='flex gap-4'>
          <ButtonLinkCircle path='/catalogue/categories'>
            <ArrowNarrowLeftIcon className='size-6' />
          </ButtonLinkCircle>

          <ButtonCircle
            title='Save New Category'
            onClick={handleClick}
          >
            <PlusIcon className='size-6' />
          </ButtonCircle>
        </div>
      </div>

      <form
        className='flex w-full '
        ref={formRef}
      >
        <div className='flex flex-col gap-y-4 w-full'>
          <div className='w-full'>
            <label className='text-gray-900'>Nombre</label>
            <TextInput name='Nombre' />
          </div>

          <div className='w-full'>
            <label className='text-gray-900'>Categories</label>
            <div>
              <SimpleSelect id='statusId'>
                <option value='0'></option>
                {parents.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                ))}
              </SimpleSelect>
            </div>
          </div>

          <div className='w-full flex gap-x-2 items-center'>
            <SimpleCheckbox />
            <span>Website</span>
          </div>
        </div>
      </form>
    </Card>
  )
}
