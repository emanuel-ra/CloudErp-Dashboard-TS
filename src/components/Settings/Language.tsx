import { Languages } from '../../utils/languaje'
import { useLanguageStore } from '../../stores/language'
import { useTranslation } from 'react-i18next'

import { useEffect } from 'react'
import i18n from '../../setup/i18next'
import { Card } from '../Card'

export const SettingLanguage = () => {
  const language = useLanguageStore((state) => state.lang)
  const setLanguage = useLanguageStore((state) => state.setLanguage)
  const { t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <Card>
      <div className='space-y-6 w-1/3'>
        <span className='capitalize block text-sm font-medium text-gray-900 dark:text-white'>
          {t('language')}
        </span>
        <select
          className='capitalize w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm lg:text-base py-2'
          defaultValue={language}
          onChange={(e) => {
            setLanguage(e.target.value)
          }}
        >
          {Languages.map((language) => (
            <option key={language.code} value={language.code}>
              {t(language.name)}
            </option>
          ))}
        </select>
      </div>
    </Card>
  )
}
