import { PlusIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'
import { ButtonCircle } from '../../components/Buttons/ButtonCircle'
import { Card } from '../../components/Card'
import { SimpleCheckbox } from '../../components/Checkboxes/SimpleCheckbox'
import { SwitchCheckbox } from '../../components/Checkboxes/SwitchCheckbox'
import { TextAreaInput } from '../../components/Inputs/TextAreaInput'
import { TextInput } from '../../components/Inputs/TextInput'
import { SimpleSelect } from '../../components/Selects/SimpleSelect'
import { useBrandList } from '../../hooks/Brands/useBrandList'
import { useCategoriesList } from '../../hooks/Catgories/useCategoriesList'
import { useProductsListPrice } from '../../hooks/Products/useProductsListPrice'
import { getInputValue, isChecked } from '../../utils/Forms'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  },
})

export const ProductsCreatePage = () => {
  const { t } = useTranslation()
  const { priceList, getPriceList } = useProductsListPrice()
  const { categoriesWithChildren, getCategoriesWithChildren } =
    useCategoriesList()
  const { brand, getAllBrands } = useBrandList()

  useEffect(() => {
    // GET LIST OF PRICES AVAILABLE
    getPriceList()
    getAllBrands()
    getCategoriesWithChildren()
  }, [])

  const handleClick = () => {
    // GET DYNAMIC PRICE INPUTS
    const inputsPrice: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.inputsPrice')
    // GET DYNAMIC CATEGORY CHECKS
    const categories: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.checkCategories')

    const code = getInputValue('code')
    const name = getInputValue('name')
    const model = getInputValue('model')
    const description = getInputValue('description')
    const brandId: number = parseInt(getInputValue('brandId'))
    const barcode = getInputValue('barcode')
    const satCode = getInputValue('satCode')
    const satUnit = getInputValue('satUnit')
    const width = getInputValue('width')
    const height = getInputValue('height')
    const enableWeb = isChecked('enableWeb')
    const enableInvoice = isChecked('enableInvoice')

    const prices: { id: number; value: number; name: string }[] = []
    inputsPrice.forEach((element) => {
      const id: number = parseInt(element.id)
      const value: number = parseFloat(element.value)
      const name: string = element.name
      const price = { id, value, name }
      if (value) prices.push(price)
    })

    const selectedCategories: number[] = []
    categories.forEach((element) => {
      if (element.checked) selectedCategories.push(parseInt(element.value))
    })

    if (code === '') {
      Toast.fire({
        icon: 'warning',
        title: t('you have to type the product code'),
      })
      return
    }

    if (name === '') {
      Toast.fire({
        icon: 'warning',
        title: t('you have to type the product name'),
      })
      return
    }

    if (!brandId) {
      Toast.fire({
        icon: 'warning',
        title: t('you have to select one brand'),
      })
      return
    }

    if (!prices.length) {
      Toast.fire({
        icon: 'warning',
        title: t(`you must have to type the prices`),
      })
      return false
    }

    if (!selectedCategories.length) {
      Toast.fire({
        icon: 'warning',
        title: t(`you must have to select any category`),
      })
      return false
    }

    const payload = {
      code,
      name,
      model,
      description,
      brandId,
      barcode,
      satCode,
      satUnit,
      width,
      height,
      enableWeb,
      enableInvoice,
      prices,
      categories: selectedCategories,
    }
    console.log(payload)
  }

  return (
    <Card className='grow'>
      <div className='w-full flex justify-between items-center mb-5'>
        <h1 className='text-4xl font-semibold uppercase text-center'>
          {t('new product')}
        </h1>
        <div>
          <ButtonCircle
            title={t('register new product')}
            onClick={handleClick}
          >
            <PlusIcon className='size-6' />
          </ButtonCircle>
        </div>
      </div>

      <form className='w-full flex flex-wrap gap-x-2 gap-y-4'>
        <div className='w-full lg:w-[10%]'>
          <label htmlFor='code'>{t('code')}</label>
          <TextInput
            id='code'
            name='code'
            placeholder={t('type the product code')}
          />
        </div>
        <div className='w-full lg:w-[73.6%]'>
          <label htmlFor='name'>{t('name')}</label>
          <TextInput
            id='name'
            name='name'
            placeholder={t('type the product name')}
          />
        </div>
        <div className='w-full lg:w-[15%]'>
          <label htmlFor='model'>{t('model')}</label>
          <TextInput
            id='model'
            name='model'
            placeholder={t('type the product model')}
          />
        </div>
        <div className='w-full'>
          <label htmlFor='code'>{t('description')}</label>
          <TextAreaInput
            id='description'
            name='description'
            placeholder={t('type the product description')}
          />
        </div>
        <div className='w-full lg:w-[20%]'>
          <label htmlFor='brandId'>{t('brand')}</label>
          <SimpleSelect id='brandId'>
            <option value='0'>Select any brand</option>
            {brand?.map((b) => (
              <option
                key={b.id}
                value={b.id}
              >
                {b.name}
              </option>
            ))}
          </SimpleSelect>
        </div>
        <div className='w-full lg:w-[20%]'>
          <label htmlFor='barcode'>{t('barcode')}</label>
          <TextInput
            id='barcode'
            name='barcode'
            placeholder={t('type the barcode')}
          />
        </div>
        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('sat code')}</label>
          <TextInput
            id='satCode'
            name='satCode'
            placeholder={t('type the sat code')}
          />
        </div>
        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('sat unit')}</label>
          <TextInput
            id='satUnit'
            name='satUnit'
            placeholder={t('type the sat unit')}
          />
        </div>
        <div className='w-full lg:w-[20%]'>
          <label htmlFor='width'>{t('width')}</label>
          <TextInput
            id='width'
            name='width'
            placeholder={t('type the product width')}
          />
        </div>
        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('height')}</label>
          <TextInput
            id='height'
            name='height'
            placeholder={t('type the product height')}
          />
        </div>
        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('weigth')}</label>
          <TextInput
            id='weigth'
            name='weigth'
            placeholder={t('type the product weigth')}
          />
        </div>
        <div className='w-full flex items-center justify-center gap-x-2 font-semibold lg:w-[15%]'>
          <SwitchCheckbox id='enableWeb' />
          <label htmlFor='enableWeb'>{t('website')}</label>
        </div>
        <div className='w-full flex items-center justify-center gap-x-2 font-semibold lg:w-[15%]'>
          <SwitchCheckbox id='enableInvoice' />
          <label htmlFor='enableInvoice'>{t('billable')}</label>
        </div>
        <h2 className='w-full text-2xl font-semibold text-center border-y py-2'>
          Prices
        </h2>
        {priceList?.map((item) => (
          <div
            className='w-full lg:w-[15%]'
            key={item.id}
          >
            <label htmlFor={item.id.toString()}>{t(item.name)}</label>
            <TextInput
              id={item.id.toString()}
              name={item.name}
              className='inputsPrice'
              placeholder={t('00.00')}
            />
          </div>
        ))}

        <h2 className='w-full text-2xl font-semibold text-center border-y py-2'>
          Categories
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-4'>
          {categoriesWithChildren?.map((category) => (
            <ul
              key={category.id}
              className='border rounded grow'
            >
              <li className='w-full border-b border-slate-600/80 px-4 rounded-t  '>
                <SimpleCheckbox
                  label={category.name}
                  checkClass='checkCategories'
                  value={category.id}
                />
              </li>
              <ul className='px-4'>
                {category?.children?.map((child) => (
                  <li key={child.id}>
                    <SimpleCheckbox
                      label={child.name}
                      checkClass='checkCategories'
                      value={child.id}
                    />
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </form>

      <div className='w-ful flex justify-end items-center'>
        <ButtonCircle
          title={t('register new product')}
          onClick={handleClick}
        >
          <PlusIcon className='size-6' />
        </ButtonCircle>
      </div>
    </Card>
  )
}
