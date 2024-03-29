import { useSideNavStores } from '../../stores/ui/sidenavbar'
import { BreadcrumbSimple } from '../Breadcrumb/Breadcrumb'
import { BarIcon, BarIconBottomRight } from '../Icons/BarIcon'
import { SwitchTheme } from '../Switches/SwitchTheme'

export const NavBar = () => {
  const mini = useSideNavStores((state) => state.mini)
  const setState = useSideNavStores((state) => state.setState)
  const handleSideNav = () => {
    setState(!mini)
  }
  return (
    <nav className='[grid-area:nav] navbar '>
      <div
        className={`flex w-full gap-2 max-md:p-1 max-lg:justify-between ${
          !mini && ''
        }`}
      >
        <BreadcrumbSimple />
        <div className='flex items-center justify-center'>
          <a
            href='#'
            onClick={handleSideNav}
            className='text-slate-800 dark:text-white w-6 h-6'
          >
            {mini ? <BarIconBottomRight size={5} /> : <BarIcon size={5} />}
          </a>{' '}
          <SwitchTheme />
        </div>
      </div>
    </nav>
  )
}
