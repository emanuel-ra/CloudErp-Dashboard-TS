import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SideNavBar } from '../components/Navigation/SideNavBar'
import { useThemeStore } from '../stores/ui/theme'

export const Layout = () => {
  const theme = useThemeStore((state) => state.theme)
  return (
    <div data-mode={theme}>
      <div
        className='main-wrapper min-h-dvh bg-gradient-to-b bg-slate-300 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800'
      >
        <Header />

        <SideNavBar />

        <main
          className='[grid-area:main] h-full flex flex-col justify-between '
        >
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  )
}
