import { ArrowNarrowLeftIcon, PlusIcon } from '@heroicons/react/solid'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { ButtonCircle } from '../../components/Buttons/ButtonCircle'
import { ButtonLinkCircle } from '../../components/Buttons/ButtonLinkCircle'
import { Card } from '../../components/Card'
import { SwitchCheckbox } from '../../components/Checkboxes/SwitchCheckbox'
import { TextInput } from '../../components/Inputs/TextInput'
import { SimpleSelect } from '../../components/Selects/SimpleSelect'
import { useCategoriesCreate } from '../../hooks/Catgories/useCategoriesCreate'
import { useCategoriesList } from '../../hooks/Catgories/useCategoriesList'

export const CategoriesNewPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const { createCategories } = useCategoriesCreate()
  const { getParents, parents } = useCategoriesList()

  useEffect(() => {
    getParents()
  }, [])

  const handleClick = async () => {
    const name: string = (
      document.getElementById('categoryName') as HTMLInputElement
    ).value
    const parentId = (document.getElementById('parentId') as HTMLInputElement)
      .value

    const isEnableEcommerce = (
      document.getElementById('isEnableEcommerce') as HTMLInputElement
    ).checked
      ? 1
      : 0

    if (name === '') return
    //if (parseInt(parentId) === 0) return

    // Parse to integer value
    const payload = { name, parentId: parseInt(parentId), isEnableEcommerce }
    const result = await createCategories(payload)
    if (result) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Operación completada con éxito',
        showConfirmButton: false,
        timer: 1500,
      })
      navigate('/catalogue/categories')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error',
        text: 'Por favor, intenta nuevamente.',
      })
    }
  }

  return (
    <Card className='grow flex flex-col gap-y-2'>
      <div className='flex justify-between items-center p-4 border-b mb-5'>
        <div>
          <h1 className='text-3xl font-bold uppercase'>
            {t('create a new category')}
          </h1>
        </div>
        <div className='flex gap-4'>
          <ButtonLinkCircle path='/catalogue/categories'>
            <ArrowNarrowLeftIcon className='size-6' />
          </ButtonLinkCircle>

          <ButtonCircle
            title={t('save the category')}
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
            <label className='text-gray-900 capitalize'>{t('name')}</label>
            <TextInput
              id='categoryName'
              name='name'
            />
          </div>

          <div className='w-full'>
            <label className='text-gray-900 capitalize'>
              {t('parent category')}
            </label>
            <div>
              <SimpleSelect id='parentId'>
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
            <SwitchCheckbox id='isEnableEcommerce' />
            <span className='capitalize'>{t('website')}</span>
          </div>
        </div>
      </form>
    </Card>
  )
}
