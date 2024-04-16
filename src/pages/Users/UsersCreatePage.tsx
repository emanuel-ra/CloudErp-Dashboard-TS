import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonCircle } from '../../components/Buttons/ButtonCircle'
import { ButtonLinkCircle } from '../../components/Buttons/ButtonLinkCircle'
import { Card } from '../../components/Card'
import { ArrowBackToIcon } from '../../components/Icons/ArrowsIcon'
import { PlusCircleIcon } from '../../components/Icons/PlusIcon'
import { EmailInput } from '../../components/Inputs/EmailInput'
import { TextInput } from '../../components/Inputs/TextInput'

export const UsersCreatePage = () => {
  const { t } = useTranslation()
  const fullNameId = useId()
  const emailId = useId()
  const password = useId()
  const cPassword = useId()

  return (
    <Card className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <h1 className='capitalize text-3xl'>{t('create user')}</h1>
        <div className='flex gap-x-2'>
          <ButtonLinkCircle path='/users'>
            <ArrowBackToIcon size={6} strokeWidth={1.5} />
          </ButtonLinkCircle>
          <ButtonCircle title='Guardar'>
            <PlusCircleIcon size={6} strokeWidth={1.5} />
          </ButtonCircle>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <TextInput
          id={fullNameId}
          name='fullName'
          placeholder={t('type your full name')}
        />
        <EmailInput
          id={emailId}
          name='email'
          placeholder={t('type your email address')}
        />
        <TextInput
          id={password}
          name='password'
          placeholder={t('type your password')}
        />
        <TextInput
          id={cPassword}
          name='cPassword'
          placeholder={t('type your password again ')}
        />
      </div>
    </Card>
  )
}
