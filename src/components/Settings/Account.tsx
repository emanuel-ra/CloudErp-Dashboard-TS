import { Card } from '../Card'
import { useTranslation } from 'react-i18next'
export const SettingAccount = () => {
  const { t } = useTranslation()
  return (
    <Card id='settingAccountSection'>
      <h1>{t('settings.account')}</h1>
    </Card>
  )
}
