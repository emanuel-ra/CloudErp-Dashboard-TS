import { List, ListItem } from "@tremor/react";
import { UserGroupIcon } from "@heroicons/react/solid";
import { LanguageIcon } from "../Icons/Language";
import { useTranslation } from "react-i18next";

export const NavSettings = () => {
  const { t } = useTranslation();
  return (
    <List className="flex shrink flex-col">
      <ListItem>
        <a
          className="w-full flex items-center gap-2 p-2 hover:bg-slate-200"
          href="#settingAccountSection"
        >
          <UserGroupIcon className="size-6" />
          {t("settings.account")}
        </a>
      </ListItem>
      <ListItem>
        <a
          className="w-full flex items-center gap-2 p-2 hover:bg-slate-200"
          href="#settingLanguageSection"
        >
          <LanguageIcon _class="size-6" />
          {t("settings.language")}
        </a>
      </ListItem>
    </List>
  );
};
