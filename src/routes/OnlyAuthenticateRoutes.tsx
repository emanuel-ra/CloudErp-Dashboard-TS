import { CogIcon } from '@heroicons/react/solid'
import { SettingsPage } from '../pages/SettingsPage'

export const OnlyAuthenticateRotes = [
  {
    icon: <CogIcon />,
    label: 'sideNavBar.settings',
    path: '/settings',
    element: <SettingsPage />
  }
]
