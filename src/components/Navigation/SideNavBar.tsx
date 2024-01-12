
import { useSideNavStores } from '../../stores/ui/sidenavbar';
import { HomeIcon } from '../Icons/HomeIcon';
import SideNavBarCollapseOption from './SideNavBarCollapseOption';
import { SideNavBarOption}  from './SideNavBarOption'

export const  SideNavBar = () => {
  const mini = useSideNavStores(state => state.mini)
  
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
            <SideNavBarOption
              icon={<HomeIcon size={5} />}
              label={"Dashboard"}
              isMini={mini}
            />
            <SideNavBarOption
              icon={<HomeIcon size={5} />}
              label={"Option one"}
              isMini={mini}
            />
            <SideNavBarOption
              icon={<HomeIcon size={5} />}
              label={"Option two"}
              isMini={mini}
            />
            <SideNavBarCollapseOption
              icon={<HomeIcon size={5} />}
              label={"Collapsed"}
              isMini={mini}
            >
              <SideNavBarOption icon={"6"} label={"Option six"} isMini={mini} />
            </SideNavBarCollapseOption>
            <SideNavBarOption
              icon={<HomeIcon size={5} />}
              label={"Option three"}
              isMini={mini}
            />
            <SideNavBarOption
              icon={<HomeIcon size={5} />}
              label={"Option four"}
              isMini={mini}
            />
          </ul>

          <ul>
            <SideNavBarCollapseOption
              icon={<HomeIcon size={5} />}
              label={"Collapsed"}
              isMini={mini}
            >
              <SideNavBarOption
                icon={"5"}
                label={"Option Five"}
                isMini={mini}
              />
            </SideNavBarCollapseOption>
          </ul>
        </div>
      </div>
    </aside>
  );
}