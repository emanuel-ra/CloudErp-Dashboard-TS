import { PlusIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonCircle } from '../../components/Buttons/ButtonCircle'
import { Card } from '../../components/Card'
import { SimpleCheckbox } from '../../components/Checkboxes/SimpleCheckbox'
import { TextAreaInput } from '../../components/Inputs/TextAreaInput'
import { TextInput } from '../../components/Inputs/TextInput'
import { SimpleSelect } from '../../components/Selects/SimpleSelect'
import { useBrandList } from '../../hooks/Brands/useBrandList'
import { useProductsListPrice } from '../../hooks/Products/useProductsListPrice'

export const ProductsCreatePage = () => {
  const { t } = useTranslation()
  const { priceList, getPriceList } = useProductsListPrice()
  const { brand, getAllBrands } = useBrandList()

  useEffect(() => {
    // GET LIST OF PRICES AVAILABLE
    getPriceList()
    getAllBrands()
  }, [])

  const handleClick = () => {
    const inputsPrice: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.inputsPrice')

    const prices: { id: number; value: number }[] = []
    inputsPrice.forEach((element) => {
      const id: number = parseInt(element.id)
      const value: number = parseFloat(element.value)
      const price = { id, value }
      prices.push(price)
    })

    console.log(prices)
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
            placeholder={t('type the code')}
          />
        </div>

        <div className='w-full lg:w-[73.6%]'>
          <label htmlFor='name'>{t('name')}</label>
          <TextInput
            id='name'
            name='name'
            placeholder={t('type the name')}
          />
        </div>

        <div className='w-full lg:w-[15%]'>
          <label htmlFor='model'>{t('model')}</label>
          <TextInput
            id='model'
            name='model'
            placeholder={t('type the model')}
          />
        </div>

        <div className='w-full'>
          <label htmlFor='code'>{t('description')}</label>
          <TextAreaInput
            id='description'
            name='description'
            placeholder={t('type the description')}
          />
        </div>

        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('brand')}</label>
          <SimpleSelect>
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
            placeholder={t('type the model')}
          />
        </div>

        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('sat code')}</label>
          <TextInput
            id='satCode'
            name='satCode'
            placeholder={t('type the model')}
          />
        </div>

        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('sat unit')}</label>
          <TextInput
            id='satUnit'
            name='satUnit'
            placeholder={t('type the model')}
          />
        </div>

        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('width')}</label>
          <TextInput
            id='satUnit'
            name='satUnit'
            placeholder={t('type the model')}
          />
        </div>

        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('height')}</label>
          <TextInput
            id='satUnit'
            name='satUnit'
            placeholder={t('type the model')}
          />
        </div>

        <div className='w-full lg:w-[20%]'>
          <label htmlFor='satCode'>{t('weigth')}</label>
          <TextInput
            id='satUnit'
            name='satUnit'
            placeholder={t('type the model')}
          />
        </div>

        <div className='w-full flex items-center justify-center gap-x-2 font-semibold lg:w-[15%]'>
          <SimpleCheckbox />
          <label htmlFor='satCode'>{t('website')}</label>
        </div>

        <div className='w-full flex items-center justify-center gap-x-2 font-semibold lg:w-[15%]'>
          <SimpleCheckbox />
          <label htmlFor='satCode'>{t('billable')}</label>
        </div>

        <h2 className='w-full text-2xl font-semibold text-center border-y py-2'>
          Prices
        </h2>

        {priceList?.map((item) => (
          <div
            className='w-full lg:w-[15%]'
            key={item.id}
          >
            <label htmlFor='satCode'>{t(item.name)}</label>
            <TextInput
              id={item.id.toString()}
              className='inputsPrice'
              placeholder={t('00.00')}
            />
          </div>
        ))}
      </form>
    </Card>
  )
}
