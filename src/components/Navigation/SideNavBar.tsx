import { AuthorizeRutes } from "../../routes/AuthorizeRutes";
import { OnlyAuthenticateRotes } from "../../routes/OnlyAuthenticateRoutes";
import { useSideNavStores } from "../../stores/ui/sidenavbar";
import { LogOutIcon } from "../Icons/LogOutIcon";
import SideNavBarCollapseOption from "./SideNavBarCollapseOption";
import { SideNavBarOption, SideNavBarOptionCallback } from "./SideNavBarOption";
import { Divider } from "@tremor/react";

export const SideNavBar = () => {
  const mini = useSideNavStores((state) => state.mini);

  const SideNavRoutes = AuthorizeRutes;

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

        <div className="py-2 h-[92%] flex flex-col justify-between">
          <ul>
            {SideNavRoutes.map((route, index) => {
              const children = route?.children;
              if (children?.length) {
                return (
                  <SideNavBarCollapseOption
                    key={index}
                    icon={route.icon}
                    label={route.label}
                    isMini={mini}
                  >
                    {children?.map((route2, index2) => (
                      <SideNavBarOption
                        key={index2}
                        icon={route2.icon}
                        label={route2.label}
                        path={route2.path}
                        isMini={mini}
                      />
                    ))}
                  </SideNavBarCollapseOption>
                );
              } else {
                return (
                  <SideNavBarOption
                    key={index}
                    icon={route.icon}
                    label={route.label}
                    path={route.path || "/"}
                    isMini={mini}
                  />
                );
              }
            })}
          </ul>

          <ul>
            <Divider />
            <SideNavBarOptionCallback
              key={""}
              icon={<LogOutIcon />}
              label={"Logout"}
              callback={() => {
                alert("hi");
              }}
              isMini={mini}
            />

            {OnlyAuthenticateRotes.map((route, index) => (
              <SideNavBarOption
                key={index}
                icon={route.icon}
                label={route.label}
                path={route.path}
                isMini={mini}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
