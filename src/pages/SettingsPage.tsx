import { Card } from '../components/Card'
import { SettingAccount } from '../components/Settings/Account'
import { SettingLanguage } from '../components/Settings/Language'
import { NavSettings } from '../components/Settings/NavSettings'
export const SettingsPage = () => {
  return (
    <>
      <div className='flex flex-row gap-2'>
        <Card className='w-1/5'>
          <h1>Settings</h1>
          <NavSettings />
        </Card>
        <Card className='grow flex flex-col gap-y-4'>
          <SettingAccount />
          <SettingLanguage />
        </Card>
      </div>
    </>
  )
}
