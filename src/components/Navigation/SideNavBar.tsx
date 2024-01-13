
import { RoutesType } from '../../abstraction/enums/routes';
import { AuthorizeRutes } from '../../routes/AuthorizeRutes';
import { useSideNavStores } from '../../stores/ui/sidenavbar';
import SideNavBarCollapseOption from './SideNavBarCollapseOption';
import { SideNavBarOption}  from './SideNavBarOption'

export const  SideNavBar = () => {
  const mini = useSideNavStores(state => state.mini)

  const SideNavRoutes = AuthorizeRutes.filter(r => r.type === RoutesType.SIDE_NAV_BAR)
  
  return (
    <aside
      className={`[grid-area:aside] ${
        mini ? "aside-mini" : "aside"
      } transition-all delay-75 ease-out `}
    >
      <div className="aside-nav-wrapper">
        <div className="aside-nav-head">
          <picture>
            <img
              src="https://placehold.co/50x50?text=Logo"
              alt="Logo"
              className="rounded-full"
            />
          </picture>
          {!mini && <h1 className="lg:block">Tera Dashboard</h1>}
        </div>
        <hr className="mt-2" />

        <div className="py-2">
          <ul>
            {
              SideNavRoutes.map((route,index) => {
                const children = route?.children
                if(children?.length){
                  return (
                    <SideNavBarCollapseOption
                      key={index}
                      icon={route.icon}
                      label={route.label}
                      isMini={mini}
                    >
                      {children?.map((route2,index2) => (
                        <SideNavBarOption
                          key={index2}
                          icon={route2.icon}
                          label={route2.label}
                          path={route2.path}
                          isMini={mini}
                        />
                      ))}

                      
                    </SideNavBarCollapseOption>
                  )
                }else{
                  return (
                      <SideNavBarOption
                        key={index}
                        icon={route.icon}
                        label={route.label}
                        path={route.path}
                        isMini={mini}
                      />
                    )
                }
              })
               
            }
           
          </ul>

          
        </div>
      </div>
    </aside>
  );
}